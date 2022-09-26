import axios from "axios";
import config from "../config";

class CategoryService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASE_ENDPOINT}/categories`;
  }

  async getAllCategories() {
    return await axios.get(this.baseUrl).then((resp) => resp.data);
  }

  async getOneCategory(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }

  async deleteOneCategory(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url, {
      headers: {
        'Authorization': localStorage?.getItem('accessToken')
      }
    })
      .then((resp) => resp)
      .catch(err => err.response.status);
  }

  async postOneCategory(category) {
    config.url = this.baseUrl;
    config.data = category;
    config.method = "post";
    config.headers = {
      Authorization: localStorage.getItem("accessToken")
    }
    return await axios(config).then((resp) => resp.data);
  }

  async putOneCategory(id, category) {
    const url = `${this.baseUrl}/${id}`;
    config.url = url;
    config.data = category;
    config.method = "put";
    config.headers = {
      Authorization: localStorage.getItem("accessToken")
    }
    return await axios(config).then(resp => resp.data);
  }


}

export default CategoryService;
