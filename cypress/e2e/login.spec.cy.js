describe('template spec', () => {
  it('pass', () => {
    cy.visit('opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get("button.oxd-button").click() 
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')  
    cy.get(".oxd-text--h6").contains('Dashboard')

    
  })

  it('login-fail', () => {
    cy.visit('opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admdain')
    cy.get("[name='password']").type('admin123')
    cy.get("button.oxd-button").click()
    cy.get('.oxd-alert-content')


  })

  it('missing-password-field', () => {
    cy.visit('opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("button.oxd-button").click()
    cy.get('.oxd-form').contains('Required')


  })

  it('missing-Username-field', () => {
    cy.visit('opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='password']").type('admin1234')
    cy.get("button.oxd-button").click()
    cy.get('.oxd-form').contains('Required')


  })
  
})