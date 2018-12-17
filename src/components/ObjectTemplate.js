let object = {
    x: 0,
    populate: function populateObject() {
        console.log("Population started!");
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res => res.json())
            .then( res =>{
                this.x = 1;

            });
        console.log("Population finished: " + this.x);
    }
};

export {object};