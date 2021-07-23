-- 19 - Crie uma função chamada exibir_quantidade_pessoas_contratadas_por_mes_e_ano no banco de dados hr que, dados o mês e ano como parâmetros nessa ordem, retorna a quantidade de pessoas funcionárias que foram contratadas nesse mês e ano
USE hr;
DELIMITER $$
CREATE FUNCTION exibir_quantidade_pessoas_contratadas_por_mes_e_ano(_m INT, _y INT)
RETURNS INT READS SQL DATA
BEGIN
  DECLARE output INT;
  SELECT COUNT(*) QTY INTO output
  FROM hr.employees e
  WHERE YEAR(e.HIRE_DATE) = _y AND MONTH(e.HIRE_DATE) = _m;
  RETURN output;
END $$
DELIMITER ;
