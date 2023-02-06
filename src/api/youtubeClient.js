import axios from 'axios';

export default class YoutubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3/',
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(params) {
    return this.httpClient.get('search', params);
  }

  async videos(params) {
    return this.httpClient.get('videos', params);
  }

  async channels(params) {
    return this.httpClient.get('channels', params);
  }
}

//기본 제공되는 fetch는 json변환이필요하고 백엔드 에서 404,400등 에러가 발생해도 then으로 들어오기 때문에 axios라이브러리 사용 axios는 자동으로 json으로 변환하고 에러발생하면 catch에서 에러가 잡힌다
