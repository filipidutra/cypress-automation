class DashboardPage {
    SelectorsList(){
        const selector = {
            secionTitleTopBar: ".oxd-text--h6",
        }

        return selector

    }

    rightPage(){

        cy.get(this.SelectorsList().secionTitleTopBar).contains('Dashboard')
    }
}

export default DashboardPage