-- 11 - Exibe todas as pessoas clientes que possuem compatriotas, mostrando a quantidade de compatriotas para cada pessoa cliente
SELECT
  a.ContactName "Nome",
  a.Country "País",
  COUNT(a.Country) - 1 "Número de compatriotas"
FROM w3schools.customers a, w3schools.customers b
WHERE a.Country = b.Country
GROUP BY a.ContactName, a.Country
HAVING (COUNT(a.Country) - 1) > 0
ORDER BY 1 ASC;
