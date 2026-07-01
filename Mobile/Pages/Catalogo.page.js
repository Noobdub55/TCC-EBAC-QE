class catalogoPage{

    get abaBusca(){
        return $('android=new UiSelector().resourceId("tab-Search")')
    }

    get produtoCamisa(){
        return $('android=new UiSelector().description("Camiseta EBAC, R$ 149.99").instance(0)')
    }

    get clicaBuscar(){
        return $ ('android=new UiSelector().resourceId("searchInput")')
    }


    async abrirProdutoCamisa(){
        await this.abaBusca.click()
        await this.produtoCamisa.waitForDisplayed({ timeout: 10000 })
        await this.produtoCamisa.click()
    }

    async buscaProduto(nomeProduto){
        await this.abaBusca.click()
        await this.clicaBuscar.setValue(nomeProduto)
    }

}

module.exports = new catalogoPage()