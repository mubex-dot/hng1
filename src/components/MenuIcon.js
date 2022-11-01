import menu from "../images/menu.svg";
import menupressed from "../images/menu-pressed.svg";

function MenuIcon() {
  let swapped = false;
  function swap() {
    swapped = !swapped;
    if (swapped === false) {
      document.getElementById("show").style.display = "block";
      document.getElementById("hide").style.display = "none";
    } else {
      document.getElementById("show").style.display = "none";
      document.getElementById("hide").style.display = "block";
    }
  }
  return (
    <div className="menu">
      <img onClick={swap} id="show" src={menu} alt="" />
      <img
        onClick={swap}
        id="hide"
        src={menupressed}
        alt=""
        style={{ display: "none" }}
      />
    </div>
  );
}

export default MenuIcon;
