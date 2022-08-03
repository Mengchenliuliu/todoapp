import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import withNavigation from './WithNavigation.jsx';
import withParams from './WithParams.jsx';
import LoginComponent from './LoginComponent.jsx';
import LogoutComponent from './LogoutComponent.jsx';
import ListTodosComponent from './ListTodosComponent.jsx'
import TodoComponent from './TodoComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import AuthenticateRoute from "./AuthenticatedRoute.jsx";
import WelcomeComponent from './WelcomeComponent.jsx';
import ErrorComponent from './ErrorComponent.jsx';


class TodoApp extends Component{
    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);               
        const ListTodosComponentWithNavigation = withNavigation(ListTodosComponent);
        const TodoComponentWithParamsAndNavigation = withParams(withNavigation(TodoComponent));

 
        return (
            <div className = "TodoApp">
            <Router>
                    <HeaderComponentWithNavigation/>
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path = "/login" element = {<LoginComponentWithNavigation/>}/>
                        <Route path = "/welcome/:name" element = {<AuthenticateRoute><WelcomeComponentWithParams/></AuthenticateRoute>}/> 
                        <Route path="/todos/:id" element = {<AuthenticateRoute><TodoComponentWithParamsAndNavigation/></AuthenticateRoute>}/> 
                        <Route path="/todos" element = {<AuthenticateRoute><ListTodosComponentWithNavigation/></AuthenticateRoute>}/> 
                        <Route path = "/logout" element = {<AuthenticateRoute><LogoutComponent/></AuthenticateRoute>}/>
                        <Route path = "*" element = {<ErrorComponent/>}/>
                    </Routes>
                    <FooterComponent/>
                </Router>
                
            </div>
        )
    }
}


export default TodoApp;