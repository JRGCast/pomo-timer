import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/pomo-timer' component={ LandingPage } />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;