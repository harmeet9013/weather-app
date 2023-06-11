import { useState } from "react";
import { Box, Container } from "@mui/system";
import FetchWeatherData from "./components/FetchWeatherData";
import PrintWeatherInfo from "./components/PrintWeatherInfo";

export default function App() {
    const [WeatherInfo, setWeatherInfo] = useState({});
    const [firstLaunch, setFirstLaunch] = useState(true);
    return (
        <Container maxWidth="sm">
            <Box className="outerbox-container">
                <FetchWeatherData
                    WeatherInfo={WeatherInfo}
                    setWeatherInfo={setWeatherInfo}
                    setFirstLaunch={setFirstLaunch}
                />
                <PrintWeatherInfo
                    firstLaunch={firstLaunch}
                    WeatherInfo={WeatherInfo}
                />
            </Box>
        </Container>
    );
}
