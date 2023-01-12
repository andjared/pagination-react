import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks?page=2&limit=100`
    );
    const data = await response.json();
    setData(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <main>
        <h1>Art Institute Of Chicago</h1>
        <div className="container">
          {data && data.map((item) => <Card item={item} key={item.id} />)}
        </div>
      </main>
    </div>
  );
}

export default App;
