import {BrowserRouter as Router, Route, } from 'react-router-dom';
import About from "./components/About";
import Post from "./components/Post";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import SinglePost from "./components/SinglePost";
import Merch from "./components/Merch";
import Footer from './components/Footer';


function App() {

  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/post" component={Post} />
        <Route path="/project" component={Project} />
        <Route path="/post/:slug" component={SinglePost} />
        <Route path="/merch" component={Merch} />
        {/* <Footer/> */}

      </div>
    </Router>
  );
}

export default App;