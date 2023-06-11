import React from "react";
import AirIcon from "@mui/icons-material/Air";

const DirectionDisplay = ({ degree, speed, humidity }) => {
    const getDirection = (degree) => {
        const directions = [
            "North",
            "North-East",
            "East",
            "South-East",
            "South",
            "South-West",
            "West",
            "North-West",
        ];

        const index = Math.floor(degree / 45 + 0.5) % 8;
        return directions[index];
    };

    const direction = getDirection(degree);
    return (
        <div className="degree-humidity">
            <h3 className="degree-humidity-h3">
                {direction} &#x2022;
                <AirIcon
                    sx={{
                        marginY: "-6px",
                    }}
                />
                {speed} km/hr
            </h3>
            <h3 className="degree-humidity-h3-text">
                Humidity &#x2022; {humidity}%
            </h3>
        </div>
    );
};

export default DirectionDisplay;
