class LoginPage{

    orangeHRMLogo(){

        return 'img[alt="company-branding"]'
    }

    usernameInput(){

        return 'input[placeholder="Username"]'
    }

    passwordInput(){

        return 'input[placeholder="Password"]'
    }

    loginBtn(){

        return 'button[type="submit"]'
    }

    errormessage(){

        return 'Invalid credentials'
    }

    
}

const login = new LoginPage()

export default login