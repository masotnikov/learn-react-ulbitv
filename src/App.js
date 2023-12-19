import './styles/App.css'
import {useMemo, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'}
  ]);
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = useMemo(() => {
    console.log('ОТРАБОТАЛА ФУНКЦИЯ СОРТЕД ПОСТС');
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [posts, selectedSort]);

  const sortedAndSearched = useMemo(() => {
    return sortedPosts.filter(post => post.title.includes(searchQuery))
  }, [searchQuery, sortedPosts])


  //создание поста
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
//удаление поста
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  //сортировка поста
  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>

        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder='Поиск...'
        />

        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
          ]}
        />
      </div>
      {posts.length !== 0
        ?
        <PostList remove={removePost} posts={sortedAndSearched} title={'Список постов 1'}/>
        :
        <h1 style={{textAlign: "center"}}>Посты не найдены</h1>
      }
    </div>
  );
}

export default App;
