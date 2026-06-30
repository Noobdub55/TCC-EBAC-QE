const api = require('./api');

class servicoCupom{

    listarCupons(){
        return api.get('/coupons');
    }

    buscarCupom(id){
        return api.get(`/coupons/${id}`);
    }

    criarCupom(dados){
        return api.post('/coupons').send(dados);
    }

}

module.exports = new servicoCupom();