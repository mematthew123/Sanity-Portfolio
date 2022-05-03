import {BrowserRouter as Router, Route, } from 'react-router-dom';
import About from "./components/About";
import Post from "./components/Post";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SinglePost from "./components/SinglePost";


function App() {

  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/post" component={Post} />
        <Route path="/projects" component={Projects} />
        <Route path="/post/:id" component={SinglePost} />

      </div>
    </Router>
  );
}

export default App;