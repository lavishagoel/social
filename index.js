const express = require('express');
const bodyParser = require('body-parser');
const { signup, login } = require('./controllers/userController');
const {
    createPost,
    likePost,
    dislikePost,
    addComment,
    replyToComment
} = require('./controllers/postController');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// User routes
app.post('/signup', signup); // Endpoint for user signup
app.post('/login', login);   // Endpoint for user login

// Post routes
app.post('/posts', createPost);                      // Create a new post
app.post('/posts/:postId/like', likePost);           // Like a post
app.post('/posts/:postId/dislike', dislikePost);     // Dislike a post
app.post('/posts/:postId/comments', addComment);     // Add a comment to a post
app.post('/posts/:postId/comments/:commentId/reply', replyToComment); // Reply to a comment

// Default route for handling unknown endpoints
app.use((req, res) => {
    res.status(404).send('Endpoint not found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
