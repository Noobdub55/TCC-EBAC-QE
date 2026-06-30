const request = require('supertest');

const api = request('http://lojaebac.ebaconline.art.br/wp-json/wc/v3');

const authorization = 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy';

module.exports = {
    get: (url) =>
        api
            .get(url)
            .set('Authorization', authorization),

    post: (url) =>
        api
            .post(url)
            .set('Authorization', authorization),

    put: (url) =>
        api
            .put(url)
            .set('Authorization', authorization),

    delete: (url) =>
        api
            .delete(url)
            .set('Authorization', authorization),
};
