import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { news } from "./assets/data/news";
import NewsSection from "./components/NewsSection";
import "./App.css";
import Calendar from "./components/Calendar";
import NavBar from "./components/NavBar";
import EnchantBuilder from "./pages/EnchantBuilder";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <NewsSection news={news} />
              <Calendar />
              <footer>
                <p className="text-center" style={{ margin: "3rem" }}>
                  Copyright © 2025 AusTv. Todos os direitos reservados.
                </p>
              </footer>
            </>
          }
        />
        <Route path="/buildar" element={<EnchantBuilder />} />
      </Routes>
    </Router>
  );
}

export default App;
