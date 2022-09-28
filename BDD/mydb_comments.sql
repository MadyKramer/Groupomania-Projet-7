-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `commentcontent` longtext NOT NULL,
  `commentdate` datetime NOT NULL,
  `commentimg` varchar(255) DEFAULT NULL,
  `users_id` int NOT NULL,
  `post_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_comments_users1_idx` (`users_id`),
  KEY `fk_comments_post1_idx` (`post_id`),
  CONSTRAINT `fk_comments_post1` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_comments_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (3,'Super! Paraît-il que c\'est même pas toi qui l\'a fait !','2022-09-25 18:42:41',NULL,5,3),(4,'Tu as raison Perrine! Mais je suis quand même le boss 8)','2022-09-25 18:43:47',NULL,6,3),(6,'C\'est chouette! C\'est quoi? ','2022-09-25 21:49:01',NULL,6,5),(7,'Ce sont des plantes carnivores, non? ','2022-09-26 09:30:31',NULL,5,5),(8,'(Enfin je crois)','2022-09-26 10:22:52',NULL,5,5),(9,'Ah je connais bien Rammstein, j\'écoute beaucoup Tattoo et Auslander! :D','2022-09-26 10:50:55',NULL,7,6),(10,'Oui je suis allée en vacances à Collioure et j\'ai reservé ici, tu peux y aller les yeux fermés Justin! ','2022-09-26 10:51:31',NULL,7,4),(11,'Black Bomb A! ','2022-09-26 11:05:13',NULL,8,6),(12,'C\'est chouette ! Bonne idée!','2022-09-26 11:05:38',NULL,8,3),(15,'Oh j\'adore!','2022-09-26 21:06:11',NULL,3,5),(16,'new wave!','2022-09-26 21:07:53',NULL,3,6),(17,'Ils sont trop mimi, je craque! ','2022-09-26 21:14:13',NULL,11,13),(18,'Rock\'n roll here! Yihaaaa','2022-09-26 21:15:12',NULL,11,6),(19,'J\'adore les chats','2022-09-26 21:15:35',NULL,11,3);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-27  9:49:28
