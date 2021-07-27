-- 5 - Exiba os cargos com sua variação salarial e suas médias máxima e mínima mensal, considerando salários máximo e minímo como anuais
SELECT
  j.JOB_TITLE "Cargo",
    ROUND(j.MAX_SALARY - j.MIN_SALARY, 2) "Variação Salarial",
    ROUND(j.MIN_SALARY/12, 2)"Média mínima mensal",
    ROUND(j.MAX_SALARY/12, 2) "Média máxima mensal"
FROM hr.jobs j
ORDER BY 2 ASC, 1 ASC;
