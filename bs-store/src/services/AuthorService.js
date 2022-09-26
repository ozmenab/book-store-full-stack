import axios from "axios";
import config from "../config";

class AuthorService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASE_ENDPOINT}/authors`;
  }

  async getAllAuthors() {
    return await axios
      .get(this.baseUrl)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async getOneAuthor(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios
      .get(url)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async postOneAuthor(payload) {
    config.url = this.baseUrl;
    config.data = payload;
    config.method = "post";
    config.headers = {
      Authorization: localStorage.getItem("accessToken")
    }
    return await axios(config)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async putOneAuthor(id, author) {
    const url = `${this.baseUrl}/${id}`;
    config.url = url;
    config.data = author;
    config.method = "put";
    config.headers = {
      Authorization: localStorage.getItem("accessToken")
    }
    return await axios(config)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async deleteOneAuthor(id) {
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

export default AuthorService;
