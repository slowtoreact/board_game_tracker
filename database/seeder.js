const createCsvWriter = require('csv-writer').createObjectCsvWriter;

let gameNames = ["Risk", "Life", "Connect-4", "Mouse-Trap", "Uno", "Sorry", "Coux", "Backgammon", "Cootie", "Don't Break the Ice", "Outlaw", "Wizard Battle", "Exploding Kittens", "Sushi Go", "Snakes and Ladders", "Payday", "13 Dead End Drive", "Cards Against Humanity", "What Do You Meme", "Scrabble", "Boggle", "Pictionary", "Balderdash", "Taboo", "Catch Phrase", "Lords of Waterdeep", "Settlers of Catan", "Twister"];

let prices = [12.99, 49.99, 50.00, 100.00, 149.99, 5.95, 25.00, 8.50, 9.89, 88.75, 200.00];

let genres = ["adventure", "RPG", "strategy", "horror", "mystery", "horticulture", "sci-fi", "cooperative", "turn-based", "chance", "card", "simulator", "puzzle", "video", "party", "drinking"];

let times = [5, 10, 15, 20, 25, 30, 45, 60, 90, 120, 150, 180];

let designers = ["Mattel", "Hasbro", "Matt Leacock", "Jamey Stegmaier", "Daniel Schewe", "Jared Bourget", "Jeff Bentley", "Teddi Maull", "Ron", "Morgan", "Chase", "Trevor", "Brady", "Han", "Rachel", "Stephen", "Bailey", "Nick", "Jordan", "Sruj", "Cutthroat Craig", "Jacy"];

const csvWriter = createCsvWriter({
        path: './games.csv',
        header: [
            {id: 'id', title: 'id'},
            {id: 'name', title: 'name'},
            {id: 'rank', title: 'rank'},
            {id: 'genre', title: 'genre'},
            {id: 'time', title: 'time'},
            {id: 'price', title: 'price'},
            {id: 'min_players', title: 'min_players'},
            {id: 'max_players', title: 'max_players'},
            {id: 'designer', title: 'designer'}
        ]
    });

let dataGenerator = (array) => {
    for (var i = 1; i <= 30; i++) { // modify the number to the left to insert a differnet amount of entries
        array.push({
            // id: i, - this is not needed for Postgres since it will auto-increment
            name: gameNames[Math.ceil(Math.random() * (gameNames.length - 1))],
            rank: (Math.random() * 5).toFixed(2),
            genre: genres[Math.ceil(Math.random() * (genres.length - 1))],
            time: times[Math.ceil(Math.random() * (times.length - 1))],
            price: prices[Math.ceil(Math.random() * (prices.legnth - 1))],
            min_players: Math.ceil(Math.random() * 2),
            max_players: Math.ceil(Math.random() * 8),
            designer: designers[Math.ceil(Math.random() * (designers.length - 1))]
        });
	}
}

// create an array to push data into and then convert it to a csv file
let records = [];
console.time('Processing time: ');
dataGenerator(records);  
csvWriter.writeRecords(records)
.then(() => {
	console.timeEnd('Processing time: ');
});