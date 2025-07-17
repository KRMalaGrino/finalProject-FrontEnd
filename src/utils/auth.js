import { handleResponse } from "./apiUtils";
import { baseUrl, baseHeader } from "./constants";

// get token
function getToken() {
  return localStorage.getItem("jwt");
}

// sign up
function signUp(email, password, username) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: baseHeader,
    body: JSON.stringify({ email, password, username }),
  }).then(handleResponse);
}

// sign in
function signIn(email, password) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: baseHeader,
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);
}

// check token validity
function checkTokenValidity(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      ...baseHeader,
      Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
}

// edit profile
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
