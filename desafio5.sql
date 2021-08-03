CREATE VIEW top_2_hits_do_momento as (
  SELECT
    s.song cancao,
    COUNT(user_id) reproducoes
  FROM SpotifyClone.played_songs ps
  INNER JOIN SpotifyClone.songs s ON s.song_id = ps.song_id
  GROUP BY ps.song_id
  ORDER BY 2 DESC, 1
  LIMIT 2
);
