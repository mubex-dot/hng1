import slack from "../../images/slack.svg";
import github from "../../images/github.svg";

function Social() {
  return (
    <div className="social">
      <img className="slackimg" src={slack} alt="" />
      <img className="githubimg" src={github} alt="" />
    </div>
  );
}

export default Social;
