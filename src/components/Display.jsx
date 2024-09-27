import "./Display.css";
let Display = ({ displayvalue }) => {
  return (
    <div id="box">
      <input type="text" id="input" value={displayvalue} />
    </div>
  );
};
export default Display;
