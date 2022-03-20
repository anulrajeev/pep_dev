let request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

let link = "https://www.espncricinfo.com/series/ipl-2021-1249214/kolkata-knight-riders-vs-delhi-capitals-41st-match-1254092/full-scorecard";
request(link, cb);

function cb(err, res, body){
    if(err)
        console.log(err);
    else{
        const dom = new JSDOM(body);
        let player = dom.window.document.querySelectorAll(".table.batsman tbody tr td a");

        for(let i=0;i<player.length;i++)
         {

             let playerLink = "https://www.espncricinfo.com" + player[i].href;
            //  console.log(playerLink);
            request(playerLink, cb2);
            
            function cb2(err, res, body){
                if(err)
                    console.log(err);
                else{
                    const dom2 = new JSDOM(body);
                    let playerDetail = dom2.window.document.querySelectorAll(".player-card-description");
                    console.log("Player name --------------->  ", playerDetail[0].textContent);
                    console.log("Birth Details-------------->  ", playerDetail[1].textContent);
                    console.log('****************************************************************');
                    
                }
            }
         }


    }
}