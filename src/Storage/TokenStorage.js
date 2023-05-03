class TokenStorage {
  constructor(storage) {
    this.storage = storage;
  }

  getToken() {
    return this.storage.getItem("access_token");
  }

  setToken(token) {
    this.storage.setItem("access_token", token);
  }

  clearToken() {
    this.storage.removeItem("access_token");
  }
}

const tokenStorage = new TokenStorage(localStorage);

export default tokenStorage;
