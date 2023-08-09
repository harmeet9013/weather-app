import styled from "@emotion/styled";
import { DarkMode, GitHub, LightMode } from "@mui/icons-material";
import {
    Box,
    Button,
    ButtonGroup,
    Card,
    IconButton,
    Typography,
    useColorScheme,
} from "@mui/joy";

export default function Header(props) {
    const { mode, setMode } = useColorScheme();

    const HeadingBar = styled(Card)(({ theme }) => ({
        width: "100%",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 0 20px 0",
        borderRadius: 0,
        transition: "all 0.2s ease",
        background: mode === "light" && theme.palette.primary[50],
    }));

    const HeaderTitle = styled(Box)(({ theme }) => ({
        background: `linear-gradient(-30deg, ${theme.palette.primary[500]} , ${theme.palette.primary[900]})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        letterSpacing: "5px",
        transition: "all 0.2s ease",
    }));

    return (
        <HeadingBar color="primary">
            <HeaderTitle component={Typography} level="h1">
                Weather-App
            </HeaderTitle>
            <ButtonGroup
                variant="soft"
                size="lg"
                sx={{
                    borderRadius: "15px",
                }}
            >
                <Button
                    startDecorator={<GitHub color="primary" />}
                    onClick={() => {
                        window.open(
                            "https://github.com/harmeet9013/weather-app",
                            "_blank"
                        );
                    }}
                >
                    Source Code
                </Button>
                <IconButton
                    onClick={() => {
                        setMode(mode === "dark" ? "light" : "dark");
                    }}
                >
                    {mode === "dark" ? (
                        <DarkMode color="primary" />
                    ) : (
                        <LightMode color="primary" />
                    )}
                </IconButton>
            </ButtonGroup>
        </HeadingBar>
    );
}
