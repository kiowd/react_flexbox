import "./styles.css";
import Navbar from "./compons/Nav";
import About from "./compons/About";
import Header from "./compons/Header";
import Projects from "./compons/Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Header}/>
        <Route path='/about' component={About}/>
        <Route path='/projects' component={Projects}/>
      {/* <Header />
      <About />
      <Projects /> */}
      </Switch>
    </Router>
    </>
  );
}
