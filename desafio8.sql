-- 8 - Exibe todas as pessoas consumidoras cujos pedidos já foram enviados pelas empresas "Speedy Express" ou "United Package"
SELECT
  cs.ContactName "Nome de contato",
  sh.ShipperName "Empresa que fez o envio",
  o.OrderDate "Data do pedido"
FROM w3schools.orders o
INNER JOIN w3schools.customers cs ON cs.CustomerID = o.CustomerID
INNER JOIN w3schools.shippers sh ON sh.ShipperID = o.ShipperID
WHERE sh.ShipperName IN ("Speedy Express", "United Package")
ORDER BY 1 ASC, 2 ASC, 3 ASC;
