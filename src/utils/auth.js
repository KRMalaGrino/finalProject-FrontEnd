import {
  // handleResponse,
  // baseUrl,
  // baseHeader,
  FAKE_TOKEN,
  STORAGE_KEY,
} from "./apiUtils";

function getToken() {
  return localStorage.getItem("jwt");
}

const signUp = (email, password, username) => {
  return new Promise((resolve) => {
    const mockUser = {
      _id: "12345",
      email,
      name: username,
    };
    localStorage.setItem("mockUser", JSON.stringify(mockUser));
    setTimeout(() => resolve(mockUser), 300);
  });
};
// function signUp({ email, password, username }) {
//   return fetch(`${baseUrl}/signup`, {
//     method: "POST",
//     headers: baseHeader,
//     body: JSON.stringify({ email, password, username }),
//   }).then(handleResponse);
// }

const signIn = (email) => {
  return new Promise((resolve, reject) => {
    const user = JSON.parse(localStorage.getItem("mockUser"));
    if (user && user.email === email) {
      const response = {
        token: FAKE_TOKEN,
        _id: user._id,
        name: user.name,
        email: user.email,
      };
      setTimeout(() => resolve(response), 300);
    } else {
      reject({ status: 401, message: "Invalid credentials" });
    }
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
    if (token === FAKE_TOKEN) {
      const user = JSON.parse(localStorage.getItem("mockUser"));
      if (user) {
        resolve(user);
      } else {
        reject({ status: 403, message: "User not found" });
      }
    } else {
      reject({ status: 403, message: "Invalid token" });
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

// function editProfile({ token, username, avatar, bio }) {
//   return fetch(`${baseUrl}/users/me`, {
//     method: "PATCH",
//     headers: {
//       ...baseHeader,
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify({ username, avatar, bio }),
//   }).then(handleResponse);
// }

export { getToken, signUp, signIn, checkTokenValidity };
