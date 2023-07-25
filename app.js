// server using experss
const express = require('express');
const morgan = require('morgan');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

// Listen for requests
app.listen(3000);

// Middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));


const blogs = [
    { title: 'first', snippet: "adhasdf asdfhajksd adfjhn asldkfjhasd asdufihsad" },
    { title: 'second', snippet: "qertqweyrdfhety ueujhn asldkfjhaeuetusd asdufihsad" },
];

app.get('/', (req, res) => {
    //res.send()
    res.render('index', { title: 'Parrot Blog', blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Adhamfm' });
});

// redirects
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create Blogs' });
});

// 404 page (Needs to be after the last requests, )
app.use((req, res) => {
    res.render('404', { title: '404 - Page Not Found | 404' });
});