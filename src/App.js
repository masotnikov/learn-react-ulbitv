import {useState} from "react";

function App() {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState('ТЕКСТ в ИНПУТЕ');

  return (
    <>
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={() => setLikes(likes + 1)}>+</button>
      <button onClick={() => setLikes(likes - 1)}>-</button>
    </>
  );
}

export default App;
