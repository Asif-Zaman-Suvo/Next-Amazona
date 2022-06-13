import React, { useEffect, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  ThemeProvider,
  Link,
  CssBaseline,
  Switch,
} from "@material-ui/core";
import Head from "next/head";
import useStyles from "../../utils/styles.js";
import NextLink from "next/link";
import { createTheme } from "@material-ui/core/styles";
import { Store } from "../../utils/Store.js";
import Cookies from "js-cookie";

export default function Layout({ title, description, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1 rem 0 ",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem  0",
      },
      body1: {
        fontWeight: "normal",
      },
    },
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#208080",
      },
    },
  });
  const classes = useStyles();
  useEffect(() => {
    const initialDarkMode = Cookies.get("darkMode");
    dispatch({
      type: initialDarkMode !== "ON" ? "DARK_MODE_OFF" : "DARK_MODE_ON",
    });
  }, []);
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode;
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
  };
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next Amazona` : "Next Amazona"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar className={classes.navbar} position="static">
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>Tech Bomb</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved . Next Amazona</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
