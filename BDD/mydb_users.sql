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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'LaFleur','Jean','PDG','$2b$10$N5gy/WSZLhnL4BGYzHERKeJfiFf3dKa68TFraorIAz7AHS/qDtDuq',NULL,'jeanfleur5@groupomania.fr',0),(2,'Bernard','Justin','Caissier ','$2b$10$cPXmQFUWV94qML8qWEV0ie7GFFDDtr7Scfx5FCSQ/JdKQ4q7g0GW2',NULL,'JustinBernard@groupomania.fr',0),(3,'DeLaCour','Martine','Boulangère','$2b$10$0Pz3AN/ynfZZVvZr3pmcgeumXfOE0OPJyMA1Its.cp0UoCJCWNsW6','images/commerciale1664117557901.webp','MartineDeLaCour@groupomania.fr',0),(4,'Michel','Amandine','Assistante de direction','$2b$10$h7NVV4ocLe0Yfd7FMl8RzeA0gWfIK9OHn7rjjQ4QGYw4L2ZCSNqMW',NULL,'amandinemichel@groupomania.fr',0),(5,'Briotin','Perrine','Secrétaire','$2b$10$yrC9.EA0xNh5S7ZQPwpQHebZlyQ2sFPQbut7C2mjN0Xk2sGLZokle',NULL,'perrinebriotin@groupomania.fr',0),(6,'Page','Till','Développeur','$2b$10$9SrcDQn/7.NhCL97RKAGxuJ7j.wz.SNojNTuDmU2M8Ol/rqLLHfO6',NULL,'tillpage@groupomania.fr',1),(7,'Kieffer','Jeanne','Responsable de rayon','$2b$10$qIzIG7QfP.my3/kbPsPum.dYF7P5iU2mF99M8h2QcWH0hyBdEm3Gq',NULL,'jeannekieffer@groupomania.fr',0),(8,'Landers','William','Charcutier','$2b$10$of9t0XnD7.l6SSFMmrJvQOJBcdlVYNfOCGB.4ALvcFpDHIwQi6s4i',NULL,'williamlanders@groupomania.fr',0),(9,'LeJeune','Norbert','Hôte de caisse','$2b$10$5Fv0sHW1h2BD27EE7CGm5uHKoqt9ZCn/02s35vUARE.eYU2txWnHS',NULL,'norbertlejeune@groupomania.fr',0),(10,'Kramer','Lilian','PDG','$2b$10$wQRVJbRDZKfBUsMvSzNpkuZwJfCg99dRDMd9gspVVbUOFEFI9q4rG',NULL,'liliankramer@groupomania.fr',0),(11,'Girardin','Séverine','Cheffe de projet','$2b$10$Qlb7gNu01DoqI96Ot3.nN.r6KAjKC1.xtGu0zMRBZY3szHO3OnSUm',NULL,'severinegirardin@groupomania.fr',0);
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

-- Dump completed on 2022-09-27  9:49:27
