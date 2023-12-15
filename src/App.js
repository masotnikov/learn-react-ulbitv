import {useState} from "react";

function App() {
  const [likes, setLikes] = useState(0)
  return (
    <>
      <h1>{likes}</h1>
      <button onClick={() => setLikes(likes + 1)}>+</button>
      <button onClick={() => setLikes(likes - 1)}>-</button>
    </>
  );
}

export default App;
