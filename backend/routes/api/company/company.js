/**
 * Полный CRUD
 * + add, remove to field images: Array
 * */

const express = require('express');

const Router = express.Router();


const controller = require('../../../controllers/api/company/company');

const {c, r, u, d} = controller;
Router.post('/', c);
Router.get('/', r)
Router.put('/', u)
Router.delete('/', d);

const {addImage, removeImage} = controller;
/*{
    id: company_id,
    image: File
}*/
Router.post('/images', addImage);
Router.delete('/images', removeImage);


const {setLogo, removeLogo} = controller;
/*{
    id,
    logo: File
}*/
Router.post('/logo', setLogo);
/*{ id }*/
Router.delete('/logo', removeLogo);


module.exports = Router;