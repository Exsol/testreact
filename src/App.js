import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import postForm from "./components/PostForm";
import Mybutton from "./components/UI/button/Mybutton";
import Myinput from "./components/UI/input/Myinput";
import './styles/App.css'
import PostForm from "./components/PostForm";
function App() {
    const [posts, setPosts] = useState( [
        {id:1,title:"title",body:'Description'},
        {id:2,title:"title",body:'Description 2'},
        {id:3,title:"title",body:'Description 3'},
        {id:4,title:"title",body:'Description 3'},
    ])
    const [post, setPost] = useState({title:'',body:''});


const removePost = (post) =>{
    setPosts(posts.filter(p=> p.id !== post.id))
}


const createPost = (newPost) => {
        setPosts([...posts, newPost])
}




  return (
    <div className="App">
        <PostForm create={createPost}/>
        {posts.length !== 0
            ? <PostList remove={removePost} posts={posts} title="Список постов 1"/>
            : <h1 style={{textAlign:'center'}}>Посты не найдены</h1>
        }
  
    </div>
  );
}

export default App;
