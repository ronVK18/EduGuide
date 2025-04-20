import { getJson } from "serpapi";

getJson({
  engine: "google_jobs",
  q: "software engineer remote Full Time React Nodejs",
  hl: "en",
  api_key: "8ac7c70d7d46d0c3dc5ce2627034f45ec29c1fdfbfc055eb200e2790e8a3b3d5"
}, (json) => {
  console.log(json["jobs_results"]);
});