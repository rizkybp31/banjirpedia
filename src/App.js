import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Main from './components/Section/Main';
import Lapor from './components/Lapor/Lapor';
import Navbar from './components/Navbar/Navbar';
import Logo from './components/Section/Logo';
import Footer from './components/Section/Footer';
import Blog from './components/Section/Blog';
import About from './components/Section/About';
import Banjir from './components/Section/Banjir';
import Emergency from './components/Section/Emergency';
import BlogDetail from './components/Section/BlogDetail';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/">
              <Main />
          </Route>
          <Route path="/lapor">
            <Lapor />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/blog_detail/:id">
            <BlogDetail />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/banjir">
            <Banjir />
          </Route>
          <Route path="/call">
            <Emergency />
          </Route>
        </Switch>
        <Logo />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
