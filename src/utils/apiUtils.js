const APIkey = "9bc7acfcbd9e489da102f219d54595db";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "http://localhost:3001"
    : "https://newsapi.org/v2/everything";

const baseHeader = { "Content-Type": "application/json" };

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

export { handleResponse, APIkey, baseUrl, baseHeader };
