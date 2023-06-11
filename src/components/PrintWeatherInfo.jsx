import React from "react";
import { Box } from "@mui/system";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DisplayDegree from "./DisplayDegree";
import WeatherIcon from "./WeatherIcon";

export default function PrintWeatherInfo({ firstLaunch, WeatherInfo }) {
    if (firstLaunch) {
        return "Click on the refresh button";
    } else {
        const {
            main: { humidity, feels_like, temp, temp_max, temp_min },
            name,
            weather: {
                0: { main },
            },
            wind: { deg, speed },
        } = WeatherInfo;

        return (
            <div
                style={{
                    textAlign: "center",
                }}
            >
                <Box
                    sx={{
                        backgroundColor: "#3C7A89",
                        borderRadius: "20px",
                        padding: "20px",
                    }}
                >
                    <div
                        style={{
                            marginTop: "-40px",
                        }}
                    >
                        {/* Min and Max */}
                        <h3
                            style={{
                                textAlign: "right",
                                marginTop: "50px",
                                marginRight: "10px",
                                textShadow: "1px 1px 5px rgb(0, 0, 0, 0.6)",
                            }}
                        >
                            Day {temp_max.toString().substring(0, 2)}&#176;
                            <ArrowDropUpIcon
                                sx={{
                                    color: "rgb(255, 150, 150)",
                                    marginY: "-6px",
                                    transform: "scale(1.2)",
                                }}
                            />
                            &#x2022; Night {temp_min.toString().substring(0, 2)}
                            &#176;
                            <ArrowDropDownIcon
                                sx={{
                                    color: "rgb(150, 255, 150)",
                                    marginY: "-6px",
                                    transform: "scale(1.2)",
                                }}
                            />
                        </h3>

                        {/* Temp */}
                        <h1
                            style={{
                                textAlign: "right",
                                marginRight: "35px",
                                marginTop: "-20px",
                                fontSize: "70px",
                                textShadow: "1px 1px 2px rgb(0, 0, 0, 0.2)",
                            }}
                        >
                            {temp.toString().substring(0, 2)}&#176; C
                        </h1>

                        {/* Feels Like */}
                        <h3
                            style={{
                                textAlign: "right",
                                paddingRight: "60px",
                                marginTop: "-40px",
                                fontSize: "16px",
                                textShadow: "1px 1px 5px rgb(0, 0, 0, 0.6)",
                            }}
                        >
                            <i>
                                Feels like{" "}
                                {feels_like.toString().substring(0, 2)}&#176;
                            </i>
                        </h3>

                        <div
                            style={{
                                textAlign: "left",
                                marginTop: "-130px",
                                marginBottom: "50px",
                            }}
                        >
                            {/* Place */}
                            <h3
                                style={{
                                    textShadow: "1px 1px 5px rgb(0, 0, 0, 0.6)",
                                }}
                            >
                                <i>{name}</i>
                            </h3>

                            {/* Weather */}
                            <h3
                                style={{
                                    textAlign: "left",
                                }}
                            >
                                <WeatherIcon condition={main} />
                            </h3>
                        </div>
                    </div>
                </Box>
                <DisplayDegree degree={deg} speed={speed} humidity={humidity} />
            </div>
        );
    }
}
