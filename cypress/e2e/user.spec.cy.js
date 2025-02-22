import userData from '../fixtures/userdata.json'

describe('template spec', () => {
  
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    logginButton: "button.oxd-button",
    secionTitleTopBar: ".oxd-text--h6",
    wrongCredentialAlert: '.oxd-alert-content',
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    EmployerFirtName: "[name='firstName']",
    EmployerMiddleName: "[name='middleName']",
    EmployerLastName: "[name='lastName']",
    noClassField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']"
    

  }


  it.only('user-info', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get("button.oxd-button").click() 
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')  
    cy.get(selectorsList.secionTitleTopBar).contains('Dashboard')
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.EmployerFirtName).clear().type('nameTest')
    cy.get(selectorsList.EmployerMiddleName).clear().type('middleNameTest')
    cy.get(selectorsList.EmployerLastName).clear().type('lastNameTest')
    cy.get(selectorsList.noClassField).eq(3).clear().type('idTest')
    cy.get(selectorsList.noClassField).eq(4).clear().type('otherIdTest')
    cy.get(selectorsList.noClassField).eq(5).clear().type('driverLicenceTest')
    cy.get(selectorsList.dateField).eq(0).clear().type('2025-21-02')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('.oxd-toast').should('contain', 'Successfully Updated')


    


    
  })

  it('login-fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.logginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)


  })

  

})