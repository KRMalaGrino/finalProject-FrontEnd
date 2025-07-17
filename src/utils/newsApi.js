import { handleResponse } from "./apiUtils";

const getNews = ({ APIkey }) => {
  return fetch(
    `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${APIkey}`
  ).then(handleResponse);
};

const filterSearchResults = () => {};

export { getNews, filterSearchResults };
