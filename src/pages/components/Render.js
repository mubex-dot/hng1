import Header from "./Header";
import style from "../../styling/style.css";
import Links from "./Links";
import data from "../../data";
import ShareIcon from "./ShareIcon";
import Social from "./Social";
import MenuIcon from "./MenuIcon";
import { createMedia } from "@artsy/fresnel";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    sm: 0,
    md: 520,
    lg: 1024,
    xl: 1192,
  },
});

const links = data.map((link) => {
  return <Links key={link.id} link={link} />;
});

function Render() {
  return (
    <div className="Render" style={style}>
      <MediaContextProvider>
        <Media at="sm">
          <MenuIcon />
        </Media>
        <Media greaterThanOrEqual="md">
          <ShareIcon />
        </Media>
      </MediaContextProvider>
      <Header />
      {links}
      <main>
        <Link to="/contact">Contact Me</Link>
      </main>
      <Social />
      <Footer />
    </div>
  );
}

export default Render;
