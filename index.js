const request = require("request");
request(`https://jsonplaceholder.typicode.com/posts/1`, (error, response, body) => {
    // console.log(error);
    console.log(typeof body);
    const json = JSON.parse(body);
    console.log(typeof json)
    console.log(json.userId);
    
})