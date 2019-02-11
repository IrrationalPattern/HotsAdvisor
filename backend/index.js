const R = require('ramda');
const heroesService = require('./services/heroes.service');
const scrapHeroesInfo = require('./scrapping/index');

const firebase = require('firebase-admin');
const serviceAccount = require('./firebase-key.json');

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://hots-advisor.firebaseio.com"
});
const database = firebase.database();

(async () => {
    const heroes = await heroesService.getHeroes();
    const heroesNames = heroes.map(R.prop('short_name'));
    const heroesInfo = await scrapHeroesInfo(R.zip(heroesNames, heroes));

    database
        .ref('heroesInfo')
        .set({ data: heroesInfo})
        .then(() => console.log('done'));
})();