CREATE VIEW perfil_artistas AS (
  SELECT
    ar.artist artista,
    album,
    sg.seguidores seguidores
  FROM SpotifyClone.albums al
  INNER JOIN SpotifyClone.artists ar ON ar.artist_id = al.artist_id
  INNER JOIN ( 
      SELECT artist_id, COUNT(user_id) seguidores
      FROM SpotifyClone.user_follows
      GROUP BY artist_id
    ) sg ON sg.artist_id = ar.artist_id
  ORDER BY 3 DESC, 1, 2
);
