const R = require('ramda');
const puppeteer = require('puppeteer');
const config = require('../config/config').SCRAPPING;

module.exports = async (heroes) => {
   try {
       const browser = await puppeteer.launch();
       const page = await browser.newPage();
       const data = [];
       
       //console.log(heroes);

       for (let i = 0; i < heroes.length; i++) {
           data.push(await getHeroInfo(page, heroes[i]));
       }

       await browser.close();

       return data;
   } catch(err) {
       console.log(err);
   }
};


async function getHeroInfo(page, heroData) {
    let synergizes,
        counters,
        first = R.nth(0);
    console.log(`Scrapping ${first(heroData)}`);
    
    await page.goto(config.BASE_URL + `/heroes/${first(heroData)}-build-guide`);
    synergizes = await page.evaluate(getSynergizes);
    counters = await page.evaluate(getCounters);

    return {
        heroName: first(heroData),
        info: R.last(heroData),
        synergizes,
        counters
    }
}

function getSynergizes() {
    const synergizes = document.querySelectorAll('.heroes_synergies .hero_portrait');
    const synergizesArray = [].slice.call(synergizes);

    return synergizesArray.map(synergize =>
        synergize.getAttribute('title'));
}

function getCounters() {
    const counters = document.querySelectorAll('.heroes_counters .hero_portrait');
    const countersArray = [].slice.call(counters);

    return countersArray.map(counters =>
        counters.getAttribute('title'));
}

