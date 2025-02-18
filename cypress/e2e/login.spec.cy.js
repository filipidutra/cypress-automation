import userData from '../fixtures/userdata.json'

describe('template spec', () => {
  
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    logginButton: "button.oxd-button",
    secionTitleTopBar: ".oxd-text--h6",
    wrongCredentialAlert: '.oxd-alert-content'

  }

  

  it('pass', () => {
    cy.visit('opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get("button.oxd-button").click() 
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')  
    cy.get(selectorsList.secionTitleTopBar).contains('Dashboard')

    
  })

  it('login-fail', () => {
    cy.visit('opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.logginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)


  })

})