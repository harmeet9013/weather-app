import { useEffect } from "react";

export default function FetchLatLong({ lat, long, setLat, setLong }) {
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });
    },[lat, long]);

    return null;
}