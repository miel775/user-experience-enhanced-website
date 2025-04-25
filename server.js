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
    res.render('over-ons.liquid')
    })

app.get('/vacatures', (req, res) => {
    res.render('vacatures.liquid')
})


app.get('/publicatie/:id', async function (request, response) {
    try {
        const publicationID = request.params.id;

        const fetchResponse = await fetch(`https://fdnd-agency.directus.app/items/dda_publications/?fields=*.*&filter={"id":"${publicationID}"}`);
        const data = await fetchResponse.json();

        const messagesFetch = await fetch(`https://fdnd-agency.directus.app/items/dda_messages?filter={"_and":[{"from":{"_contains":"Miel_"}},{"for":{"_contains":"${publicationID}"}}]}`)
        const messagesJSON = await messagesFetch.json();

        if (!data.data || data.data.length === 0) {
            return response.status(404).send('Publicatie niet gevonden');
        }

        response.render('publicatie-blog.liquid', {
            publication: data.data[0],
            messages: messagesJSON.data
        });
    } catch (error) {
        console.error(error);
        response.status(500).send('Er is iets misgegaan bij het ophalen van de publicatie');
    }
});

app.post ('/publication/:id', async function (request, response) {
    const publicationID = request.params.id;
  
    await fetch('https://fdnd-agency.directus.app/items/dda_messages', {
      method: 'POST',
      body: JSON.stringify({
        from: `Miel_${request.body.from}`,
        text: request.body.text,
        emoji: request.body.emoji,
        for: publicationID 
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  
    response.redirect(303, `/publication/${publicationID}`);
});

app.get('/leden', (req, res) => {
    res.render('leden.liquid')
})

app.get('/events', (req, res) => {
    res.render('events.liquid')
})

app.set('port',process.env.PORT || 8000)

app.listen(app.get('port'),() => {

})