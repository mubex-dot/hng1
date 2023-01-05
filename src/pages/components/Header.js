import profilepic from "../../images/profilepic.svg";

function Header() {
  return (
    <header>
      <img src={profilepic} alt="" id="profile__img" />
      <h2 id="twitter">Mubarak</h2>
    </header>
  );
}

export default Header;
