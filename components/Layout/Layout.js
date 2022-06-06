import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import Head from "next/head";
import React from "react";
import useStyles from "../../utils/styles.js";

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <Typography>amazona</Typography>
        </Toolbar>
      </AppBar>

      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved . Next Amazona</Typography>
      </footer>
    </div>
  );
}
