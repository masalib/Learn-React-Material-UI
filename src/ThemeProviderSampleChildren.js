import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./styles.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      color: "#388e3c",
      backgroundColor: "#81c784"
    },
    title: {
      flexGrow: 1,
      textAlign: "center"
    }
  })
);

export default function ThemeProviderSampleChildren() {
  const classes = useStyles();
  return (
    <>
      <Button color="inherit">Login</Button>
      Test
    </>
  );
}
