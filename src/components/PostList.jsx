import PostItem from "./PostItem";


const PostList = ({posts , title, remove}) => {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      {posts.map((item, index) => (
        <PostItem remove={remove} number={index + 1} key={item.id} post={item}/>
      ))}
    </div>
  )
}

export default PostList;