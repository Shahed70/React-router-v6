import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import About from './About.jsx';
import Me from './Me.jsx';
import Test from './Test.jsx';
import Posts from './Posts.jsx';
import SinglePost from './SinglePost.jsx';
function Home() {
  return <div>Home</div>;
}

function FullWidthLayout() {
  return (
    <div>
      <header></header>
      <main></main>
      <footer></footer>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> |{' '}
          <Link to="/about/me">About Me </Link> |{' '}
          <Link to="/about/me/test">Test </Link> |{' '}
          <Link to="/posts">Posts </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="me" element={<Me />}>
              <Route path="test" element={<Test />} />
            </Route>
          </Route>
          <Route path="/posts" element={<Posts />} />
          <Route path="posts/:id" element={<SinglePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
