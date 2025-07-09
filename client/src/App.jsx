import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/books")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <h1>Books</h1>
      {data.map((item) => (
        <p>
          {item.id} : {item.name}
          <button
            onClick={() => {
              fetch(`http://127.0.0.1:3000/books/${item.id}`, {
                method: "DELETE",
              });
            }}
          >
            ลบ
          </button>
        </p>
      ))}
    </div>
  );
}
export default App;
