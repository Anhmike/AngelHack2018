// const apiHost = 'https://bakesaleforgood.com';
const apiHost = 'https://api.coord.co/v1/bike/location?latitude=40.742868&longitude=-73.989186&radius_km=0.25&access_key=A9IFHxNY78oarrp_kSF1HEzNhUzRgqPcVAL1D8v75Ac';

export default {
    async fetchInitialDeals() {
        try {
            // const response = await fetch(apiHost + '/api/deals');
            const response = await fetch(apiHost);
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    },
    async fetchDealDetail(dealId) {
        try {
            // const response = await fetch(apiHost + '/api/deals/' + dealId);
            const response = await fetch(apiHost);
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    },
    async fetchDealSearchResults(searchTerm) {
        try {
            // const response = await fetch(apiHost + '/api/deals?searchTerm=' + searchTerm);
            const response = await fetch(apiHost);
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    }
};