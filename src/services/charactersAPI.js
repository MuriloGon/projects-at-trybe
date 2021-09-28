import axios from 'axios';

const DEFAULT_TIMEOUT = 30000;
class CharactersService {
  constructor({ url = 'http://localhost:3000', timeout = DEFAULT_TIMEOUT }) {
    this.http = axios.create({
      baseURL: url,
      timeout,
    });
  }

  async getCharacters(name, page, size) {
    const params = {
      page,
      size,
      name,
    };

    return this.http.get('/', { params });
  }
}

export default CharactersService;
