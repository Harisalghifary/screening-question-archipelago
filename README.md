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
