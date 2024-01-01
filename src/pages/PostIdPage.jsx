import {useParams} from "react-router-dom";

const PostIdPage = () => {
  const params = useParams();
  console.log(params);
  return (
    <h1>Вы открыли страницу поста c id {params.id}</h1>
  )
}

export default PostIdPage;