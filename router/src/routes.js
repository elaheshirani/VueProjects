import User from './components/User/User';
import Home from './components/Home';

export const routes = [
    { path : '/', component : Home},
    { path : '/user/:id', component : User},
];