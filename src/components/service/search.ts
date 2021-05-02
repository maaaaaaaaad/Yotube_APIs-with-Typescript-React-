class Search {
  protected readonly key: string;
  protected readonly requestOptions: RequestInit;

  constructor(key: string) {
    this.key = key;
    this.requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }
  userVideo(userText: string | number): Promise<Response> {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${userText}&type=video&key=${this.key}`,
      this.requestOptions
    )
      .then((response) => response.json())
      .then((result: any) => {
        return result.items.map((item: any) => ({
          ...item,
          id: item.id.videoId,
        }));
      });
  }
}

export default Search;
