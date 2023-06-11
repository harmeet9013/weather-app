import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import CloudIcon from "@mui/icons-material/Cloud";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import WavesIcon from "@mui/icons-material/Waves";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const WeatherIcon = ({ condition }) => {
    const iconMargin = {
        marginX: "-2px",
        marginY: "-6px",
    };

    const getWeatherIcon = (condition) => {
        switch (condition) {
            case "Haze":
                return <CloudIcon sx={iconMargin} />;
            case "Windy":
                return <WavesIcon sx={iconMargin} />;
            case "Sunny":
                return <WbSunnyIcon sx={iconMargin} />;
            case "Rainy":
                return <CloudIcon sx={iconMargin} />;
            case "Stormy":
                return <FlashOnIcon sx={iconMargin} />;
            default:
                return <ClearIcon sx={iconMargin} />;
        }
    };

    const weatherIcon = getWeatherIcon(condition);

    return (
        <div>
            {weatherIcon} {condition}
        </div>
    );
};

export default WeatherIcon;
