import { extendTheme } from "@mui/joy/styles";

const JoyTheme = extendTheme({
    fontFamily: {
        display: "work sans",
        body: "work sans",
    },
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    50: "#ecfeff",
                    100: "#cffafe",
                    200: "#a5f3fc",
                    300: "#67e8f9",
                    400: "#22d3ee",
                    500: "#06b6d4",
                    600: "#0891b2",
                    700: "#0e7490",
                    800: "#155e75",
                    900: "#164e63",
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    50: "#ecfeff",
                    100: "#cffafe",
                    200: "#a5f3fc",
                    300: "#67e8f9",
                    400: "#22d3ee",
                    500: "#06b6d4",
                    600: "#0891b2",
                    700: "#0e7490",
                    800: "#155e75",
                    900: "#164e63",
                },
            },
        },
    },
});

export default JoyTheme;
