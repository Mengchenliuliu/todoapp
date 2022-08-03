import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService.jsx';


class LoginComponent extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            username : "Mengchen",
            password : "",
            hasLoginFailed: false,
            showSuccessMessage: false           
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    loginClicked(){
        if(this.state.username === "Mengchen" && this.state.password === "wei"){
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.navigate("/welcome/Mengchen")
            // this.setState({hasLoginFailed : false })
            // this.setState({showSuccessMessage: true})
        }else{
            this.setState({hasLoginFailed:true})
            this.setState({showSuccessMessage:false})
        }
    }


    render(){
        return <div>
            <h1>Login</h1>
            <div className = "container">
                {/* <ShowInvalid hasLoginFailed = {this.state.hasLoginFailed}/> 
                <ShowSuccessful showSuccessMessage = {this.state.showSuccessMessage}/> */}
                {this.state.hasLoginFailed && <div className = "alert alert-warning">Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Successfully</div>}
                User Name:<input type = "text" name = "username" value = {this.state.username} onChange = {this.handleChange}/>
                Password:<input type = "password" name = "password" value = {this.state.password} onChange = {this.handleChange}/>
                <button className = "btn" onClick={this.loginClicked}>Login</button>
            </div>
        </div>
    }
}

export default LoginComponent;