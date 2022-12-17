/**
 * Полный CRUD
 * */

const express = require('express');

const Router = express.Router();


const controller = require('../../../../../controllers/api/services/hotel/booking/booking');


const {c, r, u, d} = controller;
Router.post('/', c);
Router.get('/', r)
Router.put('/', u)
Router.delete('/', d);


module.exports = Router;