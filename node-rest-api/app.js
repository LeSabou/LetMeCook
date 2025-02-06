// Déclaration de express //
const express = require('express');
const app = express();
app.use(express.json());

// Déclaration du port + Affichage en console du port //
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log('Server is running on PORT:' + PORT);
});

// Endpoint du statut de l'API //
app.get('/status', (req, res) => {
    const status = {
        'status': 'Running'
    };
    res.json(status);
});