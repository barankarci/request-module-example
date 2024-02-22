const request = require("request");

const getData = (url) => {
    return new Promise((resolve, reject) => {
        (async () => {
            request(url, (error, response, body) => {
                const jsonData = JSON.parse(body);
                resolve(jsonData)

            })
        })()
    })
}

getData(`https://jsonplaceholder.typicode.com/posts`).then(result => {
    console.log({result:result})
    getData(`https://jsonplaceholder.typicode.com/posts/1`).then(result2 => {
        console.log({result2:result2})
    });


});
