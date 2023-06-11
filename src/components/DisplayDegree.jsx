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
        <div
            style={{
                textAlign: "left",
                marginLeft: "20px",
            }}
        >
            <h2 style={{ fontSize: "16px" }}>
                {direction} &#x2022;
                <AirIcon
                    sx={{
                        marginY: "-6px",
                    }}
                />
                {speed} km/hr
            </h2>
            <h3
                style={{
                    textAlign: "right",
                    marginRight: "20px",
                    marginTop: "-35px",
                    fontSize: "16px"
                }}
            >
                Humidity &#x2022; {humidity}%
            </h3>
        </div>
    );
};

export default DirectionDisplay;
