import MainPage from '../src/pages/MainPage';
import ProjectsPage from '../src/pages/projects';
import Sobre from '../src/pages/sobre';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MainPage }/>
          <Route path="/projects" component={ ProjectsPage }/>
          <Route path="/about" component={ Sobre }/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
