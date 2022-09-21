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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lastname` varchar(45) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `workstation` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `email` varchar(150) NOT NULL,
  `hasright` tinyint DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'DUJARDIN','Jean','Développeur','AZERTY',NULL,'DullahanToutNu@horreur.com',1),(6,'Martin','Jean','poissonnier','passionsaumon',NULL,'jadorelethon@yahoo.fr',0),(7,'LaTruite','ZANG','poissonier','$2b$10$CKQIHDzUz1LQRBLOg7rwXOZxfcRMZR/Fl3xvLkRrOfTMGjdCX5G.2',NULL,'ZangLaTruite@hotmail.fr',0),(8,'NaiMarre','Jean','Secrétaire','$2b$10$4TbYHE1dkWMLR.imegYFeuKFAndLtPj1WGU2emdMKPIjdGVyqumpm',NULL,'random@live.fr',0),(9,'DeLaCour','Fleur','Gestionnaire de paie','$2b$10$XeDI4I0GmHsHDViFgDh2xOAM8HTvGyQDggyk/69H7E9mKJUOcVFqe',NULL,'Kikoolol52@hotmail.fr',0),(10,'Girardin','Severine','assistante','$2b$10$WC8RJA5dwKifORQNP9OKruLBJ2oF/WxgLyvmQd7ogS3.CPv/MR//.',NULL,'test@mail.fr',0),(11,'Koukou','Jean Pierre','Poissonnier','$2b$10$mn5.EU9htusCwUvwMOPSP.Clx6/tEfxlHllx1BFqQMCHBRaD9uIJu',NULL,'test2@mail.fr',0),(12,'Dauphin','Jean ','Caissier','$2b$10$XWc3IRBjXvMubqppDwqjXeMP19Jifdj2gHSxIdBbmG.TYBmTKpiQK',NULL,'test3@mail.fr',0),(13,'Jardin','Hervé','Conseiller','$2b$10$9Po2398CmywJWFJmnm0UsOdvX.uezmPM8/2ie5/cwxAxWmEQzEJju',NULL,'test4@mail.fr',0),(14,'Marci','Julie','Conseillere','$2b$10$mrS8jKaLpPPr9oy5DVQzQOPfFc9dEcf.OOSITvQ19ATg7ttm7rmXi',NULL,'tes5t@mail.fr',0),(15,'Gentil','Karine','Directrice','$2b$10$bv8sbACejI2LG5hBXDMnYe186CT4J1KpW5ckKdiWVvA2ofkBeyOrC',NULL,'te8st@mail.fr',0),(16,'Chantier','Gabriel','pêcheur','$2b$10$5kNmkdeVxFkkb6KBwPpcPuIeyGkIPa5LX.oLjGytOAqcyJiKQ1UBS',NULL,'tes2t@mail.fr',0),(23,'Vivia','Malik','Secrétaire','$2b$10$lW8olpgayUOQhzR4ftxXQ.Ne6ABnF7kcfsLuv8Y.3LGW70P2ZeCyO',NULL,'tes52t@mail.fr',0),(24,'Mercier','Marie','Jesaispas','$2b$10$c3uaU8.QIg.8Cpz4nFovfueoygePqAN8quPhOnHx5aSbTR0RUsW1m',NULL,'tes4t@mail.fr',0),(26,'Gonaud','Olivier','Maire','$2b$10$r4q7WuCthLCc.rGsN20.ru4UZPFoddp9jpYhhvle6nc8spNsxcSLq',NULL,'tes526t@mail.fr',0),(27,'Marceau','Dominique','Caissier','$2b$10$rvf7XoqjC7ovFDqZ6CBAdOj9wZVLrzn5bmGMFsgbTSEE.7Zlw.oFy',NULL,'te9999st@mail.fr',0),(28,'Dupont','Georges','Comptable','$2b$10$oV8lptqTuLZjGlnTl3VbUeqAUCfPO8dGRCN5hSNBS9K2PcxXsiF8m',NULL,'Nonodu41@free.fr',0),(29,'Jambon','Norbert','Charcutier','$2b$10$bXyrc1cILdhx1shA5jsgCO1yb.1GuhrCZJ62LJp7XYSjG2poJgVMO',NULL,'tes285t@mail.fr',0),(31,'Jambon','Melissa','Hôtesse d\'accueil','$2b$10$kZJjDt39UTMYjj/9j7PIpevX3wZuV8vbFIRVRlNzknEBoZ7miAqyC',NULL,'tes2865t@mail.fr',0),(32,'DuGateau','Valentin','Chômage','$2b$10$3kL/JnhngRfpbIs5WOSLluLjx.tmFEGGqfZSHBvnbLOzC/GukJOzi',NULL,'Valentin@mail.fr',0),(33,'Grange','Joséphine','Caissière','$2b$10$VcACJlcfxnAEqmEzd6s5tuDfhxyJxTdu76qH0Hz5oFy7E3yj2QvNS',NULL,'blabla@mail.fe',0),(34,'Lambert','Marine','Caissière','$2b$10$eEecTIanxcdVC7F3nkqEiuLzWXukY9/rp9qpTkP7xylqEUR7GukjS',NULL,'blabl52a4@mail.fe',0),(35,'Cmoi','Michel','osef','$2b$10$ChS/Om2mtxzy.WQLwbYNZeN5KmN7SB1WIXUKqkJFp6bQ51tMibzu2',NULL,'te75st@mail.fr',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
