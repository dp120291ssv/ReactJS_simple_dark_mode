import React, {useCallback, useState} from "react";
import {ThemeProvider} from "styled-components";
import lightTheme from "../themes/light";
import darkTheme from "../themes/dark";
import Container from "./Container";
import Card from "./Card";
import Button from "./Button";

const App = () => {
    const stored = localStorage.getItem("isDarkMode");
    const [isDarkMode, setIsDarkMode] = useState(stored === "true");

    const handleSwitchTheme = useCallback(() => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem("isDarkMode", !isDarkMode);
    }, [isDarkMode])

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <Container>
                <Card>
                    Dark Mode is Disabled
                    <Button
                        onClick={handleSwitchTheme}
                    >Toggle Dark Mode</Button>
                </Card>
            </Container>
        </ThemeProvider>
    );
};

export default App;