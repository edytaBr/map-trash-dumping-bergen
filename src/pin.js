import * as React from "react";
import bumper from "./trash.png";

export default class Pin extends React.Component {
  render() {
    return <img src={bumper} width={30} height={30} />;
  }
}
