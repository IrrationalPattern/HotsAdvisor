const axios = require('axios');
const config = require('../config/config');

class HeroesService {
    static async getHeroes() {
        const response = await axios.get(`${config.API.BASE}${config.API.HEROES}`);
        
        return response.data;
    }

    static async getMaps() {
        const response = await axios.get(`${config.API.BASE}${config.API.MAPS}`);

        return response.data;
    }
}

module.exports = HeroesService;