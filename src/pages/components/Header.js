import profilepic from "../../images/profilepic.svg";
import profilechoose from "../../images/profilechoose.svg";
import { createMedia } from "@artsy/fresnel";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    sm: 0,
    md: 520,
    lg: 1024,
    xl: 1192,
  },
});

function Header() {
  let swapped = false;
  function swap() {
    swapped = !swapped;
    if (swapped === false) {
      document.getElementById("profile__img").style.display = "block";
      document.getElementById("hide").style.display = "none";
      document.getElementById("profile__imgsm").style.display = "block";
      document.getElementById("change").style.display = "none";
    } else {
      document.getElementById("profile__img").style.display = "none";
      document.getElementById("hide").style.display = "block";
      document.getElementById("profile__imgsm").style.display = "none";
      document.getElementById("change").style.display = "block";
    }
  }
  return (
    <header>
      <MediaContextProvider>
        <Media at="sm">
          <img src={profilepic} alt="" id="profile__imgsm" />
          <img
            src={profilechoose}
            onClick={swap}
            alt=""
            id="change"
            style={{ display: "none" }}
          />
        </Media>
      </MediaContextProvider>
      <MediaContextProvider>
        <Media greaterThanOrEqual="md">
          <img src={profilepic} onClick={swap} alt="" id="profile__img" />
          <img
            src={profilechoose}
            onClick={swap}
            alt=""
            id="hide"
            style={{ display: "none" }}
          />
        </Media>
      </MediaContextProvider>
      <h2 id="twitter">m_u_b_e_x_</h2>
      <h2 id="slack" style={{ display: "none" }}>
        Mubarak Ibrahim
      </h2>
    </header>
  );
}

export default Header;
