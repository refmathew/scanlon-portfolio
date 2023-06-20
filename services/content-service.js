import axios from "axios";

class ContentService {
	static async FetchHomeContent() {
		const response = await axios.get("/data/pages/home.json");
		return response.data;
	}
	static async FetchAboutContent() {
		const response = await axios.get("/data/pages/about.json");
		return response.data;
	}
}

export default ContentService;
