const catalogoPage = require('../Pages/Catalogo.page')

describe('Testes de catalogo da loja Ebac mobile', () => {

    it('Deve mostrar os detalhes de um produto',async () => {
        
        await catalogoPage.abrirProdutoCamisa();

         const additionalDetails = await $('android=new UiSelector().text("Additional Details")')
         await expect(additionalDetails).toBeDisplayed()

    });

    it.only('Deve buscar um produto no catálogo', async () => {

        await catalogoPage.buscaProduto('camiseta')
        await expect(catalogoPage.produtoCamisa).toBeDisplayed();

});

});