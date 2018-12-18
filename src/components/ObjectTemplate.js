async function MyObject() {
    this.url_1 = 'http://amund-bench-api.herokuapp.com/positions/getall';
    this.url_2 = 'http://amund-bench-api.herokuapp.com/positions/countbyfieldandcompanyanddate?companyName=Adecco&field=IT&searchDate=2018-05-05' ;

    this.results = await Promise.all([
        fetch(this.url_1, {
            method : "GET",
            dataType: "JSON",
            headers: { "Accept": 'application/json',"Content-Type": "application/json; charset=utf-8"}}),
        fetch(this.url_2, {
            method : "GET",
            dataType: "JSON",
            headers: { "Accept": 'application/json',"Content-Type": "application/json; charset=utf-8"}})

    ]);

    this.json1 = await this.results[0].json();
    this.json2 = await this.results[1].json();

    this.jsonArray = [this.json1,this.json2];

    return this.jsonArray;
}

export {MyObject};

