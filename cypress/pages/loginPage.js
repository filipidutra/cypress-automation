class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            logginButton: "button.oxd-button",
            wrongCredentialAlert: '.oxd-alert-content',
        }

        return selectors

    }

    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithUser(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().logginButton).click()


    }
    

}

export default LoginPage