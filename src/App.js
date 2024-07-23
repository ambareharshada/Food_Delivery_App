// import logo from './logo.svg';
import "./App.css";
import HeaderSection from "./components/HeaderSection";
import MainSection from "./components/MainSection";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import ContactUs from "./components/ContactUs";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <HeaderSection />  */}
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="Menu" element={<Menu />} />
        <Route path="ContactUs" element={<ContactUs />} />
        {/* <Route path="HeaderSection" element={<HeaderSection />} /> */}
      </Routes>
    </div>
  );
}

export default App;
