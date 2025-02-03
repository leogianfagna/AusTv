import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { news } from "./assets/data/news";
import NewsSection from "./components/NewsSection";
import "./App.css";
import Calendar from "./components/Calendar";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <NewsSection news={news} />
      <Calendar />
    </>
  );
}

export default App;
