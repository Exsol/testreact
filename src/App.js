import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import Mybutton from "./components/UI/button/Mybutton";
import Myinput from "./components/UI/input/Myinput";
import './styles/App.css'
function App() {
 const [posts, setPosts] = useState( [

  {id:1,title:"title",body:'Description'},
  {id:2,title:"title",body:'Description 2'},
  {id:3,title:"title",body:'Description 3'},
  {id:4,title:"title",body:'Description 3'},
 ])

 const [title, setTitle] = useState("");


const addNewPost = (e) =>{
  e.preventDefault();
  console.log(title)
}

  return (
    <div className="App">
      <form>

        <Myinput 
        value={title}
        onChange={e=>setTitle(e.target.value)}
        type="text"
        placeholder="Название поста"
        />

        <Myinput type="text" placeholder="Описание поста"/>

        <Mybutton onClick={addNewPost}  >Добавить пост</Mybutton>
      </form>
        <PostList posts={posts} title="Список постов 1" />
  
    </div>
  );
}

export default App;
