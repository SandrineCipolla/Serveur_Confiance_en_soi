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
        if (request.url === '/addCitation') {
           
         // modifier la constante citation perso : à faire   
         } else {
        // On gère le cas où le navigateur fait un pré-contrôle avec OPTIONS ...
        // ... pas besoin d'aller plus loin dans le traitement, on renvoie la réponse
        if (request.method === 'OPTIONS') {
            // On liste des méthodes et les entêtes valides
            response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, Origin, Authorization');
            response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
            // Certainement à remplir pour gérer des autorisations d'accès et de modifications...
            // MAIS POUR L'INSTANT ON S'EN FOUT
        } 
            
            const choice = Math.floor(Math.random()*2)
            console.log("choix", choice)
            
            const citations = await fetch("https://www.affirmations.dev/");
            const result = await citations.json();
            response.setHeader("Content-Type", "application/json")
            // c'est le code d'état HTTP de la réponse
            response.writeHead(200);
            const addedCitation = JSON.stringify(citationsPerso.data[0].citation)
            const affichage = JSON.stringify(result.affirmation) 
            
            if (choice === 0){
              return response.end(affichage)  
            }
            else{
                return response.end(addedCitation)
            }
    }
});

httpServer.listen(port, host, () => {
    // c'est pour afficher l'url du serveur au moment de son lancement
    console.log(`Web server is running on http://${host}:${port}`);
});

