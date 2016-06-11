-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 11, 2016 at 02:29 PM
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
-- Table structure for table `buissnescard`
--

CREATE TABLE IF NOT EXISTS `buissnescard` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Profession` varchar(40) NOT NULL,
  `Skills` varchar(100) NOT NULL DEFAULT 'No',
  `Awards` varchar(60) NOT NULL DEFAULT 'No',
  `WorkPlace` varchar(40) NOT NULL,
  `Address` varchar(50) NOT NULL,
  `Contact` int(11) NOT NULL,
  `Email` varchar(40) NOT NULL,
  `WorkHour` varchar(40) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `buissnescard`
--

INSERT INTO `buissnescard` (`ID`, `Profession`, `Skills`, `Awards`, `WorkPlace`, `Address`, `Contact`, `Email`, `WorkHour`) VALUES
(1, 'Software Engineer', 'Java,AngularJS,Cordova,PHP', 'OCPJP', 'Millenium IT', '1A,Malabe,Baththaramulla,', 79807653, 'Ronald94@gmail.com', '8.00AM - 4.00PM'),
(3, 'Software Developer', 'Java', 'SCPJP', '', '', 0, '', ''),
(4, 'Network', 'Java Script', 'Bronze medal', '', '', 0, '', ''),
(5, 'Supervisor', 'undefined', 'undefined', 'Virtusa', '167,dematagoda', 716359856, 'kumar@gmail.com', '11.0AM - 5.00PM');

-- --------------------------------------------------------

--
-- Table structure for table `postadvertiesement`
--

CREATE TABLE IF NOT EXISTS `postadvertiesement` (
  `IDAdd` int(11) NOT NULL AUTO_INCREMENT,
  `Type` varchar(20) NOT NULL,
  `Title` varchar(40) NOT NULL,
  `Image` varchar(100) NOT NULL,
  `Description` varchar(150) NOT NULL,
  `ContactNo` int(11) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `StartDate` varchar(15) NOT NULL,
  `EndDate` varchar(15) NOT NULL,
  `CDate` varchar(20) NOT NULL,
  PRIMARY KEY (`IDAdd`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `postadvertiesement`
--

INSERT INTO `postadvertiesement` (`IDAdd`, `Type`, `Title`, `Image`, `Description`, `ContactNo`, `Email`, `StartDate`, `EndDate`, `CDate`) VALUES
(1, 'Promote', 'Get Together', 'img/1EMAim3uSfm29w35E23g_ldaYK5wTq6GjoEcXZfvg_pizza.jpg', 'Get Together of the 94 group will ba having on 2016-06-09.. It is beter i f all the members are participated.', 987654321, 'saman@gmail.com', 'Wed Jun 01 2016', 'Fri Jun 10 2016', '2016-06-09 07:50 AM'),
(3, 'Promote', 'An Example of a Google Bar Chart', 'img/add2.jpg', 'sadfdf', 768954312, 'harsh@gmail.com', '2016-07-04', '2016-07-20', '2016-06-11 14:25:33'),
(4, 'Event', 'Exhibition', 'img/add1.jpg', 'Royal college 94 batch going to be organized exhibition to celebrate the 175th anniversary of Royal College  ', 756789546, 'kumar@gmail.com', '2016-06-20', '2016-06-30', '2016-06-11 14:24:31');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
