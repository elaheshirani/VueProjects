import User from './components/User/User';
import UserStart from './components/User/UserStart';
import UserEdit from './components/User/UserEdit';
import UserDetails from './components/User/UserDetails';
import Home from './components/Home';


export const routes = [
    { path : '/', component : Home, name: 'home'},
    { path : '/user', component : User, children : [
            {path : '', component : UserStart },
            {path : ':id', component : UserDetails},
            {path : ':id/edit', component : UserEdit, name: 'userEdit'}
        ]},
];