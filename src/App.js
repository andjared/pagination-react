import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Pagination from "./components/Pagination";

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(null);
  const itemsPerPage = 8;

  const fetchData = useCallback(async () => {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks?page=2&limit=100`
    );
    const list = await response.json();
    let start = (currentPage - 1) * itemsPerPage;
    let end = currentPage * itemsPerPage;
    const filtered = list.data.filter(
      (item, index) => index >= start && index < end
    );

    setData(filtered);

    setPagesCount(Math.ceil(list.data.length / itemsPerPage));
  }, [currentPage]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App">
      <main>
        <h1>Art Institute Of Chicago</h1>
        <ul className="list">
          {data && data.map((item) => <Card item={item} key={item.id} />)}
        </ul>
        {pagesCount && (
          <Pagination
            pagesCount={pagesCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </main>
    </div>
  );
}

export default App;
