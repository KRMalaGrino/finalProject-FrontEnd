import { handleResponse, baseUrl, baseHeader } from "./apiUtils";

function getToken() {
  return localStorage.getItem("jwt");
}

function signUp(email, password, username) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: baseHeader,
    body: JSON.stringify({ email, password, username }),
  }).then(handleResponse);
}

function signIn(email, password) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: baseHeader,
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);
}

function checkTokenValidity(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      ...baseHeader,
      Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
}

function editProfile(token, username, avatar, bio) {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      ...baseHeader,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ username, avatar, bio }),
  }).then(handleResponse);
}

export { getToken, signUp, signIn, checkTokenValidity, editProfile };
