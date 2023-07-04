import { ReactNode, createContext, useContext } from 'react';
// import FakeYoutubeClient from '../api/fakeYoutubeClient';
import YoutubeClient from '../api/youtubeClient';
import Youtube from '../api/youtube';

//DI 디펜던시 인젝션 의존성 주입 양방향으로 의존성을 관리한다
const client = new YoutubeClient();
// const client = new FakeYoutubeClient();
const youtube = new Youtube(client);

export const YoutubeApiContext = createContext({
  youtube: youtube,
});

export function YoutubeApiProvider({ children }: { children: ReactNode }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
