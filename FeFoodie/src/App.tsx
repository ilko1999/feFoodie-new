import HomeScreen from './screens/HomeScreen';

import { Router, Route, Outlet, ReactLocation } from '@tanstack/react-location';
import Login from './authentication/Login';
import Register from './authentication/Register';

const routes: Route[] = [
  {
    path: '/',
    element: <HomeScreen />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
];

const location = new ReactLocation();

function App() {
  return (
    <Router routes={routes} location={location}>
      <Outlet />
    </Router>
  );
}

export default App;
