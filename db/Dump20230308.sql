CREATE DATABASE  IF NOT EXISTS `restaurant` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `restaurant`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: restaurant
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `dinning_mst`
--

DROP TABLE IF EXISTS `dinning_mst`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dinning_mst` (
  `reserve_id` int NOT NULL AUTO_INCREMENT,
  `reserve_name` varchar(45) NOT NULL,
  `reserve_date` date DEFAULT NULL,
  `reserve_time` varchar(45) DEFAULT NULL,
  `number` varchar(80) NOT NULL,
  `email` varchar(100) NOT NULL,
  `adult` int NOT NULL,
  `child` int NOT NULL,
  `guest` varchar(45) DEFAULT NULL,
  `request` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`reserve_id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dinning_mst`
--

LOCK TABLES `dinning_mst` WRITE;
/*!40000 ALTER TABLE `dinning_mst` DISABLE KEYS */;
INSERT INTO `dinning_mst` VALUES (1,'류지연','2023-03-04','11:00 ~ 14:00','010-1111-4444','ryuha@gmail.com',4,0,NULL,NULL),(2,'김민지','2023-03-03','11:00 ~ 14:00','010-2465-7896','aaa@gmail.com',3,2,NULL,NULL),(3,'김지은','2023-03-04','11:00 ~ 14:00','010-4567-1122','dlake8877@gmail.com',1,6,NULL,NULL),(4,'이다혜','2023-04-10','11:00 ~ 14:00','010-6696-4423','vicent7@gmail.com',6,0,NULL,NULL),(5,'정부교','2023-04-01','14:00 ~ 17:00','010-1596-6808','qnry46@gmail.com',2,4,NULL,NULL),(6,'김준일','2023-03-05','14:00 ~ 17:00','010-7912-1598','junil@gmail.com',4,0,NULL,NULL),(7,'High','2023-03-06','14:00 ~ 17:00','010-0821-7534','koreait@gmail.com',1,3,NULL,NULL),(8,'최향란','2023-03-07','17:00 ~ 20:20','010-5561-4297','lani@gmail.com',5,1,NULL,NULL),(9,'Bell','2023-03-08','17:00 ~ 20:20','010-3696-8142','park@gmail.com',1,1,NULL,NULL),(10,'박경자','2023-03-09','11:00 ~ 14:00','010-4642-0809','kyungja@gmail.com',2,0,NULL,NULL),(11,'김동형','2023-03-10','14:00 ~ 17:00','010-0007-6194','dungheong@gmail.com',1,2,NULL,NULL),(12,'강동훈','2023-03-10','14:00 ~ 17:00','010-6491-2754','dongdong@gmail.com',0,2,NULL,NULL),(13,'최훈민','2023-03-10','11:00 ~ 14:00','010-5193-8597','chlgnsals@gmail.com',4,2,NULL,NULL),(14,'김병규','2023-03-10','17:00 ~ 20:20','010-4469-3379','rlaqudrb169@gmail.com',4,0,NULL,NULL),(15,'Kon','2023-03-10','17:00 ~ 20:20','010-9999-6421','udc@gmail.com',6,0,NULL,NULL),(16,'문원석','2023-03-14','11:00 ~ 14:00','010-5002-3269','wldbftjdbf72@gmail.com',1,2,NULL,NULL),(17,'이은숙','2023-03-14','17:00 ~ 20:20','010-2013-9433','praise11223@gmail.com',3,3,NULL,NULL),(18,'류경은','2023-03-14','14:00 ~ 17:00','010-4118-7865','qksduehdwnals1349@gmail.com',2,2,NULL,NULL),(19,'김선경','2023-03-14','11:00 ~ 14:00','010-1331-7941','djddl456@gmail.com',1,1,NULL,NULL),(20,'김서지','2023-03-14','11:00 ~ 14:00','010-4613-2585','rlatjwl@gmail.com',3,0,NULL,NULL),(21,'배성윤','2023-03-17','11:00 ~ 14:00','010-7898-0854','ckdowldkfj4@gmail.com',5,0,NULL,NULL),(22,'김동열','2023-03-17','17:00 ~ 20:20','010-2323-0956','dongdugje@gmail.com',2,2,NULL,NULL),(23,'변건채','2023-03-18','17:00 ~ 20:20','010-3197-0707','qusrjsco@gmail.com',1,2,NULL,NULL),(24,'김은혜','2023-03-17','11:00 ~ 14:00','010-2474-6694','grace@gmail.com',3,0,NULL,NULL),(25,'박성호','2023-03-18','17:00 ~ 20:20','010-1151-8471','sungho@gmail.com',4,0,NULL,NULL),(26,'손태규','2023-03-18','11:00 ~ 14:00','010-1564-7979','gonggongei@gmail.com',1,2,NULL,NULL),(27,'herrypoter','2023-03-21','14:00 ~ 17:00','010-4869-1535','magic@gmail.com',5,0,NULL,NULL),(28,'유태오','2023-03-21','17:00 ~ 20:20','010-1589-3298','teoteo@gmail.com',2,0,NULL,NULL),(29,'김태리','2023-04-21','14:00 ~ 17:00','010-8754-3265','teri@gmail.com',2,3,NULL,NULL),(30,'전미도','2023-03-21','11:00 ~ 14:00','010-9412-2149','mido@gmail.com',4,0,NULL,NULL),(31,'조정석','2023-03-21','11:00 ~ 14:00','010-0619-3069','dkjkdjfk@gmail.com',6,0,NULL,NULL),(32,'전다은','2023-04-21','17:00 ~ 20:20','010-7815-5558','efjkejkfj@gmail.com',2,2,NULL,NULL);
/*!40000 ALTER TABLE `dinning_mst` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'restaurant'
--

--
-- Dumping routines for database 'restaurant'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-08 21:02:19
