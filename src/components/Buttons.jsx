import "./Buttons.css";
let Buttons = ({ onclicked }) => {
  let btn = [
    "AC",
    "DEL",
    "/",
    "*",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "%",
    "0",
    "=",
  ];
  return (
    <div id="btn">
      <div id="btns">
        {btn.map((buttonName) => (
          <button onClick={() => onclicked(buttonName)}>{buttonName}</button>
        ))}
      </div>
    </div>
  );
};
export default Buttons;
