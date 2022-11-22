/// <reference types = "cypress" />

describe('Sending POST request', () => {

    Cypress.config('baseUrl','https://reqres.in')
   
     it('adding POST request - Data', () => {
       cy.request({
         method:'POST',
         url:'/api/users/2',
         body:{
           "name":"Adhiya",      
          "job": "Doctor"
         }
       })
       .then((response)=>{
         expect(response.status).eq(201)
       })
       
     })
   
   })