import People from "./People"
import Posts from "./Posts"
import Login from "./LoginApi";

class MyApi {
     constructor() {
        this.people = new People();
        this.posts = new Posts();
        this.login = new Login();
     }
}

const Api = new MyApi();
export default Api;
