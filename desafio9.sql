-- 9 - Exibe todos as pessoas funcionárias que já realizaram algum pedido, mostrando também seu total de pedidos feitos
SELECT
  CONCAT(e.FirstName, ' ', e.LastName) "Nome completo",
  ed.qty "Total de pedidos"
FROM (
  SELECT EmployeeID, count(EmployeeID) as qty
  FROM w3schools.orders
  GROUP BY EmployeeID
) ed
INNER JOIN w3schools.employees as e
  ON e.EmployeeID = ed.EmployeeID
ORDER BY 2 ASC;
