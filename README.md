# Express.js Basic Setup

This guide walks you through the steps to create a basic Express.js application from scratch.

## Steps to Set Up Your Express Application

1. **Initialize a New Node.js Project**
   - Navigate to your project folder in the terminal.
   - Run the following command to create a `package.json` file:
     ```bash
     npm init
     ```

2. **Install Express.js**
   - Install Express as a dependency by running:
     ```bash
     npm install express
     ```

3. **Create `index.js` File**
   - Inside your project folder, create a new file named `index.js`.

4. **Set Up Express in `index.js`**
   - Open the `index.js` file and add the following code to set up a basic Express server:
     ```javascript
     // Importing Express
     const express = require('express');
     
     // Initialize Express app
     const app = express();
     
     // Set the port for the server to listen on
     const port = 3000;

     // Start the server
     app.listen(port, () => {
       console.log(`Server running on http://localhost:${port}`);
     });
     
     // Middleware to handle incoming requests
     app.use(express.json());  
     
     // Define routes for the app
     app.get('/', (req, res) => {
       res.send('Welcome to my Express app!');
     });
     
     app.post('/submit', (req, res) => {
       res.send('Data submitted successfully!');
     });
     
 
     ```

## How to Run the Project

- In your terminal, run the following command to start the server:
  ```bash
  node index.js
  
