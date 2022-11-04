import zurilogo from "../../images/zurilogo.svg";
import ingressive from "../../images/ingressive.svg";

function Footer() {
  return (
    <div className="footer">
      <img className="zurilogo" src={zurilogo} alt="" />
      <p>HNG Internship 9 Frontend Task</p>
      <img className="ingressive" src={ingressive} alt="" />
    </div>
  );
}

export default Footer;
