/// <reference types = "cypress" />

describe('Sending POST request', () => {

 Cypress.config('baseUrl','https://reqres.in')

  it('adding POST request - Data', () => {
    cy.request({
      method:'POST',
      url:'/api/users',
      body:{
        "name":"Adhiya",      
       "job": "student"
      }
      
    })
    .then((response)=>{
      expect(response.status).eq(201)
    })
    
  })

})