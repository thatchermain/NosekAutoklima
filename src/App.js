import "./App.scss";
import Header from "./components/Header";
import NavbarMobile from "./components/NavbarMobile";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <NavbarMobile />
      <Header />
    </div>
  );
}

export default App;
