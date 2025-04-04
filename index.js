const express = require("express");
const app = express();

// console.dir(app);

let port = 8080;

app.listen(port, () => { //listen is creating a web server for incoming requests
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res) => { //at first app.use is listening and then track it that (request came). Also this process is callback to the express server because by default "req" and "res" is creating express
//     console.log("request received");

// res.send('Welcome to youtube <br> <a href="https://www.youtube.com/">Youtube</a>');
//     res.send({
//         name: 'Khairul Islam',
//         Age: 30,
//         Sub: 'EEE',
//         CGPA: 3.31
//     });

// });


    app.get("/" , (req, res) => {
        res.send("Welcome to my class");
    });

    // app.get("/home" , (req, res) => {
    //     res.send("Log in sucessfully");
    // });

    // app.get("/page", (req,res) =>{
    //     res.send('log out sucessfully');
    // });

    // app.get(/(.*)/ ,(req, res) => {
    //     res.send("Page not found");
    // });

    // app.post("/", (req, res) => {
    //     res.send("You sent a post request");
    // });

    app.get("/:username/:id", (req, res) => {
        let {username, id} = req.params;
        let code = `<h1>Welcome @${username} and your id is ${id}</h1>`
        res.send(code);
    });

    app.get("/search", (req, res) => {
        let {q} = req.query;
        if(!q) {
           res.send("<h1>Nothing searched</h1>") 
        }
        res.send(`search result for query ${q}`);
    });


 