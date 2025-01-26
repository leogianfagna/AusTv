import "bootstrap/dist/css/bootstrap.min.css";
import { news } from "./assets/data/news";
import NewsSection from "./components/NewsSection";
import "./App.css";


function App() {
  return (
    <>
      <NewsSection news={news}/>
    </>
  );
}

export default App;
