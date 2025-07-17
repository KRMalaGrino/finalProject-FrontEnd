import { handleResponse } from "./apiUtils";

const newsApi = ({ APIkey }) => {
  return fetch(
    `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${APIkey}`
  ).then(handleResponse);
};

export default newsApi;
