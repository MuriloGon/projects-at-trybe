CREATE VIEW historico_reproducao_usuarios AS (
  SELECT
    u.user usuario,
    s.song nome
  FROM
    SpotifyClone.played_songs ps
  INNER JOIN SpotifyClone.users u ON ps.user_id = u.user_id
  INNER JOIN SpotifyClone.songs s ON ps.song_id = s.song_id
  ORDER BY 1, 2
); 
