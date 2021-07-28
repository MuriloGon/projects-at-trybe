-- 12 - Faça um relatório que lista todas as pessoas funcionárias que possuem o mesmo cargo
SELECT
  CONCAT(a.FIRST_NAME, " ", a.LAST_NAME) "Nome completo funcionário 1",
  a.SALARY "Salário funcionário 1",
  a.PHONE_NUMBER "Telefone funcionário 1",
  CONCAT(b.FIRST_NAME, " ", b.LAST_NAME) "Nome completo funcionário 2",
  b.SALARY "Salário funcionário 2",
  b.PHONE_NUMBER "Telefone funcionário 2"
FROM hr.employees a
CROSS JOIN hr.employees b
ON a.JOB_ID = b.JOB_ID
WHERE a.JOB_ID = b.JOB_ID AND a.PHONE_NUMBER <> b.PHONE_NUMBER
ORDER BY 1 ASC, 4 ASC;
