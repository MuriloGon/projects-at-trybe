DELIMITER $$

CREATE FUNCTION quantidade_musicas_no_historico(id INT)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE OUTPUT INT;
    SELECT COUNT(ps.song_id) INTO OUTPUT
    FROM played_songs ps
    WHERE ps.user_id = id
    GROUP BY ps.user_id;
    RETURN OUTPUT;
END $$

DELIMITER ;
