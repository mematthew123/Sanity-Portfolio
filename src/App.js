import { BrowserRouter, Route } from "react-router-dom"
import React from "react"
import Home from "./components/Home"
import About from "./components/About"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
import Post from "./components/Post"
import SinglePost from "./components/SinglePost"

function App() {  

  return (


    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/navBar" component={NavBar} />
      <Route path="/projects" component={Projects} />
      <Route path="/post/:slug" component={Post} />
      <Route path="/singlepost" component={SinglePost} />

    </BrowserRouter>
  );
}


export default App
