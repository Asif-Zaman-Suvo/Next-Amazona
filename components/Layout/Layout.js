import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
} from "@material-ui/core";
import Head from "next/head";
import React from "react";
import useStyles from "../../utils/styles.js";
import NextLink from "next/link";

export default function Layout({ title , children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title? `${title} - Next Amazona` : 'Next Amazona'}</title>
      </Head>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>amazona</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
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
    </div>
  );
}
