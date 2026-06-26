class minhaContaPage {

    acessar(){
        cy.visit ('/minha-conta/')
    }

    cadastrar(email, senha){
        cy.get('[name="email"]').type(email);
        cy.get('.register > :nth-child(2) > [name="password"]').type(senha);
        cy.get('[name="register"]').click();
    }

    login(email, senha){
        cy.get('[name="username"]').type(email);
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type(senha);
        cy.get('[name="login"]').click();

    }


}

export default new minhaContaPage()