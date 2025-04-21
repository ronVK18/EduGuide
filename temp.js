import { getJson } from "serpapi";

// getJson({
//   engine: "google_jobs",
//   q: "software engineer remote Full Time React Nodejs",
//   hl: "en",
//   api_key: "8ac7c70d7d46d0c3dc5ce2627034f45ec29c1fdfbfc055eb200e2790e8a3b3d5"
// }, (json) => {
//   console.log(json["jobs_results"]);
// });
async function getJobs() {  
  const response = await fetch("https://serpapi.com/search.json?engine=google_jobs&q=software%20engineer%20remote%20Full%20Time%20React%20Nodejs&hl=en&api_key=8ac7c70d7d46d0c3dc5ce2627034f45ec29c1fdfbfc055eb200e2790e8a3b3d5");
  const data = await response.json();
  console.log(data["jobs_results"]);
  return data["jobs_results"];
}
getJobs()