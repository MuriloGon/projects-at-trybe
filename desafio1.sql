/* 1 - Exiba os países e indicando se cada um deles se encontra ou não na região formada pela Europa */
SELECT
	c.COUNTRY_NAME "País",
    IF(
		r.REGION_NAME IN ("Europe"),
        "incluído",
        "não incluído"
        ) "Status Inclusão"
FROM hr.countries c
INNER JOIN hr.regions r
	ON r.REGION_ID = c.REGION_ID
ORDER BY c.COUNTRY_NAME ASC;
