
var fs = require('fs');
let request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

let link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";

let leaderboard=[];
let count=0;
let total_count=0;

request(link, cb);

function cb(err, res, body){
    if(err)
        console.log(err);
    else{
        const dom = new JSDOM(body);
        let scorecardLinks = dom.window.document.querySelectorAll('a[data-hover="Scorecard"]');
        total_count=scorecardLinks.length;
        for(let i=0;i<scorecardLinks.length;i++)
            {
                let linkofMatch = "https://www.espncricinfo.com" + scorecardLinks[i].href;
                
                // console.log(linkofMatch);
                count++;
                request(linkofMatch, cb2);
               
                
            }
    }
}

function cb2(err, res, body){
    if(err)
        console.log(err);
    else{
        

        const dom = new JSDOM(body);
        let batsmen = dom.window.document.querySelectorAll(".table.batsman tbody tr");
        let bowlers = dom.window.document.querySelectorAll(".table.bowler tbody tr");
        // console.log(batsmen.length, bowlers.length);
        for(let i=0;i<batsmen.length;i++)
        {
            let personDetail=batsmen[i].querySelectorAll('td');
            if(personDetail.length==8)
            {
                let name = personDetail[0].textContent;
                let runs = personDetail[2].textContent;
                let balls = personDetail[3].textContent;
                let fours= personDetail[5].textContent;
                let sixes= personDetail[6].textContent;
                
                // console.log(name.textContent, runs.textContent, fours.textContent, sixes.textContent);
                processLeaderBoard(name, runs, balls, fours, sixes);
                
            }
        }
    }
    count--;
    if(count==0)
    {
        // console.log(leaderboard);
        var dictstring = JSON.stringify(leaderboard);       
        
        fs.writeFileSync("leaderBoard.json", dictstring);

        
    }
}

function processLeaderBoard(name, runs, balls, fours, sixes)
{
    runs=Number(runs);
    fours=Number(fours);
    sixes=Number(sixes);
    balls=Number(balls);

    for(let i = 0; i<leaderboard.length; i++)
    {
        if(leaderboard[i].Batsman==name)
        {
            leaderboard[i].Runs+=runs;
            leaderboard[i].Matches+=1;
            leaderboard[i].Fours+=fours;
            leaderboard[i].Sixes+=sixes;
            leaderboard[i].Balls+=balls;
            return;
        }
    }


    let obj={
        Batsman : name,
        Matches : 1,
        Runs: runs,
        Balls: balls,
        Fours: fours,
        Sixes : sixes
        }
    leaderboard.push(obj);
}



