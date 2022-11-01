import Header from "./components/Header";
import style from "./styling/style.css";
import Links from "./components/Links";
import data from "./data";
import ShareIcon from "./components/ShareIcon";
import Social from "./components/Social";
import MenuIcon from "./components/MenuIcon";
import { createMedia } from "@artsy/fresnel";
import Footer from "./components/Footer";

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

function App() {
  return (
    <div className="App" style={style}>
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
      <Social />
      <Footer />
    </div>
  );
}

export default App;
