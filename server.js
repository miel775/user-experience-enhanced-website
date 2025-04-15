import express, { urlencoded } from 'express';
import { Liquid } from 'liquidjs';

const allPublications = await fetch('https://fdnd-agency.directus.app/items/dda_publications');
const allPublicationsJSON = await allPublications.json();

const app = express();
app.use(express.static('public'));

const engine = new Liquid();
app.engine('liquid', engine.express()); 

app.get('/', (req, res) => {
res.render('index.liquid',{
    publications: allPublicationsJSON.data
});
});

app.get('/over-ons', (req, res) => {
    res.render('index.liquid')
    })

app.get('/contact', (req, res) => {
    res.render('contact.liquid')
})

app.get('/publicaties', (req, res) => {
    // maak een per publicatie die uit de database komt
    res.render('publications.liquid')
})

app.get('/publciaties/:id', (req, res) => {
    const publicationFetch = await fetch(`https://fdnd-agency.directus.app/items/dda_publications/?fields=*.*&filter={"id":"${publicationID}"}&limit=1`);
    // eerst wordt de data opgehaald uit de database
    const publicationID = request.params.id;
   
    // vervolgens wordt dit omgezet naar een json file
    const publicationFetchJSON = await publicationFetch.json();

    // de content wordt geladen op de pagina
    res.render('publication-blog.liquid'{
        publicationID: publicationFetchJSON.data?.[0] || []
    })
})

app.get('/leden', (req, res) => {
    res.render('contact.liquid')
})

app.get('/vacatures', (req, res) => {
    res.render('contact.liquid')
})

app.set('port',process.env.PORT || 8000)

app.listen(app.get('port'),() => {

})