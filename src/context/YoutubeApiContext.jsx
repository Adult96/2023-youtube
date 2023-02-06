import { createContext, useContext } from 'react';
// import FakeYoutubeClient from '../api/fakeYoutubeClient';
import YoutubeClient from '../api/youtubeClient';
import Youtube from '../api/youtube';

export const YoutubeApiContext = createContext();

//DI 디펜던시 인젝션 의존성 주입 양방향으로 의존성을 관리한다
const client = new YoutubeClient();
// const client = new FakeYoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
