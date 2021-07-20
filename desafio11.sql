--  Exiba os dados de notes da tabela purchase_orders em que seu valor de "Purchase generated based on Order" está entre 30 e 39, incluindo tanto o valor de 30 quanto de 39.
SELECT notes FROM northwind.purchase_orders
WHERE notes IS NOT NULL LIMIT 5;