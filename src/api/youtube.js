export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#serchByKeyword(keyword) : this.#mostPopular();
  }

  async channelImageURL(id) {
    return this.apiClient
      .channels({ params: { part: 'snippet', id } })
      .then(res => res.data.items[0].snippet.thumbnails.default.url);
  }

  async relatedVideo(id) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          relatedToVideoId: id,
        },
      })
      .then(res =>
        res.data.items.map(item => ({ ...item, id: item.id.videoId }))
      );
  }

  async #serchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          q: keyword,
          type: 'video',
        },
      })
      .then(res =>
        res.data.items.map(item => ({ ...item, id: item.id.videoId }))
      );
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet',
          maxResults: 25,
          chart: 'mostPopular',
          regionCode: 'KR',
          type: 'video',
        },
      })
      .then(res => res.data.items);
  }
}

//기본 제공되는 fetch는 json변환이필요하고 백엔드 에서 404,400등 에러가 발생해도 then으로 들어오기 때문에 axios라이브러리 사용 axios는 자동으로 json으로 변환하고 에러발생하면 catch에서 에러가 잡힌다
