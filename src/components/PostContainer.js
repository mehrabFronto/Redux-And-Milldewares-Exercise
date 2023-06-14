import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostRequest } from "../redux/post/postActions";

const PostContainer = () => {
   const [postId, setPostId] = useState("");
   const { loading, post, error } = useSelector((state) => state.post);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchPostRequest(postId));
   }, [postId]);

   const renderPost = () => {
      if (!postId) return <p>enter an id</p>;

      if (loading) return <p>loading...</p>;

      if (error) return <p>{error}</p>;

      if (post) return <p>post title : {post.title}</p>;

      return <p>fetching data failed</p>;
   };

   return (
      <div>
         <h2>posts container</h2>
         <label>post id : </label>
         <input
            type="text"
            value={postId}
            onChange={(e) => setPostId(e.target.value)}
         />
         {renderPost()}
      </div>
   );
};

export default PostContainer;
