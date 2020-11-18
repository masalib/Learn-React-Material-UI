import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";

export default function HooksStyle() {
  const html = `
  import React from 'react';
  import { makeStyles } from '@material-ui/core/styles';
  import Button from '@material-ui/core/Button';
  　
  const useStyles = makeStyles({
    button: {
      backgroundColor: 'green'
    }
  });
  　
  const MaterialUIHooks = () => {
    const classes = useStyles();
    return (
      <Button variant="contained" className={classes.button}>
        Test
      </Button>
    );
  }
  `.replace(/ /g, "\u00a0");

  const useStyles = makeStyles({
    button: {
      backgroundColor: "green"
    }
  });
  const classes = useStyles();

  return (
    <>
      <h2>makeStylesで指定する方式</h2>
      <h3>Source</h3>

      <div className="border">
        {
          //改行コードで分割し、ループ表示
          html.split("\n").map((str) => {
            return <p>{str}</p>;
          })
        }
      </div>
      <h3>結果</h3>

      <Button variant="contained" className={classes.button}>
        Test
      </Button>

      <div className="backhome">
        <Link to="/">Homeにもどる</Link>
      </div>
    </>
  );
}
