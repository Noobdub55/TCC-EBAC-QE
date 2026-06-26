Cypress.Commands.add ('abrirLoja' , () => {
    cy.visit ('/minha-conta/')
})

Cypress.Commands.add ('loginComSessao' , () => {
    cy.session('usuario-padrao' , () => {

    cy.visit ('/minha-conta/')
    
        cy.get('[name="username"]').type('gagagogo@gmail.com');
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('jaja123jaja');
        cy.get('[name="login"]').click();

    })
})