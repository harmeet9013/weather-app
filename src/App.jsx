import { CssBaseline, CssVarsProvider, GlobalStyles } from "@mui/joy";
import JoyTheme from "./components/shared/JoyTheme";
import Header from "./components/shared/Header";
import WeatherInfo from "./components/WeatherInfo";
import Footer from "./components/Footer";

export default function App() {
    return (
        <CssVarsProvider defaultMode="system" theme={JoyTheme}>
            <CssBaseline />
            <GlobalStyles
                styles={{
                    body: {
                        transition: "all 0.2s ease",
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                    },
                }}
            />
            <Header />
            <WeatherInfo />
            <Footer />
        </CssVarsProvider>
    );
}
