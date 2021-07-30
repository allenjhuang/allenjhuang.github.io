import 'bulma/css/bulma.min.css';
import '@fontsource/lato/400.css';
import '@fontsource/raleway/400.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Home from '../pages/Home/Home';
import Resume from '../pages/Resume/Resume';
import Projects from '../pages/Projects/Projects';
import NotFound from '../pages/NotFound/NotFound';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
