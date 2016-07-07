-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 07, 2016 at 08:16 AM
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
(1, 'Doctor', 'neurologist', 'Specialist,Consultant', 'Hemas', 'Kiribathgoda', 112435678, 'hemas.paw@gmail.com', '8.00AM-6.00PM'),
(2, 'Lawyer', 'Language', 'Law', 'Law Entrance', 'Colombo', 768905462, 'ronald@gmial.com', 'No Specific'),
(3, 'Businessmen', 'promote', 'annual awards', 'helys', 'dematagoda', 767890874, 'kamal@gmail.com', '5.00PM onwards'),
(4, 'Network Administrator', 'Java Script', 'Bronze medal', 'BOC', 'Maradana', 786575452, 'sama@gmail.com', '2.00PM- 7.00PM'),
(5, 'Supervisor', 'undefined', 'undefined', 'Nawaloka', 'Nawaloka', 786545678, 'perera@gmail.com', '1.00PM - 12.00AM'),
(6, 'Doctor', 'Specialist', 'MBBS', 'Hemas', 'Wathtala', 789065478, 'sakila@gmail.com', '5.00AM - 11.00PM'),
(7, 'Manager', 'CIMA,AAT', 'Best Runner', 'Brandix I3', 'Kingsly Road', 789654321, 'brayan@gmail.com', 'Normal Hours'),
(8, 'Software Engineer', 'Angular JS', 'OCPJP', 'Millenium IT', 'Baththaramulla', 789875673, 'robert@gmail.com', '1.00PM - 10.00PM'),
(9, 'Master sir', 'mage himi thana', 'denavaaada?', 'Anee sir', 'anukamapaa', 789654321, 'nositheda@apa.atharekaba', '6.00AM-12.00PM');

-- --------------------------------------------------------

--
-- Table structure for table `disableadd`
--

CREATE TABLE IF NOT EXISTS `disableadd` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `MemID` int(11) NOT NULL,
  `Status` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `disableadd`
--

INSERT INTO `disableadd` (`ID`, `MemID`, `Status`) VALUES
(1, 10, 1),
(4, 9, 1);

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE IF NOT EXISTS `events` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `eventName` varchar(255) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `eventName`, `date`) VALUES
(1, 'Pirith Ceremony', '2016-05-24'),
(3, 'RC vs TCK 2nd leg', '2016-05-31');

-- --------------------------------------------------------

--
-- Table structure for table `followers`
--

