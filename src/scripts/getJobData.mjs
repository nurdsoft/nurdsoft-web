import * as fs from "fs";

import fetch from "node-fetch";

fetch(
  "https://s3.us-west-2.amazonaws.com/dynamic-files-nurdsoft.co/jobData.json",
  {
    headers: {
      "Content-Type": "application/json",
    },
  }
)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    fs.writeFile("./job_data.json", JSON.stringify(json, null, 2), (err) => {
      if (err) {
        throw new Error("Something went wrong.");
      }
      console.info("JSON written to file. Contents:");
    });
  });
