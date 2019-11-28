import { baseUrl } from "./url"

const endpoint = "people/login"

class Login {
    post(user) {
        return fetch(`${baseUrl}${endpoint}`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }            
        })
    }

}

export default Login;