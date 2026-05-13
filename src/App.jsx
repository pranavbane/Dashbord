import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MonthlyBulletin from "./components/MonthlyBulletin";
import MediaPresence from "./components/MediaPresence";
import KnowledgeCentre from "./components/KnowledgeCentre";
import SelfHelpGuide from "./components/SelfHelpGuide";
import KnowledgeLibrary from "./components/KnowledgeLibrary";
import SalesTool from "./components/SalesTool";
import MarketingBlog from "./components/MarketingBlog";
import PartnerServices from "./components/PartnerServices";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

const Home = () => (
  <>
    <div data-testid="home-page">
      <Header />
      {/* <FloatingActions /> */}
      <MonthlyBulletin />
      <MediaPresence />
      <KnowledgeCentre />
      <SelfHelpGuide />
      <KnowledgeLibrary />
      <SalesTool />
      <MarketingBlog />
      <PartnerServices />
      {/* <Footer /> */}
    </div>
  </>
);

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;