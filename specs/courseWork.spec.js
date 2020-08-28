const superagent = require('superagent');
require('superagent-retry-delay')(superagent);
const agent = superagent.agent();


describe('Test', async function() {
    it('Get all rolls', async function(numberOfRolls = 1000, dices = 1, deviation = 5) {
        let res = await agent
            .get(`https://www.random.org/integers/?num=${numberOfRolls}&min=${dices}&max=${6*dices}&col=1&base=10&format=plain&rnd=new`)
            .then((res) => {
                return res;
            })
        //create array based on previous rolls data
        let allRolls = await res.text.split("\n")

       //remove last empty element from array
        allRolls.pop()

        let scoreOfRolls = new Map()
        allRolls.forEach(function(a){
            if (scoreOfRolls[a] !== undefined)
                ++scoreOfRolls[a];
            else
                scoreOfRolls[a] = 1;
        });

        console.log("QQQQQ", scoreOfRolls)

        //Get of ideal percentile
        let idealPercentile = 100/(dices*5+1)

        //Get percentiles for each side (value of roll) and add it into the map
        let percentileForEachSide = new Map()
        console.log("Score of rolls =", scoreOfRolls[1])
        let firstSidePercentile = (scoreOfRolls[1]*100)/numberOfRolls
        console.log("First side percentile =", firstSidePercentile)

    });

});
