import {AboutUsComponentComponent} from 'src/app/about-us-component/about-us-component.component'
describe('AboutUs.cy.ts', () => {
  it('playground', () => {
    cy.mount(AboutUsComponentComponent);
    cy.get('p').should('have.text','about-us-component works!')
  })
})