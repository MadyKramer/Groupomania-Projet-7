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
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` longtext NOT NULL,
  `postdate` datetime NOT NULL,
  `postimg` varchar(255) DEFAULT NULL,
  `users_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_post_users_idx` (`users_id`),
  CONSTRAINT `fk_post_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'J\'en ai marre','2022-08-03 15:53:14',NULL,9),(3,'Vivement ce week-end!','2022-08-04 15:54:53',NULL,10),(6,'Le p6, c\'était cool en fait','2022-08-04 16:33:39',NULL,10),(7,'En promo!','2022-08-04 16:45:21',NULL,10),(10,'Pourquoi multer veut pas de mon image :(','2022-08-05 10:44:53',NULL,10),(11,'-_-','2022-08-05 10:54:09',NULL,10),(12,'KOUKOU','2022-08-05 15:02:02',NULL,10),(13,'Je m\'appelle Teuse','2022-08-07 12:20:40',NULL,10),(14,'\"Prout\"','2022-08-07 12:22:44','./images/ramm1659867764538.png',10),(15,'Vivement l\'année prochaine! ','2022-09-06 13:02:51','./images/bern1662462171493.jpg',10),(16,'Faites attention! ','2022-09-11 15:21:44','./images/305569003_10161918937334128_6405563794320126992_n1662902504547.jpg',10),(17,'','2022-09-12 09:13:16','./images/w97i48zywuk911662966796304.webp',10),(19,'J\'ai acheté des mûres chez Géraldine ce matin ','2022-09-12 13:48:45',NULL,10),(21,'Je viens de réussir à envoyer un post wtf ','2022-09-12 13:49:31',NULL,10),(27,'Qui a regardé Arcane? ','2022-09-14 13:12:22','./images/template-images-jdg-pptx28-11663153942424.jpg',10),(28,'Qui a regardé Arcane? ','2022-09-14 13:30:40','./images/26811291663155040251.png',10),(29,'Qui a regardé Arcane? ','2022-09-14 13:32:03','./images/26811291663155123735.png',10),(30,'Qui a regardé Arcane? ','2022-09-14 13:35:36','./images/26811291663155336162.png',10),(31,'Bonjour Toto','2022-09-14 13:38:58','./images/26811291663155537909.png',10),(32,'Bonjour !','2022-09-14 13:39:26',NULL,10),(33,'Bonjour !','2022-09-14 13:39:26',NULL,10),(34,'Salut c\'est moi','2022-09-14 13:40:22',NULL,10),(35,'Quoi de 9','2022-09-14 13:48:45',NULL,10),(36,'Quoi de 9','2022-09-14 13:48:45',NULL,10),(37,'pppppppp','2022-09-14 13:50:09',NULL,10);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-14 15:16:18