CREATE TABLE IF NOT EXISTS `followers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ownerid` int(11) NOT NULL,
  `followerid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `followers`
--

INSERT INTO `followers` (`id`, `ownerid`, `followerid`) VALUES
(1, 1, 2),
(6, 1, 3),
(7, 1, 35);

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE IF NOT EXISTS `games` (
  `ID` int(11) NOT NULL,
  `Availability` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`ID`, `Availability`) VALUES
(1, 0),
(2, 0),
(3, 0),
(4, 0),
(5, 0),
(6, 0);

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE IF NOT EXISTS `groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_name` varchar(50) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `category` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  `num_participants` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=90 ;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `group_name`, `image`, `category`, `description`, `num_participants`) VALUES
(73, 'IT', 'imag/42XUz96SjSFGiQjoKJcw_cricket.png', 'Professinal', 'This is for cricket fans', 0),
(74, 'India', 'imag/india.png', 'Professinal', 'This is for the people who lives in india', 0),
(82, 'Australians', 'imag/w5Gq0NztTxWrXMzABzRZ_australia.png', 'Professinal', 'This group is for the old boys of royal collage who lives in Australia ', 0),
(83, 'Music', 'imag/GF1b6BcoTo678SCH8oz8_music.jpg', 'Entertainment', 'This group is for music fans of royal collage', 0),
(84, 'Enginners', 'imag/bgcHRKzFRIyly4qlg3PE_hz2dDXCgRTSH3g4ep6Am_ingineers.jpg', 'Professinal', 'This is the group of engineers  ', 0),
(85, 'Cricket', 'imag/download (5).jpg', 'Professinal', 'We are the old boys of royal collage currently is in the IT field', 0),
(86, 'Doctors', 'imag/5rw2GKOjSu6XIInHz9il_doctor.jpg', 'Professinal', 'This is the group of doctors in royal collage 94 batch', 0),
(88, 'Business', 'imag/b.jpg', 'Professional', 'This is about business', 0),
(89, 'Tours', 'imag/t.jpg', 'Entertainment', 'Let''s go back to the school time', 0);

-- --------------------------------------------------------

--
-- Table structure for table `group_participants`
--

CREATE TABLE IF NOT EXISTS `group_participants` (
  `groupid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  PRIMARY KEY (`groupid`,`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `group_participants`
--

INSERT INTO `group_participants` (`groupid`, `userid`) VALUES
(73, 2),
(73, 3),
(73, 4),
(73, 5),
(73, 20),
(74, 1),
(82, 1),
(83, 1),
(85, 2),
(85, 3),
(85, 5);

-- --------------------------------------------------------

--
-- Table structure for table `group_post`
--

CREATE TABLE IF NOT EXISTS `group_post` (
  `postid` int(11) NOT NULL AUTO_INCREMENT,
  `groupid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `descriptions` varchar(1000) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  PRIMARY KEY (`postid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=30 ;

--
-- Dumping data for table `group_post`
--

INSERT INTO `group_post` (`postid`, `groupid`, `userid`, `descriptions`, `image`, `date`, `time`) VALUES
(1, 0, 0, 's', 's', '2016-06-08', '04:28:41'),
(2, 73, 1, 'We won the first place', 'imag/c1.jpg', '2016-06-08', '07:31:16'),
(3, 1, 1, '1', '1', '2016-06-08', '08:17:31'),
(4, 1, 1, '1', '1', '2016-06-08', '08:22:43'),
(5, 1, 1, '1', '1', '2016-06-08', '08:22:45'),
(6, 1, 1, '1', '1', '2016-06-08', '08:22:46'),
(7, 1, 1, '1', '1', '2016-06-08', '08:22:46'),
(8, 1, 1, '1', '1', '2016-06-08', '08:22:46'),
(9, 1, 1, '1', '1', '2016-06-08', '08:22:46'),
(10, 0, 0, 's', 's', '2016-06-08', '08:24:42'),
(11, 0, 0, 's', 's', '2016-06-08', '08:26:15'),
(12, 0, 0, 's', 's', '2016-06-08', '08:27:55'),
(13, 0, 0, 's', 'ddd', '2016-06-08', '08:28:29'),
(14, 0, 0, 'ssss', 'sssss', '2016-06-08', '08:29:41'),
(15, 0, 0, 'ssss', 'ggggggggggggg', '2016-06-08', '08:30:13'),
(16, 0, 0, 'h', 'h', '2016-06-08', '08:32:00'),
(17, 0, 0, 's', 'x', '2016-06-08', '09:03:10'),
(18, 0, 0, 's', 'x', '2016-06-08', '09:03:52'),
(19, -1, 1, 's', 'imag/p3.jpg', '2016-06-08', '09:04:41'),
(20, -1, 1, 'undefined', 'imag/p2.jpg', '2016-06-08', '12:23:59'),
(21, -1, 1, 'sss', 'imag/p1.jpg', '2016-06-08', '13:06:50'),
(22, 73, 0, 'We are planning a cricket match', 'imag/c4.jpg', '2016-06-10', '11:26:04'),
(23, 0, 0, 'We are pa', 'undefined', '2016-06-10', '11:27:36'),
(26, -1, 1, 'victory of royal', 'imag/p3.jpg', '2016-06-10', '11:45:23'),
(29, -1, 0, 'undefined', 'undefined', '2016-06-14', '15:56:49');

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE IF NOT EXISTS `notification` (
  `NID` int(11) NOT NULL AUTO_INCREMENT,
  `MemberID` int(11) NOT NULL,
  `ATitle` varchar(100) NOT NULL,
  `Notification` varchar(100) NOT NULL,
  `ADate` varchar(40) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`NID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`NID`, `MemberID`, `ATitle`, `Notification`, `ADate`, `status`) VALUES
(1, 1, 'SendAdd', 'Your Advertisement is Now Available in the System', '2016-07-04 18:47:20', 1),
(2, 1, 'Get', 'Your Advertisement is Rejected by the Admin', '2016-07-04 18:50:59', -1),
(3, 1, 'Get', 'Your Advertisement is Now Available in the System', '2016-07-04 18:52:20', 1),
(4, 1, 'Get', 'Your Advertisement is Rejected by the Admin', '2016-07-04 18:54:02', -1),
(5, 9, 'new add', 'Your Advertisement is Rejected by the Admin', '2016-07-07 04:24:44', 0),
(6, 9, 'new add', 'Your Advertisement is Rejected by the Admin', '2016-07-07 04:54:06', 0);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=19 ;

--
-- Dumping data for table `postadvertiesement`
--

INSERT INTO `postadvertiesement` (`IDAdd`, `Type`, `Title`, `Image`, `Description`, `ContactNo`, `Email`, `StartDate`, `EndDate`, `CDate`) VALUES
(1, 'Promote', 'organize the batch trip', 'img/add2.jpg', 'batch trip for jaffna', 768954312, 'harsh@gmail.com', '2016-07-04', 'Sat Jul 30 2016', '2016-06-09 07:50 AM'),
(2, 'Notice', 'Batch Meeting', 'img/meet1.jpg', 'Batch Meeting will be Held on the College Premises', 786578942, 'shenal@gmail.com', '2016-07-20', 'Wed Jun 01 2016', '2016-06-12 17:45:24'),
(3, 'Promote', 'An Example of a Google Bar Chart', 'img/add2.jpg', 'sadfdf', 768954312, 'harsh@gmail.com', '2016-07-04', '2016-07-20', '2016-06-11 14:25:33'),
(4, 'Event', 'Exhibition', 'img/mer1.jpg', 'Royal college 94 batch going to be organized exhibition to celebrate the 175th anniversary of Royal College  ', 756789546, 'kumar@gmail.com', '2016-06-20', '2016-06-30', '2016-06-11 14:24:31'),
(5, 'Merchent', 'New T-Shirt', 'img/meet1.jpg', 'New T-Shirt has been printed for the 94''bacth members', 768956431, 'sunil@gmail.com', 'Wed Jun 09 2016', '2016-09-30', '2016-05-21 14:15:08'),
(6, 'Promote', 'New Tags', 'img/promo.jpg', 'New tags with school logo will be available at the canteen and book shop', 766666666, 'sore@gmail.com', 'Thu Jun 16 2016', 'Thu Aug 25 2016', '2016-06-14 21:09:19'),
(7, 'Event', '94 group meeting', 'img/1EMAim3uSfm29w35E23g_ldaYK5wTq6GjoEcXZfvg_pizza.jpg', 'Batch Meeting will be held in order to discuss about the future plans', 789876543, 'sahan@gmail.com', 'Wed Jun 15 2016', 'Fri Jul 01 2016', '2016-06-23 17:05:33'),
(8, 'Merchent', 'SendAdd', 'img/ad1.png', 'dsfsff', 99877, 'arjun@gmail.com', 'undefined', 'undefined', ''),
(9, 'Merchent', 'SendAdd', 'img/ad1.png', 'dsfsff', 99877, 'arjun@gmail.com', 'undefined', 'undefined', ''),
(10, 'Merchent', 'get', 'img/meet1.jpg', 'get together', 789654362, 'saman@gmail.com', 'Wed Jun 15 2016', 'Wed Jun 29 2016', '2016-06-29 17:34:28'),
(11, 'Merchent', 'SendAdd', 'img/ad1.png', 'dsfsff', 99877, 'arjun@gmail.com', 'undefined', 'undefined', ''),
(12, 'Event', 'Get', 'img/1EMAim3uSfm29w35E23g_ldaYK5wTq6GjoEcXZfvg_pizza.jpg', 'Get Together', 789654326, 'saman@gmail.com', 'Wed Jun 15 2016', 'Fri Jul 01 2016', '2016-06-29 17:45:13'),
(13, 'Event', 'Get', 'img/1EMAim3uSfm29w35E23g_ldaYK5wTq6GjoEcXZfvg_pizza.jpg', 'Get Together', 789654326, 'saman@gmail.com', 'Wed Jun 15 2016', 'Fri Jul 01 2016', '2016-06-29 17:45:13'),
(14, 'Notice', 'SendAdd', 'img/ad3.png', 'sjshj', 987766, 'sa@g.com', 'Fri Jun 17 2016', 'Thu Jun 30 2016', '2016-06-11 14:24:31'),
(15, 'Event', 'Get', 'img/ad1.png', 'Get Together', 786785435, 'saman@gmail.com', 'Wed Jun 15 2016', 'Thu Jun 30 2016', '2016-06-29 17:44:26'),
(16, 'Promote', 'balh', 'img/', 'blah blah', 786748484, 'na@gmail.com', 'Fri Jul 29 2016', 'Thu Aug 25 2016', '2016-07-05 20:41:12'),
(18, 'Merchent', 'test123', 'img/', 'testing 123', 1231231231, '123@gmail.com', 'Wed Jun 29 2016', 'Wed Jul 06 2016', '2016-07-06 15:57:29');

-- --------------------------------------------------------

--
-- Table structure for table `usendadvertiesement`
--

CREATE TABLE IF NOT EXISTS `usendadvertiesement` (
  `SID` int(11) NOT NULL AUTO_INCREMENT,
  `MemberId` int(11) NOT NULL,
  `title` varchar(70) NOT NULL,
  `Selection` varchar(20) NOT NULL,
  `Image` varchar(70) NOT NULL,
  `Description` varchar(150) NOT NULL,
  `ContactNo` int(11) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `StartDate` varchar(30) NOT NULL,
  `EndDate` varchar(30) NOT NULL,
  `sendDate` varchar(40) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`SID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `usendadvertiesement`
--

INSERT INTO `usendadvertiesement` (`SID`, `MemberId`, `title`, `Selection`, `Image`, `Description`, `ContactNo`, `Email`, `StartDate`, `EndDate`, `sendDate`, `status`) VALUES
(1, 1, 'SendAdd', 'Merchent', 'img/ad1.png', 'dsfsff', 99877, 'arjun@gmail.com', 'undefined', 'undefined', '', 1),
(2, 1, 'SendAdd', 'Promote', 'img/ad2.png', 'sjshj', 987766, 'sa@g.com', 'Fri Jun 17 2016 00:00:00 GMT 0', 'Thu Jun 30 2016 00:00:00 GMT 0', '', 0),
(3, 1, 'SendAdd', 'Notice', 'img/ad3.png', 'sjshj', 987766, 'sa@g.com', 'Fri Jun 17 2016 00:00:00 GMT 0', 'Thu Jun 30 2016 00:00:00 GMT 0', '2016-06-11 14:24:31', -1),
(4, 1, 'Get', 'Event', 'img/ad1.png', 'Get Together', 786785435, 'saman@gmail.com', 'Wed Jun 15 2016 00:00:00 GMT 0', 'Thu Jun 30 2016 00:00:00 GMT 0', '2016-06-29 17:44:26', 0),
(5, 1, 'Get', 'Event', 'img/1EMAim3uSfm29w35E23g_ldaYK5wTq6GjoEcXZfvg_pizza.jpg', 'Get Together', 789654326, 'saman@gmail.com', 'Wed Jun 15 2016 00:00:00 GMT 0', 'Fri Jul 01 2016 00:00:00 GMT 0', '2016-06-29 17:45:13', 1),
(6, 1, 'Get', 'Event', 'img/ad2.png', 'Get Together', 789654326, 'saman@gmail.com', 'Wed Jun 15 2016 00:00:00 GMT 0', 'Fri Jul 01 2016 00:00:00 GMT 0', '2016-06-29 17:45:31', -1),
(7, 9, 'new add', 'Merchent', 'img/', 'this is a new add', 2147483647, 'sa@gmial.com', 'Thu Jul 21 2016 00:00:00 GMT 0', 'Thu Jul 28 2016 00:00:00 GMT 0', '2016-07-05 20:36:49', 0),
(8, 9, 'SendAdd', 'Promote', 'img/', 'tasting', 98876544, 'test@gmail.com', 'Thu Jul 07 2016 00:00:00 GMT 0', 'Fri Jul 15 2016 00:00:00 GMT 0', '2016-07-07 05:37:18', 0);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=66 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `class`, `dob`, `address`, `contact_no`, `home`, `profession`, `office_address`, `office_phone`, `office_email`, `role`, `request`, `requestdate`) VALUES
(1, 'pawan', 'v', 'v', '13B', '1992-08-18', 'Galle', 715555555, 913333333, 'Businesman', 'Alexandrite, Galle', 712345662, '', 'rep', 1, '0000-00-00'),
(2, 'Harshani Yik', 'h', 'h', '13C', '1994-07-09', 'Kegalle', 0, 0, 'Engineer', '', 0, '', 'admin', 1, '0000-00-00'),
(8, 'ha', 'k', 'k', '13A', '0000-00-00', 'Matara', 0, 0, 'Doctor', '', 0, '', 'member', 1, '0000-00-00'),
(9, 'pawan', 'g', 'g', '13B', '0000-00-00', 'Galle', 0, 0, 'Businessman', '', 0, '', 'member', 1, '0000-00-00'),
(10, 'kamal', 'z', 'z', '13A', '0000-00-00', 'Kandy', 0, 0, 'Doctor', '', 0, '', 'member', 1, '0000-00-00'),
(34, 'hasakelum', 'p@gmail.com', '', '13B', '0000-00-00', 'Matara', 0, 0, 'Doctor', '', 0, '', 'member', 0, '2016-06-08'),
(35, 'aaa', 'bb@gmail.com', '', '13B', '0000-00-00', 'Galle', 0, 0, 'Engineer', '', 0, '', 'member', 0, '2016-06-09'),
(36, 'kamal', 'kamal@gamail.com', '', '13B', '0000-00-00', '', 0, 0, 'Engineer', '', 0, '', 'member', 0, '2016-06-10'),
(37, 'pawan', 'Agma@ol.com', '', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 0, '2016-06-11'),
(38, 'aa', 'a@gmail.com', '', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 0, '2016-06-12'),
(39, 'aaa', 'aaa@gmail.com', '12345', '13B', '0000-00-00', 'Galle', 714444444, 912222222, '', '', 0, '', 'member', 1, '2016-06-13'),
(41, 'pawan', 'pawan@gmil.com', '12345', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 1, '2016-06-14'),
(43, 'fff', 'ff@gmail.com', '12345', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 1, '2016-06-14'),
(44, 'i', 'gg@gmail.com', '', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 2, '2016-06-14'),
(57, 'p00', 'd@gmail.com', '', '13A', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 2, '2016-06-14'),
(58, 'pp', 'hhhhh@gmail.com', '', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 2, '2016-06-14'),
(59, 'pp', 'ght@gmail.com', '', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 2, '2016-06-14'),
(60, 'pawan', 'q@gmail.com', '', '13A', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 2, '2016-06-14'),
(61, 'pp', 'h@gmail.com', '12345', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 1, '2016-06-14'),
(64, 'test', 'test@gmail.com', '12345', '13A', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 1, '2016-06-15'),
(65, 'good', 'sa@gmsil.com', '12345', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 1, '2016-07-04');

-- --------------------------------------------------------

--
-- Table structure for table `user_family`
--

CREATE TABLE IF NOT EXISTS `user_family` (
  `family_id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `spouse_name` varchar(50) NOT NULL,
  `child_name` varchar(50) DEFAULT NULL,
  `type` varchar(10) DEFAULT NULL,
  `date_of_birth` varchar(200) DEFAULT NULL,
  `school_name` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`family_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Dumping data for table `user_family`
--

INSERT INTO `user_family` (`family_id`, `userid`, `spouse_name`, `child_name`, `type`, `date_of_birth`, `school_name`) VALUES
(11, 1, 'hou', 'null', 's', 'null', 0),
(19, 39, 'ggg', 'null', 's', 'null', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
