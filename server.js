import express, { urlencoded } from 'express';
import { Liquid } from 'liquidjs';

const allPublications = await fetch('https://fdnd-agency.directus.app/items/dda_publications');
const allPublicationsJSON = await allPublications.json();

// Deze json files zijn voor het laten zien van de laatste publicaties
const datedPublications = await fetch('https://fdnd-agency.directus.app/items/dda_publications/?sort=-date');
const datedPublicationsJSON = await datedPublications.json();

const app = express();
app.use(express.static('public'));

const engine = new Liquid();
app.engine('liquid', engine.express());


app.get('/', (req, res) => {
    // Er is een homepage gemaakt waarbij je kan navigeren naar andere pagina's
    res.render('index.liquid')
})


app.get('/publicaties', (req, res) => {
res.render('publicaties.liquid',{
    publications: allPublicationsJSON.data,
    datedpublications: datedPublicationsJSON.data
    });
});

app.get('/over-ons', (req, res) => {
    res.render('index.liquid')
    })

app.get('/contact', (req, res) => {
    res.render('contact.liquid')
})


app.get('/publicaties/:id', async function (req, res) {
    try {
        const publicationID = req.params.id;

        const response = await fetch(`https://fdnd-agency.directus.app/items/dda_publications/?fields=*.*&filter={"id":"${publicationID}"}`);
        const data = await response.json();

        // Controleer of de data beschikbaar is
        if (!data.data || data.data.length === 0) {
            return res.status(404).send('Publicatie niet gevonden');
        }

        res.render('publicatie-blog.liquid', {
            publication: data.data[0]
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Er is iets misgegaan bij het ophalen van de publicatie');
    }
});

app.get('/leden', (req, res) => {
    res.render('leden.liquid')
})

app.get('/vacatures', (req, res) => {
    res.render('contact.liquid')
})

app.set('port',process.env.PORT || 8000)

app.listen(app.get('port'),() => {

})