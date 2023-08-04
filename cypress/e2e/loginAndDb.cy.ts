import { LoginComponent } from "src/app/auth/login/login.component"

describe('db open login and successful login dislplays dashboard ', () => {
  it('passes', () => {
    cy.visit('http://localhost:5000/db')
    cy.get('app-login')
    cy.get('[id="userName"]').type("user1")
    cy.get('[id="password"]').type("pwd1")
    cy.get('[type="submit"]').click()
    cy.get('app-my-notes')


  })
 
  })

  describe('db give login and fails and displays login', () => {
    it('passes', () => {
      cy.visit('http://localhost:5000/db')
      cy.get('app-login')
      cy.get('[id="userName"]').type("user2")
      cy.get('[id="password"]').type("pwd2")
      cy.get('[type="submit"]').click()
      cy.get('app-login')


    })
  
  })
 
  