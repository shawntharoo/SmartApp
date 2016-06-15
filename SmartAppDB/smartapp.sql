-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 15, 2016 at 05:08 AM
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
  `ID` int(11) NOT NULL,
  `Profession` varchar(40) NOT NULL,
  `Skills` varchar(100) NOT NULL DEFAULT 'No',
  `Awards` varchar(60) NOT NULL DEFAULT 'No',
  `WorkPlace` varchar(40) NOT NULL,
  `Address` varchar(50) NOT NULL,
  `Contact` int(11) NOT NULL,
  `Email` varchar(40) NOT NULL,
  `WorkHour` varchar(40) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `buissnescard`
--

INSERT INTO `buissnescard` (`ID`, `Profession`, `Skills`, `Awards`, `WorkPlace`, `Address`, `Contact`, `Email`, `WorkHour`) VALUES
(1, 'Software Engineer', 'Angular JS', 'OCPJP', 'Millenium IT', 'Baththaramulla', 789875673, 'robert@gmail.com', '1.00PM - 10.00PM'),
(2, 'Lawyer', 'Language', 'Law', 'Law Entrance', 'Colombo', 768905462, 'ronald@gmial.com', 'No Specific'),
(3, 'Businessmen', 'promote', 'annual awards', 'helys', 'dematagoda', 767890874, 'kamal@gmail.com', '5.00PM onwards'),
(4, 'Network Administrator', 'Java Script', 'Bronze medal', 'BOC', 'Maradana', 786575452, 'sama@gmail.com', '2.00PM- 7.00PM'),
(5, 'Supervisor', 'undefined', 'undefined', 'Nawaloka', 'Nawaloka', 786545678, 'perera@gmail.com', '1.00PM - 12.00AM'),
(6, 'Doctor', 'Specialist', 'MBBS', 'Hemas', 'Wathtala', 789065478, 'sakila@gmail.com', '5.00AM - 11.00PM'),
(7, 'Manager', 'CIMA,AAT', 'Best Runner', 'Brandix I3', 'Kingsly Road', 789654321, 'brayan@gmail.com', 'Normal Hours');

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
  `CDate` varchar(40) NOT NULL,
  PRIMARY KEY (`IDAdd`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `postadvertiesement`
--

INSERT INTO `postadvertiesement` (`IDAdd`, `Type`, `Title`, `Image`, `Description`, `ContactNo`, `Email`, `StartDate`, `EndDate`, `CDate`) VALUES
(1, 'Event', 'Get Together2', 'img/1EMAim3uSfm29w35E23g_ldaYK5wTq6GjoEcXZfvg_pizza.jpg', 'Get Together of the 94 group will ba having on 2016-06-09.. It is beter i f all the members are participated.', 987654321, 'saman@gmail.com', 'Wed Jun 01 2016', 'Fri Jun 10 2016', '2016-06-09 07:50 AM'),
(2, 'Notice', 'Batch Meeting', 'img/meet1.jpg', 'Batch Meeting will be Held on the College Premises', 786578942, 'shenal@gmail.com', '2016-07-20', 'Wed Jun 01 2016', '2016-06-12 17:45:24'),
(3, 'Promote', 'An Example of a Google Bar Chart', 'img/add2.jpg', 'sadfdf', 768954312, 'harsh@gmail.com', '2016-07-04', '2016-07-20', '2016-06-11 14:25:33'),
(4, 'Event', 'Exhibition', 'img/mer1.jpg', 'Royal college 94 batch going to be organized exhibition to celebrate the 175th anniversary of Royal College  ', 756789546, 'kumar@gmail.com', '2016-06-20', '2016-06-30', '2016-06-11 14:24:31'),
(5, 'Merchent', 'New T-Shirt', 'img/meet1.jpg', 'New T-Shirt has been printed for the 94''bacth members', 768956431, 'sunil@gmail.com', 'Wed Jun 09 2016', '2016-09-30', '2016-05-21 14:15:08'),
(6, 'Promote', 'New Tags', 'img/promo.jpg', 'New tags with school logo will be available at the canteen and book shop', 766666666, 'sore@gmail.com', 'Thu Jun 16 2016', 'Thu Aug 25 2016', '2016-06-14 21:09:19');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `class` varchar(20) NOT NULL,
  `dob` date NOT NULL,
  `address` varchar(150) NOT NULL,
  `contact_no` int(20) NOT NULL,
  `home` int(15) NOT NULL,
  `profession` varchar(50) NOT NULL,
  `office_address` varchar(150) NOT NULL,
  `office_phone` int(11) NOT NULL,
  `office_email` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL,
  `request` int(10) NOT NULL DEFAULT '0',
  `requestdate` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=61 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `class`, `dob`, `address`, `contact_no`, `home`, `profession`, `office_address`, `office_phone`, `office_email`, `role`, `request`, `requestdate`) VALUES
(1, 'pawan', 'p', 'sep', '13B', '1992-08-18', 'yy', 912222222, 712222222, 'Businesman', 'Alexandrite, Galle', 712345662, '', 'rep', 1, '0000-00-00'),
(2, 'Harshani Yik', 'harshani', 'sep2', '13C', '1994-07-09', 'asfsff', 0, 0, '', '', 0, '', 'admin', 1, '0000-00-00'),
(20, 'hashan', 'hashan@gmail.com', '12345', '13A', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 1, '0000-00-00'),
(21, 'kamal', 'undefined', '12345', '13A', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 1, '0000-00-00'),
(25, 'pawan', 'g@mail.com', '12345', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 2, '0000-00-00'),
(34, 'ppp', 'p@gmail.com', '', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 0, '2016-06-08'),
(35, 'aaa', 'bb@gmail.com', '', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 0, '2016-06-09'),
(36, 'kamal', 'kamal@gamail.com', '', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 0, '2016-06-10'),
(37, 'pawan', 'Agma@ol.com', '', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 0, '2016-06-11'),
(38, 'aa', 'a@gmail.com', '', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 0, '2016-06-12'),
(39, 'aaa', 'aaa@gmail.com', '12345', '13B', '0000-00-00', 'galle', 714444444, 912222222, '', '', 0, '', 'member', 1, '2016-06-13'),
(41, 'pawan', 'pawan@gmail.com', '', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 0, '2016-06-14'),
(42, 'pawan', '', '', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 0, '2016-06-14'),
(43, 'fff', 'ff@gmail.com', '', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 0, '2016-06-14'),
(44, 'i', 'gg@gmail.com', '', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 0, '2016-06-14'),
(57, 'p00', 'd@gmail.com', '', '13A', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 0, '2016-06-14'),
(58, 'pp', 'hhhhh@gmail.com', '', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 0, '2016-06-14'),
(59, 'pp', 'ght@gmail.com', '', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 0, '2016-06-14'),
(60, 'pawan', 'q@gmail.com', '', '13A', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 0, '2016-06-14');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
