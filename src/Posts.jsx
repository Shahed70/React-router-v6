import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Posts() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPost(...posts, json.slice(0, 20)));
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {posts?.map((post) => {
        return (
          <div key={post.id}>
            <Link className="text-xl" to={`./${post.id}`}>
              {post.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
