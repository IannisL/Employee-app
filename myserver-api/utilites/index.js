const express = require ("express");
const myMiddleware = require('./middlewares/myMiddlewares');



const app = express();
const PORT = 3000;


























/*
catch all route for redirect
*/
app.all('*' ,(req, res) => {
    res.redirect('https://perscholas.org');
});
// Port for server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
