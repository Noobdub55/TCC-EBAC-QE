import { faker } from "@faker-js/faker";
import minhaContaPage from "../pages/minhaContaPage";

describe('login', () => {

  beforeEach(() => {
    cy.abrirLoja()
  });

it('Cadastrar novo usuario', () => {
  
  const email = faker.internet.email()
  const senha = faker.internet.password()

  minhaContaPage.cadastrar(email, senha)

});

it('Login com e-mail e senha validos', () => {
  
  minhaContaPage.login(
      'gagagogo@gmail.com',
      'jaja123jaja'
  )

  cy.contains('Olá, gagagogo (não é gagagogo? Sair)').should('be.visible')

});
  
it('Login com e-mail invalido', () => {

  minhaContaPage.login(
    'gogagogo@est.com',
    'jaja123jaja'
  )
  cy.contains( 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário').should('be.visible');
  

});

it('Login com senha invalida', () => {
  
  minhaContaPage.login(
    'gagagogo@gmail.com',
    'kaka111'
  )

  cy.contains('Erro: A senha fornecida para o e-mail gagagogo@gmail.com está incorreta. Perdeu a senha?').should('be.visible')

});

});