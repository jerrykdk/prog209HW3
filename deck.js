

let deck = {
    cardArray: [],

    load: function() {
        let suitCounter = 1; //suit
        let rankCounter = 1; //rank

        for(suitCounter = 1; suitCounter < 5; suitCounter++){
            for(rankCounter = 2; rankCounter < 15; rankCounter++){
               this.cardArray.push(new Card(suitCounter, rankCounter)); 
            }
        }

    }
}
