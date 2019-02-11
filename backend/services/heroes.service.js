const axios = require('axios');
const config = require('../config/config');

module.exports = class HeroesService {
    static async getHeroes() {
        const response = await axios.get(`${config.API.HEROES}/Heroes`);
        
        return response.data;
    }

    static async getMaps() {
        const response = await axios.get(`${config.API.HEROES}/Maps`);

        return response.data;
    }
};