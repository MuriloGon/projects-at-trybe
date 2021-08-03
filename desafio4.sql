CREATE VIEW top_3_artistas as (
  SELECT
    a.artist artista,
    af.seguidores
  FROM (
    SELECT
      artist_id,
      COUNT(artist_id) seguidores
    FROM SpotifyClone.user_follows
    GROUP BY artist_id
  ) af
  INNER JOIN SpotifyClone.artists a ON a.artist_id = af.artist_id
  ORDER BY 2 DESC, 1
  LIMIT 3
);
