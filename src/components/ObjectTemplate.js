async function Adecco() {
    this.url = 'http://amund-bench-api.herokuapp.com/positions/getall';

    this.json = [];
    await fetch(this.url, {
        method : "GET",
        dataType: "JSON",
        headers: { "Accept": 'application/json',"Content-Type": "application/json; charset=utf-8"}})
        .then(res=>res.json())
        .then(res=>{
            //console.log(res);
            this.json = res;
        })
        .then(res=>{
            //console.log(this.json);
            console.log("Fetch done!")
        });
    return this.json;
}

export {Adecco};

