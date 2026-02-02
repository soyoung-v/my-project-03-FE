import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080'

class HttpService {
  #url = '/memo';

  async save(params){
    const res = await axios.post(this.#url,params);
    return res.data;
  }

  async findAll(){
    const res = await axios.get(this.#url);
    return res.data;
  }

  async findById(id){
    const res = await axios.get(`${this.#url}/${id}`);
    return res.data;
  }

  async update(params){
    const res = await axios.put(this.#url,params);
    return res.data;
  }

  async delete(params){
    const res = await axios.delete(this.#url,{params});
    return res.data;
  }

}
export default new HttpService();