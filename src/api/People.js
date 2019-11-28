import { baseUrl } from "./url"

const endpoint = "people"

class People {
    get() {
        return fetch(`${baseUrl}${endpoint}`)
    }

}

export default People;