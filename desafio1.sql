DROP DATABASE IF EXISTS SpotifyClone;

CREATE DATABASE SpotifyClone;
USE SpotifyClone;

CREATE TABLE plans(
  plan_id INT AUTO_INCREMENT,
  plan VARCHAR(45) NOT NULL,
  price DECIMAL(5,2) NOT NULL,
  PRIMARY KEY(plan_id)
) ENGINE = InnoDB;

CREATE TABLE users(
  user_id INT AUTO_INCREMENT,
  user VARCHAR(45) NOT NULL,
  age INT NOT NULL,
  plan_id INT NOT NULL,
  PRIMARY KEY (user_id),
  FOREIGN KEY(plan_id) REFERENCES plans(plan_id)
) ENGINE = InnoDB;

CREATE TABLE artists(
  artist_id INT AUTO_INCREMENT,
  artist VARCHAR(45) NOT NULL,
  PRIMARY KEY(artist_id)
) ENGINE = InnoDB;

CREATE TABLE albums(
  album_id INT AUTO_INCREMENT,
  album VARCHAR(45) NOT NULL,
  artist_id INT NOT NULL,
  PRIMARY KEY(album_id),
  FOREIGN KEY(artist_id) REFERENCES artists(artist_id)
) ENGINE = InnoDB;

CREATE TABLE songs(
  song_id INT AUTO_INCREMENT,
  album_id INT NOT NULL,
  song VARCHAR(45) NOT NULL,
  PRIMARY KEY(song_id),
  FOREIGN KEY(album_id) REFERENCES albums(album_id)
) ENGINE = InnoDB;

CREATE TABLE played_songs(
  user_id INT NOT NULL,
  song_id INT NOT NULL,
  PRIMARY KEY(user_id, song_id),
  FOREIGN KEY(user_id) REFERENCES users(user_id),
  FOREIGN KEY(song_id) REFERENCES songs(song_id)
) ENGINE = InnoDB;

CREATE TABLE user_follows(
  user_id INT NOT NULL,
  artist_id INT NOT NULL,
  PRIMARY KEY(user_id, artist_id), 
  FOREIGN KEY(user_id) REFERENCES users(user_id),
  FOREIGN KEY(artist_id) REFERENCES artists(artist_id)
) ENGINE = InnoDB;


INSERT INTO plans(plan, price) 
VALUES('gratuito', 0), ("familiar", 7.99), ("universitário", 5.99);

INSERT INTO users(user, age, plan_id)
VALUES ("Thati", 23, 1), ("Cintia", 35, 2), ("Bill", 20, 3), ("Roger", 45, 1);

INSERT INTO artists(artist)
VALUES ("Walter Phoenix"), ("Peter Strong"), ("Lance Day"), ("Freedie Shannon");

INSERT INTO albums(album, artist_id)
VALUES ("Envious", 1), ("Exuberant", 1), ("Hallowed Steam", 2),
("Incandescent", 3), ("Temporary Culture", 4);

INSERT INTO songs(album_id, song)
VALUES 
(1, "Soul For Us"), (1, "Reflections Of Magic"), (1, "Dance With Her Own"),
(2, "Troubles Of My Inner Fire"), (2, "Time Fireworks"),
(3, "Magic Circus"), (3, "Honey, So Do I"), (3, "Sweetie, Let's Go Wild"), (3, "She Knows"),
(4, "Fantasy For Me"), (4, "Celebration Of More"), (4, "Rock His Everything"), (4, "Home Forever"), (4, "Diamond Power"), (4, "Honey, Let's Be Silly"),
(5, "Thang Of Thunder"), (5, "Words Of Her Life"), (5, "Without My Streets");

INSERT INTO played_songs (user_id, song_id)
VALUES
  (1, 1), (1, 6), (1, 14), (1, 16),
  (2, 13), (2, 17), (2, 2), (2, 15),
  (3, 4), (3, 16), (3, 6),
  (4, 3), (4, 18), (4, 11);

INSERT INTO user_follows(user_id, artist_id)
VALUES
  (1, 1), (1, 4), (1, 3),
  (2, 1), (2, 3),
  (3, 2), (3, 1),
  (4, 4);
