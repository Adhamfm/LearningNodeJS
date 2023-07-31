// server using experss
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const { result } = require('lodash');

//express app
const app = express();
//connect to mangoDB
const dbURI = 'mongodb+srv://ParrotBlogApp:parrot1234@parrotdb.5csiufk.mongodb.net/Parrot-DB?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result) => {
        console.log('connected to db');
        app.listen(3000);
    })
    .catch((err) => console.log(err))


//register view engine
app.set('view engine', 'ejs');

// Listen for requests


// Middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'TestNew blog22',
        snippet: 'This is a new blog',
        body: 'I like parrots hahahaha'
    });

    blog.save()
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
})

app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
})

app.get('/', (req, res) => {
    //res.send()
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Adhamfm' });
});

// blogs
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result });
        })
        .catch((err) => console.log(err));
});

app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => console.log(err));
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create Blogs' });
});

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', { title: "Blog Details", blog: result })
        })
        .catch(err => console.log(err));
});

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' })
        })
        .catch((err) => console.log(err));
});
// redirects

// 404 page (Needs to be after the last requests, )
app.use((req, res) => {
    res.render('404', { title: '404 - Page Not Found | 404' });
});