// initier le serveur
const http = require('http');
const citationsPerso = require('./citations.json');
console.log(citationsPerso.data[0].citation);
// serveur sur localhost

const host = 'localhost';
// permettre de trouver son serveur préciser 8000
const port = 8000;
const httpServer = http.createServer();
httpServer.on('request', async (request, response) => {
    // On spécifie l'entête pour le CORS
    response.setHeader('Access-Control-Allow-Origin', '*'); // MEGA IMPORTANT SINON CA CRASH :(

    // On gère le cas où le navigateur fait un pré-contrôle avec OPTIONS ...
    // ... pas besoin d'aller plus loin dans le traitement, on renvoie la réponse
    if (request.method === 'OPTIONS') {
        // On liste des méthodes et les entêtes valides
        response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, Origin, Authorization');
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        // Certainement à remplir pour gérer des autorisations d'accès et de modifications...
        // MAIS POUR L'INSTANT ON S'EN FOUT
    } 

        const citations = await fetch("https://www.affirmations.dev/");
        const result = await citations.json();
        response.setHeader("Content-Type", "application/json")
        // c'est le code d'état HTTP de la réponse
        response.writeHead(200);
        return response.end(JSON.stringify(result.affirmation));
        // return response.end();
   

});

httpServer.listen(port, host, () => {
    // c'est pour afficher l'url du serveur au moment de son lancement
    console.log(`Web server is running on http://${host}:${port}`);
});
// const host = 'localhost';
// // permettre de trouver son serveur préciser 8000
// const port = 8000;
// // fetcher l'API : request et result 
// const requestListener = async function (req, res) {
//     const citations = await fetch("https://www.affirmations.dev/");
//     //////TEST///////
//     // const citations = await fetch(citationsPerso);
//     // retour de l'API en format JSON
//     const result = await citations.json();

//     // setheader précise le type de contenu dans le résultat et définit l'en-tête
    
//     res.setHeader("Content-Type", "application/json")
//     // c'est le code d'état HTTP de la réponse
//     res.writeHead(200);
//     // console.log(result, "coucou")
//     // console.log(citations)
//     // console.log(req)
//     // stringify sert à convertir JSON en STRING
//     res.end(JSON.stringify(result.affirmation));
//     // res.end(JSON.stringify(citationsPerso.data[0].citation));
// };
// // création du serveur
// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//     // c'est pour afficher l'url du serveur au moment de son lancement
//     console.log(`Web server is running on http://${host}:${port}`);
// });



// console.log("serveur",server);

// });
