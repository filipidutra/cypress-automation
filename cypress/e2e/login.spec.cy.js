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
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get("button.oxd-button").click() 
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')  
    cy.get(selectorsList.secionTitleTopBar).contains('Dashboard')

    
  })

  it('login-fail', () => {
    cy.visit('opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admdain')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.logginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)


  })

})