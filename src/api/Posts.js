import { baseUrl } from "./url"

const endpoint = "posts"

class Posts {
    get() {
        return fetch(`${baseUrl}${endpoint}`)
    }

}

export default Posts;