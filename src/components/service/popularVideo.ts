class PopularVideos {
  protected readonly key: string;
  protected readonly requestOptions: RequestInit;

  constructor(key: string) {
    this.key = key;
    this.requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }
  mostVideos(): Promise<any> {
    return fetch(
      ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=${this.key}`,
      this.requestOptions
    )
      .then((response) => response.json())
      .then((result: any) => {
        return result.items;
      });
  }
}

export default PopularVideos;
