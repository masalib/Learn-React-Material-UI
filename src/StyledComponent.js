import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import "./styles.css";

export default function StyledComponent() {
  const html = `
  import React from 'react';
  import { styled } from '@material-ui/core/styles';
  import Button from '@material-ui/core/Button';
  
  const CustomButton = styled(Button)({
    backgroundColor: 'red'
  });
  
  const MaterialUIStyled = () => {
    return (
      <CustomButton>Test</CustomButton>
    );
  }
  
  export default MaterialUIStyled;
  `.replace(/ /g, "\u00a0");

  const CustomButton = styled(Button)({
    backgroundColor: "red"
  });

  return (
    <>
      <h2>Styled Component式</h2>
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

      <CustomButton>Test</CustomButton>

      <div className="backhome">
        <Link to="/">Homeにもどる</Link>
      </div>
    </>
  );
}
