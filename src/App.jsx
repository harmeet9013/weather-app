import { useState } from "react";
import FetchWeatherData from "./components/FetchWeatherData";

export default function App() {
    const [WeatherInfo, setWeatherInfo] = useState({});
    return (
        <div className="App">
            <FetchWeatherData
                WeatherInfo={WeatherInfo}
                setWeatherInfo={setWeatherInfo}
            />
        </div>
    );
}
