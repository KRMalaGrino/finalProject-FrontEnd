import { handleResponse } from "./apiUtils";
import { baseUrl, baseHeader } from "./constants";

function getNews() {
  return fetch(`${baseUrl}/news`, {
    headers: baseHeader,
  }).then(handleResponse);
}

function saveArticle(article, token) {
  return fetch(`${baseUrl}/news`, {}).then(handleResponse);
}

function deleteArticle(_id, token) {
  return fetch(`${baseUrl}/news/${_id}`, {}).then(handleResponse);
}

function bookmarkArticle(id, token) {
  return fetch(`${baseUrl}/news/${id}`, {}).then(handleResponse);
}

function unbookmarkArticle(id, token) {
  return fetch(`${baseUrl}/news/${id}`, {}).then(handleResponse);
}

export {
  getNews,
  saveArticle,
  deleteArticle,
  bookmarkArticle,
  unbookmarkArticle,
};
