import { Circle, LocationCity } from "@mui/icons-material";
import { Box, Card, Skeleton, Stack, Typography } from "@mui/joy";

export default function PrintWeatherInfo(props) {
    const { name, region } =
        props.weatherData === null ? {} : props.weatherData.location;

    const {
        temp_c,
        humidity,
        feelslike_c,
        condition: { text, icon } = {},
        air_quality: { pm10 } = {},
    } = props.weatherData === null ? {} : props.weatherData.current;

    const findAQIColor = () => {
        if (pm10 < 100) {
            return "success";
        } else if (pm10 > 100 && pm10 < 200) {
            return "warning";
        } else {
            return "danger";
        }
    };

    return (
        <Stack
            size="lg"
            color="primary"
            invertedColors
            spacing={4}
            component={Card}
            direction="row"
            useFlexGap
            sx={{ maxWidth: "60ch", cursor: "default" }}
        >
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Typography level="title-lg">
                    <Skeleton
                        loading={props.weatherData === null ? true : false}
                    >
                        {`Feels Like: ${feelslike_c}`}&deg;C
                    </Skeleton>
                </Typography>

                {props.weatherData !== null && (
                    <Box
                        sx={{
                            width: "64px",
                            height: "64px",
                        }}
                        component="img"
                        src={icon}
                    />
                )}

                <Typography variant="h5">
                    <Skeleton
                        loading={props.weatherData === null ? true : false}
                    >
                        {`${text}`}
                    </Skeleton>
                </Typography>

                <Typography level="title-md">
                    <Skeleton
                        loading={props.weatherData === null ? true : false}
                    >
                        {`Humidity: ${humidity}%`}
                    </Skeleton>
                </Typography>
            </Stack>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Typography level="title-md">
                    <Skeleton
                        loading={props.weatherData === null ? true : false}
                    >
                        <LocationCity
                            sx={{
                                my: "-6px",
                            }}
                        />
                        {` ${name}, ${region}`}
                    </Skeleton>
                </Typography>

                <Typography level="h1">
                    <Skeleton
                        loading={props.weatherData === null ? true : false}
                    >
                        {`${temp_c}`}&deg;C
                    </Skeleton>
                </Typography>

                <Typography level="title-md">
                    <Skeleton
                        loading={props.weatherData === null ? true : false}
                    >
                        AQI:{" "}
                        <Circle
                            fontSize="inherit"
                            color={findAQIColor()}
                            sx={{
                                my: "-3px",
                            }}
                        />{" "}
                        {pm10} pm10
                    </Skeleton>
                </Typography>
            </Stack>
        </Stack>
    );
}
