import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <h2>
        <Link to="/StyleBase">基本的な使い方</Link>
      </h2>
      <h2>
        <Link to="/HooksStyle">hooks式</Link>
        <Link to="/HooksStyle">makeStylesで指定する方式</Link>
      </h2>
      <h2>
        <Link to="/StyledComponent">Styled Component式</Link>
      </h2>
      <h2>
        <Link to="/ThemeProviderSample">Googleみたいなログイン画面</Link>
      </h2>
      <h2>
        <Link to="/MaterialUiLogin">マテリアルデザインのログイン画面</Link>
      </h2>
    </div>
  );
}
