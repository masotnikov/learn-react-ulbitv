import PostItem from "./PostItem";


const PostList = ({posts , title}) => {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      {posts.map(item => (
        <PostItem key={item.id} post={item}/>
      ))}
    </div>
  )
}

export default PostList;