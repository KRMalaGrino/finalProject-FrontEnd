const APIkey = "9bc7acfcbd9e489da102f219d54595db";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://newsapi.org/v2/everything"
    : "http://localhost:3001";

const baseHeader = { "Content-Type": "application/json" };

const FAKE_TOKEN = "fake-jwt-token";
const STORAGE_KEY = "savedArticles";

function handleResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((data) => {
    const error = {
      status: res.status,
      message: data.message || "Something went wrong",
    };
    return Promise.reject(error);
  });
}

function formatDate(isoDate) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(isoDate).toLocaleDateString("en-US", options);
}

export {
  APIkey,
  baseUrl,
  baseHeader,
  FAKE_TOKEN,
  STORAGE_KEY,
  handleResponse,
  formatDate,
};
