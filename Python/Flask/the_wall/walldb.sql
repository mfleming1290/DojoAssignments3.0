-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: walldb
-- ------------------------------------------------------
-- Server version	5.6.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
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
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `message_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_comments_users1_idx` (`user_id`),
  KEY `fk_comments_messages1_idx` (`message_id`),
  CONSTRAINT `fk_comments_messages1` FOREIGN KEY (`message_id`) REFERENCES `messages` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_comments_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,'congratz','2017-04-09 16:42:08',NULL,2,1),(2,'long message!','2017-04-09 17:17:43',NULL,3,3),(7,'Hey there hot stuff!!!','2017-04-10 09:34:44',NULL,1,2),(8,'How are you matthew?','2017-04-10 09:36:49',NULL,4,1),(9,'own comment','2017-04-10 09:57:55',NULL,4,4),(10,'dannis comment on matts message','2017-04-10 10:35:31',NULL,3,6),(11,'hey girl','2017-04-10 11:33:56',NULL,3,5);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_messages_users_idx` (`user_id`),
  CONSTRAINT `fk_messages_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,'This is my first message!!!!','2017-04-09 14:14:26',NULL,1),(2,'Danielle\'s comment','2017-04-09 15:05:32',NULL,3),(3,'my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message my message','2017-04-09 15:54:55',NULL,2),(4,'Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! Hi i\'m kristen! ','2017-04-10 09:36:36',NULL,4),(5,'second comment1','2017-04-10 09:57:19',NULL,4),(6,'Matthew\'s message','2017-04-10 10:34:40',NULL,1);
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `pw_hash` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Matthew','Fleming','matthewjamesfleming@gmail.com','$2b$12$DwfJfw71MzsKSAHWB7uIAeryUgh2l2wAbYbupF904DWAEqiVVKIG6','2017-04-09 12:54:20',NULL),(2,'Andrew','Fleming','punchdance@gmail.com','$2b$12$aY9PGSso/a2BJlHksU.gFuboGk1Mx0YBjOB3tpWZJ8VIMY0w9jQo.','2017-04-09 15:00:47',NULL),(3,'Dannielle','Karas','dkaras@gmail.com','$2b$12$j.nqmgQ/ucfJMUGzDCDfPefFLcGZXFEJfUtiWLSgliffnr7naYzty','2017-04-09 15:01:20',NULL),(4,'Kristen','Karas','kkaras@gmail.com','$2b$12$o/qHYyhWn4VrY1Hvc2blnuEvWfzSJQiucV7YOoU.kfyqVA01NxslC','2017-04-10 09:35:30',NULL);
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

-- Dump completed on 2017-04-10 12:50:44
