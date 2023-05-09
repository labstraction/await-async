class DataService{


    static async getData(){
        const resp = await fetch('./fake-data.json')
        const data = await resp.json();
        return data;
    }


}