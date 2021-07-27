-- 13 - Exibe todos produtos que já tiveram um pedido associado requerindo uma quantidade desse produto maior que 80
SELECT
	p.ProductName "Produto",
    p.Price "Preço"
FROM w3schools.products p
WHERE p.ProductID IN (
	SELECT ProductID
	FROM w3schools.order_details
	WHERE Quantity > 80
)
ORDER BY 1 ASC;
