import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState();

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((res) => setArticles(res));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hooray Articles</h2>
        <h3>Hooray HMR</h3>






        {articles && (
          <ul>
            {articles.map((article) => (
              <li>{article.title}</li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
}

export default App;
