import express, { urlencoded } from 'express';
import { Liquid } from 'liquidjs';

const app = express();
app.use(express.static('public'));

const engine = new Liquid();
app.engine('liquid', engine.express()); 

app.get('/', (req, res) => {
res.render('index.liquid')
})

app.get('/contact', (req, res) => {
    res.render('contact.liquid')
})

app.get('/publications', (req, res) => {
    res.render('publications.liquid')
})

app.set('port',process.env.PORT || 8000)

app.listen(app.get('port'),() => {

})