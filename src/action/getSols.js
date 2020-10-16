import axios from 'axios'

class getSols {
    prevSol = 0

    async getItems () {
        const response = await this.request();
        console.log(`Sol#${response.sol}: ${response.min_temp}..${response.max_temp}`);
        this.prevSol = response.sol - 1;

        for (let i = 1; i < 5; ++i) {
            const nextResp = await this.request(this.prevSol);
            console.log(`Sol#${nextResp.sol}: ${nextResp.min_temp}..${nextResp.max_temp}`);
            this.prevSol = nextResp.sol - 1;
        }
    }

    request = (solNumber = '') => {
        return axios.get(`https://api.maas2.apollorion.com/${solNumber}`)
            .then(response => response.data)
    };
}

export default new getSols();