import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostsId, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  })

  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data);
  })


  useEffect(() => {
    fetchPostsId(params.id);
    fetchComments(params.id);
  }, []);
  return (
    <>
      <h1>Вы открыли страницу поста c id {params.id}</h1>
      {isLoading
        ? <Loader/>
        : <div>{post.id}. {post.title}</div>
      }
      <h1>Комментарии</h1>
      {isComLoading
        ? <Loader/>
        : <div>
          {comments.map(({email, body, id}) =>
            <div key={id} style={{marginTop: 15}}>
              <h5>{email}</h5>
              <div>{body}</div>
            </div>
          )}
        </div>
      }
    </>
  )
}

export default PostIdPage;