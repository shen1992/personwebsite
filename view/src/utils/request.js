/**
 * Created by shen on 2017/2/4.
 */
function Fetch(url, options) {
    return fetch(url, {credentials: 'include', ...options})
        .then((res) => res.json())
        .then(json => json)
        .catch((e) => console.log(e))

}

function GET(url, data = {}) {
    this.send = () => {

        return Fetch(url, {method: 'GET', ...data})
            .then((res) => res)
            .catch((err) => {throw err})
    }
}

function POST(url, data = {}, option = {}) {
    this.send = () => {
        return Fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: typeof data === 'object' ? JSON.stringify(data) : data,
            ...option
        })
            .then(res => res)
            .catch((err) => {throw err})
    }
}

export {
    GET,
    POST
}

