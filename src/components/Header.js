import profilepic from "../images/profilepic.svg";

function Header() {
  return (
    <header>
      <img src={profilepic} alt="" id="profile__img" />
      <h2 id="twitter">m_u_b_e_x_</h2>
      <h2 id="slack" style={{ display: "none" }}>
        Mubarak Ibrahim
      </h2>
    </header>
  );
}

export default Header;
