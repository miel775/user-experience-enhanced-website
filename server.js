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

app.get('/publicatie', (req, res) => {
res.render('index.liquid',{
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

app.get('/', (req, res) => {
    // maak een per publicatie die uit de database komt
    res.render('home.liquid')
})

app.get('/publicaties/:id',async function (req, res) {
    // de content wordt geladen op de pagina
    if {
        const publicationID = request.params.id;
        const publicationFetch = await fetch(`https://fdnd-agency.directus.app/items/dda_publications/?fields=*.*&filter={"id":"${publicationID}"}`);
        // eerst wordt de data opgehaald uit de database
    
        // vervolgens wordt dit omgezet naar een json file
        const publicationFetchJSON = await publicationFetch.json();

        res.render('publicatie-blog.liquid', {
        publicationID: publicationFetchJSON.data?.[0] || {}
    });

    // Error state aangemaakt
    } catch (error) {
        console.error('Fout bij laden van publicatie:', error)
        res.status(404).send('Er ging wat mis met het laden van de content')
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