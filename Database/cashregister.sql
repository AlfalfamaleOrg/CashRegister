-- phpMyAdmin SQL Dump
-- version 4.0.1
-- http://www.phpmyadmin.net
--
-- Machine: localhost
-- Genereertijd: 07 aug 2013 om 17:08
-- Serverversie: 5.6.10-log
-- PHP-versie: 5.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Databank: `cashregister`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `items`
--

DROP TABLE IF EXISTS `items`;
CREATE TABLE IF NOT EXISTS `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL,
  `type_id` int(11) DEFAULT NULL,
  `price_exc` decimal(3,2) DEFAULT NULL,
  `price_tax` decimal(3,2) DEFAULT NULL,
  `price_inc` decimal(3,2) DEFAULT NULL,
  `cost_exc` decimal(3,2) DEFAULT NULL,
  `cost_tax` decimal(3,2) DEFAULT NULL,
  `cost_inc` decimal(3,2) DEFAULT NULL,
  `archived` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Gegevens worden uitgevoerd voor tabel `items`
--

INSERT INTO `items` (`id`, `name`, `type_id`, `price_exc`, `price_tax`, `price_inc`, `cost_exc`, `cost_tax`, `cost_inc`, `archived`) VALUES
(1, 'Bier', NULL, NULL, NULL, '1.70', NULL, NULL, NULL, NULL),
(2, 'Cola', NULL, NULL, NULL, '1.00', NULL, NULL, NULL, NULL),
(3, 'Koffie', NULL, NULL, NULL, '1.20', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(128) NOT NULL,
  `password` varchar(512) NOT NULL,
  `name` varchar(128) NOT NULL,
  `group` enum('Admin','Bestuur','Beheer','Bar') NOT NULL DEFAULT 'Bar',
  `disabled` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `login` (`login`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Gegevens worden uitgevoerd voor tabel `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `name`, `group`, `disabled`) VALUES
(1, 'Rob', 'test', 'Rob van den Hout', 'Admin', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
