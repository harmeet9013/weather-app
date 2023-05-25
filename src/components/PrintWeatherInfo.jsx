export default function PrintWeatherInfo({ WeatherInfo }) {
    console.log(WeatherInfo);
    const [humidity, feels_like, temp, temp_max, temp_min, name, deg, speed] = WeatherInfo;
    console.log(humidity, feels_like, temp, temp_max, temp_min, name, deg, speed)
}