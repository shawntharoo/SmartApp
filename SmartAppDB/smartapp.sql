-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 12, 2016 at 02:29 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `smartapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `about2`
--

CREATE TABLE IF NOT EXISTS `about2` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Profession` varchar(40) NOT NULL,
  `Skills` varchar(40) NOT NULL,
  `Awards` varchar(40) NOT NULL,
  `WorkPlace` varchar(40) NOT NULL,
  `Address` varchar(40) NOT NULL,
  `Contact` int(11) NOT NULL,
  `Email` varchar(40) NOT NULL,
  `WorkHour` varchar(20) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `about2`
--

INSERT INTO `about2` (`Id`, `Profession`, `Skills`, `Awards`, `WorkPlace`, `Address`, `Contact`, `Email`, `WorkHour`) VALUES
(2, 'software', 'java', 'ocpjp', 'Millenium IT', 'Malabe', 716359856, 'sman@gmail.com', '8.00AM - 9.00PM'),
(3, '', '', '', '', '', 0, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `buissnesscard`
--

CREATE TABLE IF NOT EXISTS `buissnesscard` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Profession` varchar(40) NOT NULL,
  `Skills` varchar(100) NOT NULL,
  `wpName` varchar(40) NOT NULL,
  `wpAddress` varchar(50) NOT NULL,
  `wpContact` int(11) NOT NULL,
  `wpEmail` varchar(40) NOT NULL,
  `wpHours` varchar(40) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `buissnesscard`
--

INSERT INTO `buissnesscard` (`ID`, `Profession`, `Skills`, `wpName`, `wpAddress`, `wpContact`, `wpEmail`, `wpHours`) VALUES
(1, 'Software Engineer', 'Java,AngularJS,Cordova,PHP', 'Millenium IT', '1A,Malabe,Baththaramulla,', 715698563, 'Ronald94@gmail.com', '8.00AM - 4.00PM');

-- --------------------------------------------------------

--
-- Table structure for table `cus`
--

CREATE TABLE IF NOT EXISTS `cus` (
  `ID` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `cus`
--

INSERT INTO `cus` (`ID`, `name`, `email`) VALUES
(1, 'isuru', 'isuru@gmail.com'),
(2, 'sada', 'sada@gmail.com');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
