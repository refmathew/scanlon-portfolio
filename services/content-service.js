import axios from 'axios';

class ContentService { 
  static async FetchHomeContent() {
    const response = await axios.get('/data/home.json');
    return response.data
  }
}

export default ContentService;