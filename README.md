# screening-question-archipelago

## Database Question

1.⁠ ⁠Write a SQL query that shows me how many customers there are from Germany. \
Answer:

```sql
SELECT COUNT(*) as TotalCustomers, Country FROM Customers WHERE Country='Germany' Group by Country;
```

2.⁠ ⁠Write a query that shows me a list of the countries that have the most customers; from most
customers to least customers. Don’t show countries that have less than 5 customers. \
Answer:

```sql
SELECT COUNT(*) AS TotalCustomers, Country
FROM Customers
GROUP BY Country
HAVING COUNT(*) >= 5
ORDER BY COUNT(*) DESC;
```

3.⁠ ⁠Reverse Engineer These Results (tell me the query that we need to write to get these results): \
Answer:

```sql
SELECT
c.CustomerName,
COUNT(o.OrderID) AS OrderCount,
FORMAT(MIN(o.OrderDate), 'yyyy-MM-dd') AS FirstOrder,
FORMAT(MAX(o.OrderDate), 'yyyy-MM-dd') AS LastOrder
FROM
Customers c
INNER JOIN
Orders o
ON
c.CustomerID = o.CustomerID
GROUP BY
c.CustomerName
HAVING COUNT(o.OrderID) >= 5
ORDER BY
MAX(o.OrderDate) DESC;
```

## JS Question

1. Make a javascript or typescript function that converts any string to Title Case.

```js
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
```

2. Fix this code, using promises

```js
function delay(ms) {
  // add promise code here
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
delay(3000).then(() => alert("runs after 3 seconds"));
```

3. Rewrite using Async/Await:

```js
function fetchData(url) {
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

function processData(data) {
  return new Promise((resolve, reject) => {
    if (!data) {
      reject("Data is required");
    } else {
      resolve(data.toUpperCase());
    }
  });
}

async function main() {
  try {
    const data = await fetchData("https://example.com");

    try {
      const processedData = await processData(data);
      console.log("Processed Data:", processedData);
    } catch {
      console.error("Process Error:", err);
    }
  } catch {
    console.error("Fetch Error", err);
  }
}

main();
```
