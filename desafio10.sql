-- 10 - Exibe todos os produtos que já foram pedidos, que possuem uma média de quantidade nos pedidos registrados acima de 20.00
SELECT
  p.ProductName as "Produto",
  ROUND(MIN(od.Quantity), 2) "Mínima", 
  ROUND(MAX(od.Quantity), 2) "Máxima",
  ROUND(AVG(od.Quantity), 2) "Média"
FROM w3schools.order_details od
INNER JOIN w3schools.products p
  ON p.ProductID = od.ProductID
GROUP BY od.ProductID
HAVING AVG(od.Quantity) > 20
ORDER BY 4 ASC, 1 ASC;
