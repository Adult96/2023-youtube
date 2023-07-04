import axios from 'axios';
import { YoutubeParams } from '../types/client';

export default class FakeYoutubeClient {
  async search(param: { relatedToVideo: YoutubeParams }) {
    return param.relatedToVideo
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
