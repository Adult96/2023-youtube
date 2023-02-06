import axios from 'axios';

export default class FakeYoutubeClient {
  async search({ params }) {
    return params.relatedToVideo
      ? axios.get('/data/related.json')
      : axios.get('/data/search.json');
  }

  async videos() {
    return axios.get('/data/popular.json');
  }

  async channels() {
    return axios.get('/data/detail.json');
  }
}
