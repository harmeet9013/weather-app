import FetchLatLong from "./FetchLatLong";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useState } from "react";
import { API_KEY } from "./shared/credentials";

export default function FetchWeatherData({
    WeatherInfo,
    setWeatherInfo,
    setFirstLaunch,
}) {
    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");

    FetchLatLong({ setLat, setLong });

    function fetchWeatherData() {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
        )
            .then((res) => res.json())
            .then((result) => {
                setWeatherInfo(result);
                setFirstLaunch(false);
            });
    }

    return (
        <div className="weather-info">
            Refresh
            <RefreshIcon
                onClick={fetchWeatherData}
                sx={{ marginY: "-6px", marginX: "6px" }}
            />
        </div>
    );
}
