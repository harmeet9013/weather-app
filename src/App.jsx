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
            <p className="desc-para">
                This website is a weather app that allows users to search for
                the current weather conditions of any city in the world. It uses
                the OpenWeatherMap API to fetch the data and displays it in a
                simple and elegant interface. The website is built with ReactJS,
                a popular JavaScript library for creating user interfaces. The
                website also features a dark mode option and a responsive design
                that adapts to different screen sizes.
            </p>
            <h2 className="created-by">by Harmeet Singh</h2>
        </Container>
    );
}
