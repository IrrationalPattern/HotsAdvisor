import axios from 'axios';
import { prop, groupBy } from 'ramda';

const CONFIG = {
    API: {
        BASE: 'https://hotsapi.net/api/v1'
    }
};

class HeroesService {
    static groupByClasses(heroes) {
        console.log(heroes);
        const groupByHeroClasses = groupBy(prop('role'));

        return groupByHeroClasses(heroes);
    }

    static async getHeroes() {
        const response = await axios.get(`${CONFIG.API.BASE}/heroes`);

        return response.data;
    }
}

export default HeroesService;