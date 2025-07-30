import { handleResponse, baseUrl, baseHeader } from "./apiUtils";

function saveArticle(article, token) {
  return fetch(`${baseUrl}/news`, {
    method: "POST",
    headers: {
      ...baseHeader,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(article),
  }).then(handleResponse);
}

function deleteArticle(_id, token) {
  return fetch(`${baseUrl}/news/${_id}`, {
    method: "DELETE",
    headers: { ...baseHeader, Authorization: `Bearer ${token}` },
  }).then(handleResponse);
}

function bookmarkArticle(id, token) {
  return fetch(`${baseUrl}/news/${id}/bookmarks`, {
    method: "PUT",
    headers: { ...baseHeader, Authorization: `Bearer ${token}` },
  }).then(handleResponse);
}

function unbookmarkArticle(id, token) {
  return fetch(`${baseUrl}/news/${id}/bookmarks`, {
    method: "DELETE",
    headers: { ...baseHeader, Authorization: `Bearer ${token}` },
  }).then(handleResponse);
}

function getSavedArticles(token) {
  return fetch(`${baseUrl}/news`, {
    headers: { ...baseHeader, Authorization: `Bearer ${token}` },
  }).then(handleResponse);
}

export {
  saveArticle,
  deleteArticle,
  bookmarkArticle,
  unbookmarkArticle,
  getSavedArticles,
};
