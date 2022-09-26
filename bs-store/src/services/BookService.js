import axios from "axios";
import config from "../config";

class BookService {
    constructor() {
        this.baseUrl = `${process.env.REACT_APP_BASE_ENDPOINT}/books`;
    }

    async getAllBooks() {
        return await axios.get(this.baseUrl).then(resp => resp.data);
    }

    async getOneBook(id) {
        const url = `${this.baseUrl}/${id}`;
        return await axios.get(url).then(resp => resp.data);
    }

    async postOneBook(payload) {
        config.url = this.baseUrl;
        config.data = payload;
        config.method = "post";
        config.headers = {
            Authorization: localStorage.getItem("accessToken")
        }
        return await axios(config).then(resp => resp.data).catch((err) => console.log(err));
    }

    async putOneBook(id, payload) {
        const url = `${this.baseUrl}/${id}`;
        config.url = url;
        config.data = payload;
        config.method = "put";
        config.headers = {
            Authorization: localStorage.getItem("accessToken")
        }
        return await axios(config).then(resp => resp.data);
    }

    async deleteOneBook(id) {
        const url = `${this.baseUrl}/${id}`;
        return await axios.delete(url, {
            headers: {
                'Authorization': localStorage?.getItem('accessToken')
            }
        })
            .then((resp) => resp)
            .catch(err => err.response.status);
    }
}

export default BookService;