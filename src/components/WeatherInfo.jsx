import {
    ArrowDownward,
    ArrowUpward,
    Cloud,
    LocationCity,
    ReplayRounded,
    Search,
    Send,
} from "@mui/icons-material";
import {
    Alert,
    Box,
    Button,
    Card,
    Input,
    LinearProgress,
    Stack,
    ToggleButtonGroup,
    Typography,
} from "@mui/joy";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "./shared/credentials";
import PrintWeatherInfo from "./PrintWeatherInfo";

export default function WeatherInfo(props) {
    const [weatherData, setWeatherData] = useState(null);

    const [userChoice, setUserChoice] = useState("search");
    const [userCoordinates, setUserCoordinates] = useState(null);

    const [canCall, setCanCall] = useState(true);

    const [alertInputs, setAlertInputs] = useState({
        open: false,
        color: "",
        message: "",
    });

    const fetchLatLong = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const long = position.coords.longitude;

                    setUserCoordinates({
                        lat,
                        long,
                    });
                },
                (error) => {
                    setAlertInputs({
                        open: true,
                        color: "danger",
                        message: error.message,
                    });
                    setTimeout(() => {
                        setAlertInputs({
                            open: false,
                            color: "",
                            message: "",
                        });
                    }, 5000);
                }
            );
        }
    };

    useEffect(() => {
        if (canCall === false) {
            const timer = setTimeout(() => {
                setCanCall(true);
            }, 10 * 60 * 1000); // 10 minutes in milliseconds

            return () => {
                clearTimeout(timer);
            };
        }
    }, [canCall]);

    const fetchData = async (location) => {
        const LOCATION = location
            ? location
            : `${userCoordinates.lat},${userCoordinates.long}`;

        try {
            const result = await axios.get(
                `${API_URL + API_KEY}q=${LOCATION}&aqi=yes`
            );
            setWeatherData(result.data);
            setCanCall(false);
        } catch (error) {
            if (error.response.data.error.code === 1006) {
                setAlertInputs({
                    open: true,
                    color: "warning",
                    message: "Invalid location. Please try again.",
                });
            } else {
                setAlertInputs({
                    open: true,
                    color: "danger",
                    message:
                        "There was some problem fetching from the API. Please try again later.",
                });
            }

            setTimeout(() => {
                setAlertInputs({
                    open: false,
                    color: "",
                    message: "",
                });
            }, 5000);
        }
    };

    return (
        <Stack
            direction="column"
            spacing={4}
            justifyContent="center"
            alignItems="center"
            margin={5}
            marginTop={10}
        >
            <Card color="primary" size="lg" invertedColors>
                <ToggleButtonGroup
                    size="lg"
                    color="primary"
                    value={userChoice}
                    onChange={(event, newValue) => {
                        setUserChoice(newValue);
                    }}
                    sx={{
                        borderRadius: "15px",
                    }}
                >
                    <Button
                        fullWidth
                        value="location"
                        startDecorator={<LocationCity />}
                        onClick={() => {
                            fetchLatLong();
                            if (userCoordinates === null) {
                                setUserChoice("search");
                            } else if (canCall) {
                                fetchData();
                            }
                        }}
                    >
                        Use Current Location
                    </Button>

                    <Button
                        fullWidth
                        value="search"
                        startDecorator={<Search />}
                    >
                        Search
                    </Button>
                </ToggleButtonGroup>

                <Box
                    component="form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        canCall && fetchData(e.target.searchLocation.value);
                    }}
                >
                    <Input
                        disabled={userChoice !== "search" && true}
                        required
                        autoFocus
                        id="searchLocation"
                        placeholder="Type your location, zipcode…"
                        startDecorator={<Search />}
                        endDecorator={
                            <Button
                                disabled={userChoice !== "search" && true}
                                variant="soft"
                                sx={{
                                    borderRadius: "10px",
                                }}
                                type="submit"
                            >
                                <Send />
                            </Button>
                        }
                        sx={{
                            borderRadius: "15px",
                            "&::before": {
                                transition: "box-shadow .15s ease-in-out",
                            },
                        }}
                    />
                </Box>
            </Card>

            <PrintWeatherInfo weatherData={weatherData} />

            {alertInputs.open ? (
                <Alert color={alertInputs.color} variant="soft">
                    {alertInputs.message}
                </Alert>
            ) : (
                <Button
                    color={canCall ? "primary" : "warning"}
                    startDecorator={<ReplayRounded />}
                    disabled={canCall ? false : true}
                    sx={{
                        borderRadius: "15px",
                    }}
                >
                    {canCall ? "Refresh" : "Please wait 10 minutes"}
                </Button>
            )}
        </Stack>
    );
}
