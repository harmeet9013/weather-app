import FetchLatLong from "./FetchLatLong";
import PrintWeatherInfo from "./PrintWeatherInfo";
import { apiKey } from "..";
// import apiCall from "./apiCall";
import { useState } from "react";

export default function FetchWeatherData({ WeatherInfo, setWeatherInfo }) {
    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");

    FetchLatLong({ lat, long, setLat, setLong });

    function fetchWeatherData() {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`
        )
            .then((res) => res.json())
            .then((result) => {
                setWeatherInfo(result);
                console.log(WeatherInfo)
            });
    }

    return (
        <div className="WeatherInfo">
            <button onClick={fetchWeatherData}>Refresh!</button>
            {/* <PrintWeatherInfo WeatherInfo={WeatherInfo} /> */}
        </div>
    );
}
