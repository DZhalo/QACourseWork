const superagent = require('superagent');
require('superagent-retry-delay')(superagent);
const agent = superagent.agent();

describe('Test', async function() {
    it('Get all rolls', async function() {
        let res = await agent
            .get("https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new")
            .then((res) => {
                return res;
            })
        let allRolls = await res.text.split("\n")
        console.log("QQQQQ", allRolls)
    });

});
