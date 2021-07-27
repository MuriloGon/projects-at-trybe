-- 16 - Crie uma função chamada buscar_quantidade_de_empregos_por_funcionario no banco de dados hr que, ao receber o email de uma pessoa funcionária, retorne a quantidade de empregos presentes em seu histórico
USE hr;
DELIMITER $$
CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(email VARCHAR(25))
RETURNS INT READS SQL DATA
BEGIN
  DECLARE output INT;
  SELECT 
    jh.QTY
  FROM
      hr.employees e
          INNER JOIN
      (SELECT 
          EMPLOYEE_ID, COUNT(EMPLOYEE_ID) QTY
      FROM
          hr.job_history
      GROUP BY EMPLOYEE_ID) jh ON jh.EMPLOYEE_ID = e.EMPLOYEE_ID
  WHERE e.EMAIL = email
  INTO output;
  RETURN output;
END $$
DELIMITER ;
