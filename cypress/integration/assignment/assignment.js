describe('Basic', function(){
    let browseData
    beforeEach(function(){
        cy.fixture('browserInfo').then((data)=> {
            browseData = data
        })
    })
    it('Verify Title', function(){
        const baseURL = browseData.base_url
        const expectedTitle = browseData.title
        cy.visit(baseURL)
        cy.title().should('eq', expectedTitle)
    })

    it('Click on Intersect Button', function(){
        const menuToSelect = browseData.menu_to_select
        cy.get('.card-home-banner__title').contains(menuToSelect).click()
    })

    it('Verify Map is displaying under "The Growing Naviance Footprint".', function(){
        const navigateToText = browseData.navigate_to_map_header
        cy.get('.block-title__title').contains(navigateToText).
        scrollIntoView()
        cy.get('.block-stats-map__map').should('be.visible')
    })

    it('Verify each state displaying correct percentge on mouse hover', function(){
        cy.get('path').each(($map) => {
            cy.wrap($map).click()
        })
    })
})