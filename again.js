const request = require("request")

const getData = (url) => {
    return new Promise((resolve, refect) => {
        (async => {
            request(url, (eror, response, body) => {
                const json = JSON.parse(body)
                resolve(json)
            
            })
        })()
    })
}

(async () => {
    const result = await getData("https://jsonplaceholder.typicode.com/posts/1")
})()