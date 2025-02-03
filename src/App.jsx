import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { news } from "./assets/data/news";
import NewsSection from "./components/NewsSection";
import "./App.css";
import Calendar from "./components/Calendar";

function App() {
  return (
    <>
      <div className="container">
        <Calendar />
      </div>
      <NewsSection news={news} />
    </>
  );
}

export default App;
