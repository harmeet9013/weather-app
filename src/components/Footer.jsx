import { Stack, Typography } from "@mui/joy";

export default function Footer(props) {
    return (
        <Stack margin={5}>
            <Typography variant="body-md">
                This website is a weather app that allows users to search for
                the current weather conditions of any city in the world.
                <br />
                It uses the WeatherAPI to fetch the data and displays it in a
                simple and elegant interface.
                <br />
                The website is built with ReactJS, a popular JavaScript library
                for creating user interfaces.
                <br />
                The website also features a dark mode option and a responsive
                design that adapts to different screen sizes.
            </Typography>
        </Stack>
    );
}
