class AuthenticationService{

    registerSuccessfulLogin(username, password) {
        console.log("registerSuccessfulLogin");
        sessionStorage.setItem("authenticatedUser", username)
    }
    
    logout(){
        sessionStorage.removeItem("authenticatedUser")
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem("authenticatedUser")
        if(user === null){
            return false;
        }else{
            return true;
        }
    }

    getLoggedInUserName(){
        let user = sessionStorage.getItem("authenticatedUser")
        if(user === null){
            return "";
        }else{
            return user;
        }
    }   

}

export default new AuthenticationService();