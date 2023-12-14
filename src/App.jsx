import { useState } from "react";
import { puppyList } from "./data";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);
  const [featuredPupId, setFeaturedPupId] = useState(null);

  const featuredPuppy = puppyList.find((puppy) => puppy.id === featuredPupId);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="puppy-list">
        {puppyList.map((puppy) => (
          <p key={puppy.id} onClick={() => setFeaturedPupId(puppy.id)}>
            {puppy.name}
          </p>
        ))}
      </div>
      {featuredPupId && featuredPuppy && (
        <div className="featured-puppy">
          <h2>{featuredPuppy.name}</h2>
          <p>Age: {featuredPuppy.age}</p>
          <p>Email: {featuredPuppy.email}</p>
          <ul>
            {featuredPuppy.tricks.map((trick) => (
              <li key={trick.id}>{trick.title}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default App;
