import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState();

  useEffect(() => {
    fetch("/articles")
      .then((res) => res.json())
      .then((res) => setArticles(res));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h2>Hooray Articles</h2>
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
