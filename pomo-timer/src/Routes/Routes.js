import { Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
const Routes = () => {
  return (
    <Switch>
      <Route exact path='/pomo-timer' component={ LandingPage } />
    </Switch>
  );
};

export default Routes;