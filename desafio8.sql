DELIMITER $$

CREATE TRIGGER trigger_usuario_delete
BEFORE DELETE ON SpotifyClone.users
FOR EACH ROW
BEGIN
  DELETE FROM SpotifyClone.user_follows WHERE OLD.user_id = user_id;
  DELETE FROM SpotifyClone.played_songs WHERE OLD.user_id = user_id;
END $$

DELIMITER $$ ;
