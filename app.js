
async function loadData(){
    // DataService.getData().then(data => console.log(data))
    const data = await DataService.getData()
    console.log(data);
}

loadData();