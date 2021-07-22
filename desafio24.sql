-- Atualize os dados de discount da tabela order_details para 45 cuja unit_price seja maior que 10.0000 e o id seja um número entre 30 a 40. (Não é necessário utilizar o SAFE UPDATE em sua query).
UPDATE northwind.order_details SET discount=45
WHERE unit_price > 10 AND id BETWEEN 30 AND 40;
