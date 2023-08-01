$(document).ready(() => {
    // Quando il documento è pronto (caricato), esegui la seguente funzione
    
    let jsonUrl = 'data.json'; // Definisco l'URL del file JSON da caricare
    
    // Si può utilizzare anche usando le API normali
    // API fetch from browser (queste non si usano, le possiamo commentare, altrimenti avremo 2 responde)
    fetch(jsonUrl) // Effettua una richiesta HTTP al jsonUrl specificato
    .then((resp) => resp.json()) // Trasforma la risposta in formato JSON e restituisce una Promise
    .then((res) => {
        // Quando la Promise è risolta, esegui questa funzione e passa la risposta in formato JSON come "res"

        console.log(res); // Stampa la risposta JSON nella console del browser
    });

    jsonUrl = 'https://fakestoreapi.com/products';
    
    $.ajax({
        url: jsonUrl, // Imposto l'URL della richiesta AJAX con il file JSON da caricare
        method: "GET", // Imposto il metodo della richiesta (in questo caso, una richiesta GET)
        async: true, // Imposta la chiamata AJAX in modo asincrono
        dataType: "json", // Specifica il tipo di dati attesi come risposta (JSON in questo caso)
        headers: {
            accept: 'application/json', // Imposta l'header "Accept" per indicare che si accettano dati in formato JSON come risposta
            'Access-Control-Allow-Origin': '*', // Imposta l'header "Access-Control-Allow-Origin" per consentire richieste da qualsiasi dominio (CORS)
        },
    }).done((resp) => {
        // Quando la richiesta AJAX è completata con successo, esegui questa funzione e passa i dati ricevuti come "resp"
        
        console.log('resp', resp); // Stampo la risposta ricevuta nella console del browser
        
        const row = $('<div>'); // Creo un elemento div e lo assegno alla variabile "row"
        row.addClass('row'); // Aggiungo la classe "row" al div appena creato
        
        // Ciclo sugli elementi dell'array "resp"
        // Per ogni elemento nel JSON, esegui il seguente blocco di codice per creare una "card" per l'elemento
        resp.forEach((element) => {
            
            // Creo un elemento div e lo assegno alla variabile "card", aggiungendo le classi "card", "col-md-3" e "col-lg-4"
            let card = $('<div>').addClass(['card', 'col-md-3', 'col-lg-4']);
            
            // Creo un elemento img e lo assegno alla variabile "img", aggiungendo la classe "card-img-top"
            let img = $('<img>').addClass(['card-img-top']);
            // Imposto l'attributo "src" dell'immagine con il valore dell'attributo "image" dell'elemento corrente
            img.attr('src', element.image);
            // Imposto l'attributo "height" dell'immagine con il valore 250
            img.attr('height', 250);
            // Aggiungo l'elemento img all'elemento card
            card.append(img);
            
            // Creo un elemento div e lo assegno alla variabile "body", aggiungendo la classe "card-body"
            let body = $('<div>').addClass(['card-body']);
            // Creo un elemento h5 e lo assegno alla variabile "title", aggiungendo la classe "card-title" e inserendo il testo dell'attributo "title" dell'elemento corrente
            body.append($('<h5>').addClass('card-title').text(element.title));
            // Aggiungo l'elemento body all'elemento card
            card.append(body);
            
            // Aggiungo l'elemento card all'elemento row
            row.append(card)
        });
        
        // Seleziono l'elemento "main" della pagina HTML e gli aggiungo l'elemento "row" creato con le "card" all'interno
        $('main').append(row);
    })
});
