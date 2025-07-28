import { handleResponse, APIkey } from "./apiUtils";

function getDateNDaysAgo(days) {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString().split("T")[0];
}

const getNews = (keyword) => {
  const from = getDateNDaysAgo(7);
  const to = new Date().toISOString().split("T")[0];
  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
    keyword
  )}&apiKey=${APIkey}&from=${from}&to=${to}&pageSize=100`;

  return fetch(url).then(handleResponse);
};

const filterSearchResults = (data) => {
  // console.log(data);
  return data;
};

export { getNews, filterSearchResults };
