const message = "SHORT AND STOUT"; // Try edit me

formattedMessage = toTitleCase(message);
function toTitleCase(inputStr) {
  return inputStr
    .toLowerCase()
    .split(" ")
    .map((char) => char.at(0).toUpperCase() + char.slice(1))
    .join(" ");
}

// Update header text
document.querySelector("#header").innerHTML = formattedMessage;

// Log to console
console.log(message);

function delay(ms) {
  // add promise code here
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
delay(3000).then(() => alert("runs after 3 seconds"));

function fetchData(url, callback) {
  setTimeout(() => {
    if (!url) {
      callback("URL is required", null);
    } else {
      callback(null, `Data from ${url}`);
    }
  }, 1000);
}

// using async
function asyncFetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!url) {
        reject("URL is required");
      } else {
        resolve(`Data from ${url}`);
      }
    }, 1000);
  });
}

function processData(data, callback) {
  setTimeout(() => {
    if (!data) {
      callback("Data is required", null);
    } else {
      callback(null, data.toUpperCase());
    }
  }, 1000);
}

// using Async
function asyncProcessData(data) {
  return new Promise((resolve, reject) => {
    if (!data) {
      reject("Data is required");
    } else {
      resolve(data.toUpperCase());
    }
  });
}

// Using callbacks
fetchData("https://example.com", (err, data) => {
  if (err) {
    console.error("Fetch Error:", err);
  } else {
    processData(data, (err, processedData) => {
      if (err) {
        console.error("Process Error:", err);
      } else {
        console.log("Processed Data:", processedData);
      }
    });
  }
});

// using async
async function main() {
  try {
    const data = await asyncFetchData("https://example.com");

    try {
      const processedData = await asyncProcessData(data);
      console.log("Processed Data:", processedData);
    } catch {
      console.error("Process Error:", err);
    }
  } catch {
    console.error("Fetch Error", err);
  }
}

main();
