import React from "react";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { createMuiTheme } from "@material-ui/core/styles";
import { teal } from "@material-ui/core/colors";
import { ThemeProvider } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      color: "#388e3c",
      backgroundColor: "#81c784"
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      textAlign: "center"
    }
  })
);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[500]
    },
    secondary: {
      main: "#00bcd4"
    }
  }
});

export default function ThemeProviderSample() {
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
      </ThemeProvider>
      <div className="backhome">
        <Link to="/">Homeにもどる</Link>
      </div>
    </>
  );
}
