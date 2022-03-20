// Match link  : https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-punjab-kings-53rd-match-1254094/full-scorecard
//test link    : https://www.espncricinfo.com/series/ipl-2021-1249214/sunriderd-hyderabad-vs-mumbai-indians-55th-match-1254088/full-scorecard
const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
let link = "https://www.espncricinfo.com/series/ipl-2021-1249214/sunriderd-hyderabad-vs-mumbai-indians-55th-match-1254088/full-scorecard";

request(link, cb);

function cb(err, res, body){
    if(err)
        console.log(err);
    else
    {
        const dom = new JSDOM(body);

        let bowlerDetail = dom.window.document.querySelectorAll(".bowler tbody tr");
        // console.log(bowlerDetail.length);                //prints the row count

        /*
        for(let i=0;i<bowlerDetail.length;i++)
            console.log(bowlerDetail[i].textContent);       //prints the entire row
        */

        /*
        for(let i=0;i<bowlerDetail.length;i++)
        {

            let bowlerName = bowlerDetail[i].querySelector("td");
            console.log(bowlerName.textContent);            // prints the individual bowler name
            //here bowlerName is a reference and in order to get the text content, you need to use .textContent
        }
        
        */

        /*

        for(let i=0;i<bowlerDetail.length;i++)
        {

            let bowlerName = bowlerDetail[i].querySelector("td");
            if(bowlerName.textContent.length)
                console.log(bowlerName.textContent);            // prints the individual bowler name and avoids the empty rows
        }
        */

        let max_score = 0, person="";
        for(let i=0;i<bowlerDetail.length;i++)
        {

            let bowler = bowlerDetail[i].querySelectorAll("td");
            if(bowler.length>1)
                if(bowler[4].textContent>max_score)
                    person=bowler[0].textContent, max_score=bowler[4].textContent;
        }
        console.log(`Max wickets obtained by -----------> ${person} `);
        console.log(`Max number of wickets taken -------> ${max_score} `);
        
    }
}