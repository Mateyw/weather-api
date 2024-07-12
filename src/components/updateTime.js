import Data from '/src/components/fetchData';

class Time {
    


    async update() {
        try {
            const dataInstance = new Data();
            const data = await dataInstance.fetchData();



        } catch (error) {
            console.log('Failed to fetch data.', error);
            return;
        }
    }
}