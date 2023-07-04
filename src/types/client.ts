export type VideoParamType = { snippet: VideoSnippet; id: string };

export interface VideoSnippet {
  thumbnails: { medium: { url: string } };
  title: string;
  channelTitle: string;
  publishedAt: string;
}

export interface YoutubeParams {
  params: {
    id?: string;
    part?: string;
    relatedToVideo?: string;
    relatedToVideoId?: string;
    chart?: string;
    type?: string;
    q?: string;
    regionCode?: string;
    maxResults?: number;
  };
}

export interface YoutubeClientInterface {
  search(params: YoutubeParams | string): Promise<any>;
  videos(params: YoutubeParams): Promise<any>;
  channels(params: YoutubeParams): Promise<any>;
}
