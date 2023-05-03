import axiosConfig from "./Config";

class ApiService {
  constructor(resource) {
    this.http = axiosConfig;
    this.resource = resource;
  }

  getAll() {
    return this.http.get(`/${this.resource}`);
  }

  getById(id) {
    return this.http.get(`/${this.resource}/${id}`);
  }

  validateOtp = (data, token) => {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
      
    }
    return this.http.post(`/${this.resource}`,data, { headers});
  }
  create(data) {
    return this.http.post(`/${this.resource}`, data);
  }
  auth(data) {
    return this.http.post(`/${this.resource}`, data);
  }
  authorize = () => {
    return this.http.get(`/${this.resource}`);
  }

  add(formData){
    const headers = {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    };
      return this.http.post(`/${this.resource}`, formData, {headers});
  }
  update(id, data) {
    return this.http.put(`/${this.resource}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`/${this.resource}/${id}`);
  }
}

export default ApiService;
