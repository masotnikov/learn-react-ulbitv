import './styles/App.css'
import PostItem from "./components/PostItem";
import {useState} from "react";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'}
  ]);

  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Список постов</h1>
      {posts.map(item => (
        <PostItem key={item.id} post={item}/>
      ))}
    </div>
  );
}

export default App;
