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
-- Table structure for table `view_mainpage`
--

DROP TABLE IF EXISTS `view_mainpage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `view_mainpage` (
  `img_id` int NOT NULL,
  `title_name` varchar(100) NOT NULL,
  `appetizer` varchar(100) NOT NULL,
  `sub_main` varchar(45) NOT NULL,
  `main_main` varchar(45) NOT NULL,
  `dessert` varchar(45) NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`img_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `view_mainpage`
--

LOCK TABLES `view_mainpage` WRITE;
/*!40000 ALTER TABLE `view_mainpage` DISABLE KEYS */;
INSERT INTO `view_mainpage` VALUES (1,'평일 Lunch Special Course A','셰프 추천 스프','계절 샐러드','그릴에 구운 소고기 안심스테이크','티라미슈 케익',90000),(2,'평일 Lunch Special Course B','셰프 추천 스프','클래식 시저 샐러드','소안심 스테이크와 바닷가재 꼬리구이','티라미슈 케익',90000),(3,'평일 Dinner Special Course A','양파 스프와 크림','계절 샐러드','소안심 스테이크와 단호박 퓨래','아메리칸 치즈 케익',90000),(4,'평일 Dinner Special Course B','게살 스프','특미 통 전복','쇠고기 안심 후추소스','계절 과일',90000),(5,'주말 Lunch Special Course A','양송이 스프','하몽을 곁들인 시저샐러드','안심과 랍스터테일 스테이크','티라미슈 케익',90000),(6,'주말 Lunch Special Course B','셰프 추천 스프','견과류를 곁들인 그린 샐러드','야채와 치즈 들어간 까넬로니','수제 쿠키',90000),(7,'주말 Dinner Special Course A','양파 스프와 크림','계절 샐러드','등심스테이크와 치킨','수제 쿠키',90000),(8,'주말 Dinner Special Course B','게살스프','특미 통 전복','수비드 부채살 스테이크','수제 쿠키',90000);
/*!40000 ALTER TABLE `view_mainpage` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-22  9:03:23
