const Result = require("../models/result");

module.exports.gameStart = (req, res) => {
    try {
        function getRandomNumberBetween0to2()  {
            return Math.floor(Math.random() * 3);
        }
        
        for (let i = 1; i <= 50; i++) {
            let player1 = getRandomNumberBetween0to2();
            let player2 = getRandomNumberBetween0to2();
            let player3 = getRandomNumberBetween0to2();
            let player4 = getRandomNumberBetween0to2();
            optionChecker(player1);
            optionChecker(player2);
            optionChecker(player3);
            optionChecker(player4);
            let player1Arr = [];
            let player2Arr = [];
            let player3Arr = [];
            let player4Arr = [];
            
            for (let i = 0; i < 3; i+=1) {
                player1Arr[i] = versusBattle(player1, player2);
                for (let j = 1; j < 3; j+= 1) { 
                    player1Arr[j] = versusBattle(player1, player3);
                    for (let k = 2; k < 3; k++) {
                        // player1Arr[i] = versusBattle(player1, player2);
                        player1Arr[k] = versusBattle(player1, player4);
                    }
                } 
            }
            // versusBattle(player2, player1);
            // versusBattle(player2, player3);
            // versusBattle(player2, player4);
            for (let i = 0; i < 3; i+=1) {
                player2Arr[i] = versusBattle(player2, player1);
                for (let j = 1; j < 3; j+= 1) { 
                    player2Arr[j] = versusBattle(player2, player3);
                    for (let k = 2; k < 3; k++) {
                        // player1Arr[i] = versusBattle(player1, player2);
                        player2Arr[k] = versusBattle(player2, player4);
                    }
                } 
            }
            // versusBattle(player3, player1);
            // versusBattle(player3, player2);
            // versusBattle(player3, player4);
            for (let i = 0; i < 3; i+=1) {
                player3Arr[i] = versusBattle(player3, player1);
                for (let j = 1; j < 3; j+= 1) { 
                    player3Arr[j] = versusBattle(player3, player2);
                    for (let k = 2; k < 3; k++) {
                        // player1Arr[i] = versusBattle(player1, player2);
                        player3Arr[k] = versusBattle(player3, player4);
                    }
                } 
            }
            // versusBattle(player4, player1);
            // versusBattle(player4, player2);
            // versusBattle(player4, player3);
            for (let i = 0; i < 3; i+=1) {
                player4Arr[i] = versusBattle(player4, player1);
                for (let j = 1; j < 3; j+= 1) { 
                    player4Arr[j] = versusBattle(player4, player2);
                    for (let k = 2; k < 3; k++) {
                        // player1Arr[i] = versusBattle(player1, player2);
                        player4Arr[k] = versusBattle(player4, player3);
                    }
                } 
            }
            // arrayPrinter(...player1Arr)
            // arrayPrinter(...player2Arr)
            // arrayPrinter(...player3Arr)
            // arrayPrinter(...player4Arr)

            Result.create({playerOne: player1, playerTwo: player2, playerThree: player3, playerFour: player4, player1Array: player1Arr,
                            player2Array: player2Arr, player3Array: player3Arr, player4Array: player4Arr});
            
        }
        
        function arrayPrinter() {
            for(let i = 0; i < arguments.length; i++) {
                console.log(arguments[i] + " ");
            }
        }
        function optionChecker(player) {
            if(player === 0) {
                console.log("Rock", player)
            } else if (player == 1) {
                console.log("Paper", player)
            } else {
                console.log("Scissor", player)
            }
        }
        function versusBattle (player1, player2){
            // 0 rock
            // 1 paper
            // 2 scissors
            // versus 0 = loss, 1 = win, 2 = draw
            if (player1 === 0 && player2 === 1) {
                // console.log('winner Player2 = ', player2);
                return  0;
                
            } else if (player1 === 1 && player2 === 0) {
                // console.log('winner = player 1', player1)
                return 1;
               
            } else if (player1 === 1 && player2 === 2) {
                // console.log("Winner = player2", player2);
                return 0;
                
            } else if (player1 === 2 && player2 === 1) {
                // console.log("Winner = player1", player1);
                return 1;
                
            } else if (player1 === 2 && player2 === 0) {
                // console.log("Winner player2 = ", player2);
                return  0;
                
            } else if (player1 === 0 && player2 === 2){
                // console.log("winner player1 = ", player1);
                return  1;
                
            } else {
                return 2;
            }
        }
        
        Result.find({}, (err, post) => {
            if(err) {
                console.log('error')
            }
            return res.json(200, {
                message: "0 = loss, 1 = winner, 2 = draw",
                post
            })
        });
        
    } catch (err) {
        console.log('error occurred', err)
        return;
    }
}