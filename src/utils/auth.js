import { handleResponse, baseUrl, baseHeader } from "./apiUtils";

function getToken() {
  return localStorage.getItem("jwt");
}

const signUp = (email, password, username) => {
  return new Promise((resolve) => {
    console.log(email, password, username);
    setTimeout(() => {
      resolve({ email, name: username, _id: "12345" });
    }, 500);
  });
};
// function signUp({ email, password, username }) {
//   return fetch(`${baseUrl}/signup`, {
//     method: "POST",
//     headers: baseHeader,
//     body: JSON.stringify({ email, password, username }),
//   }).then(handleResponse);
// }

const signIn = (email, password) => {
  return new Promise((resolve) => {
    console.log(email, password);
    setTimeout(() => {
      resolve({
        token: "fake-jwt-token",
        email,
        name: "MockUser",
        _id: "12345",
      });
    }, 500);
  });
};
// function signIn(email, password) {
//   return fetch(`${baseUrl}/signin`, {
//     method: "POST",
//     headers: baseHeader,
//     body: JSON.stringify({ email, password }),
//   }).then(handleResponse);
// }

const checkTokenValidity = (token) => {
  return new Promise((resolve, reject) => {
    if (token === "fake-jwt-token") {
      resolve({ _id: "12345", name: "MockUser", email: "mock@example.com" });
    } else {
      reject(new Error("Invalid token"));
    }
  });
};
// function checkTokenValidity(token) {
//   return fetch(`${baseUrl}/users/me`, {
//     method: "GET",
//     headers: {
//       ...baseHeader,
//       Authorization: `Bearer ${token}`,
//     },
//   }).then(handleResponse);
// }

function editProfile({ token, username, avatar, bio }) {
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
