import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Blog from './component/Blog/Blog';
import Services from './component/Services/Services';
import About from './component/About/About';
import NotFound from './component/NotFound/NotFound';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/blog">
            <Blog></Blog>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/About">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
