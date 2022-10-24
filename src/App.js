import Header from "./components/Header";
import style from "./styling/style.css";
import Links from "./components/Links";
import data from "./data";

const links = data.map((link) => {
  return <Links key={link.url} link={link} />;
});

function App() {
  return (
    <div className="App" style={style}>
      <Header />
      {links}
    </div>
  );
}

export default App;
