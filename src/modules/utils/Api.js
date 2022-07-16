const topStoriesUrl = "https://hacker-news.firebaseio.com/v0/topstories.json";
const newStoriesUrl = " https://hacker-news.firebaseio.com/v0/newstories.json";
const itemUrl = "https://hacker-news.firebaseio.com/v0/item/";
const Api = {
    fetchTopStories: async () => {
        const response = await fetch(topStoriesUrl);
        const data = await response.json();
        return data;
    },
    fetchItem: async (id) => {
        const response = await fetch(itemUrl + id + ".json");
        const data = await response.json();
        return data;
    },
    fetchNewStories: async () => {
        const response = await fetch(newStoriesUrl);
        const data = await response.json();
        return data;
    },
    fetchSearchResults: async (query) => {
        const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
        const data = await response.json();
        return data;
    }
}
export default Api;