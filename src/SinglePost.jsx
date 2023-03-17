import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, []);
  return (
    <div>
      <h1>Single post</h1>
      {post ? (
        <div>
          <h1 className="text-2xl mb-5"> {post.title}</h1> <p>{post.body}</p>{' '}
        </div>
      ) : (
        <h1 className="text-2xl"> Loading..... </h1>
      )}
    </div>
  );
}

export default SinglePost;
