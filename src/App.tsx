import * as React from "react";
import { hot } from "react-hot-loader/root";

interface Props {
  name: string;
}

const App: React.FC = () => {
  return (
    <>
      <h1>Hello Electron</h1>
    </>
  );
};

export default hot(App);
