import "./App.scss";
import Header from "./components/Header";
import NavbarMobile from "./components/NavbarMobile";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
function App() {
  return (
    <div className="App">
      <Navbar />
      <NavbarMobile />
      <Header />
      <main>
        <About />
        <Services />
      </main>
    </div>
  );
}

export default App;
