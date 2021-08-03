USE SpotifyClone;
DELIMITER $$

CREATE PROCEDURE albuns_do_artista(IN artist_name VARCHAR(45))
BEGIN
  SELECT
    ar.artist artista,
    al.album
  FROM SpotifyClone.albums al
  INNER JOIN SpotifyClone.artists ar ON al.artist_id = ar.artist_id
  WHERE artist_name = ar.artist
  ORDER BY 2;
END $$

DELIMITER ;
