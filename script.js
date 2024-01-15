const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5500;

// Sample posts
const posts = [
    { title: 'First Post', content: 'This is the content of the first post.' },
    { title: 'Second Post', content: 'This is the content of the second post.' },
];

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (CSS and scripts)
app.use(express.static('public'));

// Render the blog page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// API endpoint to get all posts
app.get('/api/posts', (req, res) => {
    res.json(posts);
});

// API endpoint to create a new post
app.post('/api/posts', (req, res) => {
    const newPost = {
        title: req.body.title,
        content: req.body.content,
    };
    posts.push(newPost);
    res.redirect('/');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
