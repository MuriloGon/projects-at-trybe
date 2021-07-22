-- Delete todos os dados em que a unit_price da tabela order_details seja maior que 10.0000.
DELETE FROM northwind.order_details WHERE unit_price > 10;
