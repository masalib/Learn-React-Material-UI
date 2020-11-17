import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./styles.css";

export default function StyleBase() {
  const html = `
  import React from 'react';
  import Button from '@material-ui/core/Button';
  
  const App = () => {
    return (
      <Button variant="contained" color="primary">
        Test
      </Button>
    );
  }
  
  export default App;`.replace(/ /g, "\u00a0");
  return (
    <>
      <h2>基本的な使い方</h2>
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

      <Button className="mb5" variant="contained" color="primary">
        primary
      </Button>

      <div className="backhome">
        <Link to="/">Homeにもどる</Link>
      </div>
    </>
  );
}
