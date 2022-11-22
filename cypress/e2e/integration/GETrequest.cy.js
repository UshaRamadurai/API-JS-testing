/// <reference types = "cypress" />

describe('Verify GET request', () => {

  Cypress.config('baseUrl','https://gorest.co.in')
 beforeEach(()=>{
  cy.request('GET','/public/v2/users').as('users')

 })

  it('Verify GET request - status', () => {
    cy.get('@users')
    .its('status').should('eq', 200)
  })
  it('Verify GET request - Data', () => {
    cy.get('@users')
    .then((response)=>{
      expect(response.body).to.have.length(10)
      expect(response.body[0]).to.have.property('name','Aadidev Saini V')

    })
  })
    it('Verify GET request - Data1', () => {
      cy.get('@users')
      .its('body.1').then((data)=>{
        
        expect(data).to.have.property('id',3026)
        expect(data).to.have.property('name','Aaditya Bhattacharya DDS')
        expect(data).to.have.property('email','aaditya_bhattacharya_dds@white.biz')
        expect(data).to.have.property('gender','female')
  
      })
   })

})