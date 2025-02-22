import userData from '../fixtures/userdata.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('template spec', () => {
  
  const selectorsList = {
    
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    EmployerFirtName: "[name='firstName']",
    EmployerMiddleName: "[name='middleName']",
    EmployerLastName: "[name='lastName']",
    noClassField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    Selector: ".oxd-select-text--arrow",
    Dropdown: '.oxd-select-dropdown'

    

  }


  it.only('user-info', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.rightPage()
    // cy.location('pathname').should('equal', '/web/index.php/dashboard/index')  
    // cy.get(selectorsList.secionTitleTopBar).contains('Dashboard')
    // cy.get(selectorsList.myInfoButton).click()
    // cy.get(selectorsList.EmployerFirtName).clear().type('nameTest')
    // cy.get(selectorsList.EmployerMiddleName).clear().type('middleNameTest')
    // cy.get(selectorsList.EmployerLastName).clear().type('lastNameTest')
    // cy.get(selectorsList.noClassField).eq(3).clear().type('idTest')
    // cy.get(selectorsList.noClassField).eq(4).clear().type('otherIdTest')
    // cy.get(selectorsList.noClassField).eq(5).clear().type('driverLicenceTest')
    // cy.get(selectorsList.dateField).eq(0).clear().type('2025-21-02')
    // cy.get(selectorsList.dateCloseButton).click()
    // cy.get(selectorsList.Selector).eq(0).click()
    // cy.get(selectorsList.Dropdown).contains('Brazilian').click()
    // cy.get(selectorsList.Selector).eq(1).click()
    // cy.get(selectorsList.Dropdown).contains('Married').click()
    // cy.get(selectorsList.dateField).eq(1).clear().type('1993-09-04')
    // cy.get(selectorsList.dateCloseButton).click()   
    // cy.get(selectorsList.submitButton).eq(0).click({force: true})
    // cy.get('.oxd-toast').should('contain', 'Successfully Updated')
    


  })

  it('login-fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.logginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)


  })

  

})