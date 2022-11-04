import shareBtn from "../../images/share.svg";
import sharepress from "../../images/sharepress.svg";

function ShareIcon() {
  let swapped = false;
  function swap() {
    swapped = !swapped;
    if (swapped === false) {
      document.getElementById("showshared").style.display = "block";
      document.getElementById("hideshared").style.display = "none";
    } else {
      document.getElementById("showshared").style.display = "none";
      document.getElementById("hideshared").style.display = "block";
    }
  }
  return (
    <div className="share">
      <img onClick={swap} id="showshared" src={shareBtn} alt="" />
      <img
        onClick={swap}
        id="hideshared"
        src={sharepress}
        alt=""
        style={{ display: "none" }}
      />
    </div>
  );
}

export default ShareIcon;
