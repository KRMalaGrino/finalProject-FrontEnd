const APIkey = "9bc7acfcbd9e489da102f219d54595db";

const baseUrl = process.env.NODE_ENV === "http://localhost:3001";

const baseHeader = { "Content-Type": "application/json" };

export { APIkey, baseUrl, baseHeader };
