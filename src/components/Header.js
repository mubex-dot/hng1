import profilepic from "../images/profilepic.svg";
import shareBtn from "../images/share.svg";

function Header() {
  return (
    <header>
      <img className="share" src={shareBtn} alt="" />
      <img src={profilepic} alt="" id="profile__img" />
      <h2 id="twitter">m_u_b_e_x_</h2>
      <h2 id="slack" style={{ display: "none" }}>
        mubee2004
      </h2>
    </header>
  );
}

export default Header;
