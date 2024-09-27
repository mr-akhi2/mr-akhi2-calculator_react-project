import "./container.css";
import { React, useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";

let Container = () => {
  let [calval, setcalval] = useState("");

  const onclicked = (btn) => {
    if (btn === "AC") {
      setcalval("");
    } else if (btn === "DEL") {
      const de = calval.slice(0, calval.length - 1);
      setcalval(de);
    } else if (btn === "=") {
      const result = eval(calval);
      setcalval(result);
    } else {
      const NewDisplay = calval + btn;
      setcalval(NewDisplay);
    }
  };
  return (
    <div className="Cont">
      <h1 id="heading"> Calculator</h1>
      {/* calval value is passing into the display */}
      <Display displayvalue={calval}></Display>
      <Buttons onclicked={onclicked}></Buttons>
    </div>
  );
};
export default Container;
