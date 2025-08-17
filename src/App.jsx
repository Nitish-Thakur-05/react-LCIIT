import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState({
    advanceReparing: false,
    fresherReparing: false,
    biosEditing: false,
    onlineBiosEditing: false,
    onlineChipLevelReparing: false,
  });
  const [showLinks, setShowLinks] = useState(false);

  return (
    <main onClick={() => {
      if(showLinks === true) {
        setShowLinks(false)
      }
    }}>
      <Header showLinks={showLinks} setShowLinks={setShowLinks} />
      <Outlet context={{ isModalOpen, setIsModalOpen }} />
      <Footer isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </main>
  );
};

export default App;
