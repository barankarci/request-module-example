const request = require("request");

const getData = (url) => {
    return new Promise((resolve, reject) => {
        (
            (async () => {
                request(url, (eror, response, body) => {
                    const json = JSON.parse(body);
                    resolve(json)
                })
            })()
        )
    })
}



(async () => {
    const r = await getData("https://jsonplaceholder.typicode.com/posts/1");
    const r2 = await getData("https://jsonplaceholder.typicode.com/posts/1");
    const r3 = await getData("https://jsonplaceholder.typicode.com/posts/1");
})()