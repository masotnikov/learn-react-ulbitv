import PostItem from "./PostItem";


const PostList = ({posts, title, remove}) => {
  if (!posts.length) {
    return (
      <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
    )
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      {posts.map((item, index) => (
        <PostItem remove={remove} number={index + 1} key={index + Date.now()} post={item}/>
      ))}
    </div>
  )
}

export default PostList;