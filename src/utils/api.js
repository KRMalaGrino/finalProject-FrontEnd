import {
  // handleResponse,
  // baseUrl,
  // baseHeader,
  FAKE_TOKEN,
  STORAGE_KEY,
} from "./apiUtils";

function getLocalArticles() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function setLocalArticles(articles) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
}

function saveArticle(article, token) {
  return new Promise((resolve, reject) => {
    if (token !== FAKE_TOKEN) return reject("Unauthorized");

    const savedArticles = getLocalArticles();

    const newArticle = {
      ...article,
      _id: article._id || `${Date.now()}`,
      isBookmarked: true,
    };

    const exists = savedArticles.some((a) => a._id === newArticle._id);
    if (!exists) savedArticles.push(newArticle);

    setLocalArticles(savedArticles);
    resolve(newArticle);
  });
}

function deleteArticle(_id, token) {
  return new Promise((resolve, reject) => {
    if (token !== FAKE_TOKEN) return reject("Unauthorized");

    const savedArticles = getLocalArticles().filter((a) => a._id !== _id);
    setLocalArticles(savedArticles);
    resolve({ message: "Deleted" });
  });
}

function bookmarkArticle() {
  return Promise.resolve();
}

function unbookmarkArticle(_id, token) {
  return deleteArticle(_id, token);
}

function getSavedArticles(token) {
  return new Promise((resolve, reject) => {
    if (token !== FAKE_TOKEN) return reject("Unauthorized");

    const savedArticles = getLocalArticles();
    resolve(savedArticles);
  });
}

// function saveArticle(article, token) {
//   return fetch(`${baseUrl}/news`, {
//     method: "POST",
//     headers: {
//       ...baseHeader,
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(article),
//   }).then(handleResponse);
// }

// function deleteArticle(_id, token) {
//   return fetch(`${baseUrl}/news/${_id}`, {
//     method: "DELETE",
//     headers: { ...baseHeader, Authorization: `Bearer ${token}` },
//   }).then(handleResponse);
// }

// function bookmarkArticle(id, token) {
//   return fetch(`${baseUrl}/news/${id}/bookmarks`, {
//     method: "PUT",
//     headers: { ...baseHeader, Authorization: `Bearer ${token}` },
//   }).then(handleResponse);
// }

// function unbookmarkArticle(id, token) {
//   return fetch(`${baseUrl}/news/${id}/bookmarks`, {
//     method: "DELETE",
//     headers: { ...baseHeader, Authorization: `Bearer ${token}` },
//   }).then(handleResponse);
// }

// function getSavedArticles(token) {
//   return fetch(`${baseUrl}/news`, {
//     headers: { ...baseHeader, Authorization: `Bearer ${token}` },
//   }).then(handleResponse);
// }

export {
  saveArticle,
  deleteArticle,
  bookmarkArticle,
  unbookmarkArticle,
  getSavedArticles,
};
