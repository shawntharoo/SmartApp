-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 09, 2016 at 04:03 AM
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
(1, 'Software Engineer', 'AngularJs, Ionic, Java', 'SCPJP, RedHat', 'Millenium  IT', 'Malabe,baththaramulla', 112567876, 'saman.MIT@gmail.com', '8.00AM-6.00PM');

-- --------------------------------------------------------

--
-- Table structure for table `disableadd`
--

CREATE TABLE IF NOT EXISTS `disableadd` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `MemID` int(11) NOT NULL,
  `Status` int(11) NOT NULL DEFAULT '1',
  `Admin` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `disableadd`
--

INSERT INTO `disableadd` (`ID`, `MemID`, `Status`, `Admin`) VALUES
(8, 1, -1, 1),
(9, 0, 1, 1),
(10, 2, -1, 1),
(11, 9, 1, 1),
(12, 10, 1, 1);

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
-- Table structure for table `facebookprof`
--

CREATE TABLE IF NOT EXISTS `facebookprof` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Mem_Id` int(11) NOT NULL,
  `FBId` varchar(30) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Picture` varchar(1000) NOT NULL,
  `Gender` varchar(30) NOT NULL,
  `Email` varchar(150) NOT NULL,
  `Age` varchar(30) NOT NULL,
  `Link` varchar(300) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `facebookprof`
--

INSERT INTO `facebookprof` (`id`, `Mem_Id`, `FBId`, `Name`, `Picture`, `Gender`, `Email`, `Age`, `Link`) VALUES
(2, 1, '1210495858990318', 'Sandakelum Tharindu', 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xta1/v/t1.0-1/c53.0.213.320/p320x320/13094269_1142591915780713_7377642025608053356_n.jpg?oh=d6c9480c6d89333272ac930a45c6c0b8', 'male', 'undefined', 'undefined', 'undefined');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=91 ;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `group_name`, `image`, `category`, `description`, `num_participants`) VALUES
(73, 'Cricket', 'imag/42XUz96SjSFGiQjoKJcw_cricket.png', 'Professinal', 'This is for cricket fans', -1),
(74, 'India', 'imag/india.png', 'Professinal', 'This is for the people who lives in india', 0),
(82, 'Australians', 'imag/w5Gq0NztTxWrXMzABzRZ_australia.png', 'Professinal', 'This group is for the old boys of royal collage who lives in Australia ', 0),
(83, 'Music', 'imag/GF1b6BcoTo678SCH8oz8_music.jpg', 'Entertainment', 'This group is for music fans of royal collage', 0),
(84, 'Enginners', 'imag/bgcHRKzFRIyly4qlg3PE_hz2dDXCgRTSH3g4ep6Am_ingineers.jpg', 'Professinal', 'This is the group of engineers  ', 0),
(85, 'IT', 'imag/download (5).jpg', 'Professinal', 'We are the old boys of royal collage currently is in the IT field', -2),
(86, 'Doctors', 'imag/5rw2GKOjSu6XIInHz9il_doctor.jpg', 'Professinal', 'This is the group of doctors in royal collage 94 batch', 0),
(88, 'Business', 'imag/b.jpg', 'Professional', 'This is about business', 0),
(89, 'Tours', 'imag/t.jpg', 'Entertainment', 'Let''s go back to the school time', 0),
(90, 'Learn', 'imag/7DB96bZSYqg8OsoCmDeA_brain.jpg', 'Professinal', 'This is for learning', 0);

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
(73, 1),
(73, 2),
(73, 4),
(73, 5),
(74, 1),
(74, 2),
(74, 5),
(82, 20),
(82, 21),
(83, 1),
(85, 1),
(85, 25),
(95, 1);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=44 ;

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
(21, -1, 1, 'wow', 'imag/p1.jpg', '2016-06-08', '13:06:50'),
(22, 73, 0, 'We are planning a cricket match', 'imag/c4.jpg', '2016-06-10', '11:26:04'),
(26, -1, 1, 'victory of royal', 'imag/p3.jpg', '2016-06-10', '11:45:23'),
(29, -1, 0, 'Here we go', 'imag/p3.jpg', '2016-06-14', '15:56:49'),
(41, 82, 1, 'Here we are', 'imag/ra2.jpg', '2016-06-15', '11:30:00'),
(43, 73, 1, 'dfvdf', 'imag/download (5).jpg', '2016-06-15', '12:53:18');

-- --------------------------------------------------------

--
-- Table structure for table `linkedin`
--

CREATE TABLE IF NOT EXISTS `linkedin` (
  `LID` int(11) NOT NULL AUTO_INCREMENT,
  `Mem_Id` int(11) NOT NULL,
  `LinkedId` varchar(20) NOT NULL,
  `firstName` varchar(40) NOT NULL,
  `lastName` varchar(40) NOT NULL,
  `headline` varchar(50) NOT NULL,
  `photo` varchar(250) NOT NULL,
  `numConnections` int(11) NOT NULL,
  `industry` varchar(50) NOT NULL,
  `emailAddress` varchar(50) NOT NULL,
  `summary` varchar(100) NOT NULL,
  `location` varchar(30) NOT NULL,
  `publicProfileUrl` varchar(100) NOT NULL,
  `specialties` varchar(300) NOT NULL,
  `positions` varchar(100) NOT NULL,
  PRIMARY KEY (`LID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `linkedin`
--

INSERT INTO `linkedin` (`LID`, `Mem_Id`, `LinkedId`, `firstName`, `lastName`, `headline`, `photo`, `numConnections`, `industry`, `emailAddress`, `summary`, `location`, `publicProfileUrl`, `specialties`, `positions`) VALUES
(12, 0, 'jE1xcBd4GA', 'Sandakelum', 'Tharindu', 'Software Engineer', 'https://media.licdn.com/mpr/mprx/0_tmY0ctNwrqNTmzgtO0HlxQvwNPThmkji4mQ0-Q3wKBoTIqK74mHAMQvwchHTIzjmNEQAM89Iprw3DhctRjUi0QcFMrw8DhqaZjUpqbGotAY2F9ftquDtN12RJ5lKkh_0AY01PvetT4E', 244, 'Computer Software', 'mr.stadikaram@gmail.com', 'Looking for a Training or a Internship related to Software Development and other Software related fi', 'Sri Lanka', 'https://www.linkedin.com/in/sandakelum-tharindu-499a96113', 'undefined', 'undefined'),
(13, 1, 'jE1xcBd4GA', 'Sandakelum', 'Tharindu', 'Software Engineer', 'https://media.licdn.com/mpr/mprx/0_tmY0ctNwrqNTmzgtO0HlxQvwNPThmkji4mQ0-Q3wKBoTIqK74mHAMQvwchHTIzjmNEQAM89Iprw3DhctRjUi0QcFMrw8DhqaZjUpqbGotAY2F9ftquDtN12RJ5lKkh_0AY01PvetT4E', 245, 'Computer Software', 'mr.stadikaram@gmail.com', 'Looking for a Training or a Internship related to Software Development and other Software related fi', 'Sri Lanka', 'https://www.linkedin.com/in/sandakelum-tharindu-499a96113', 'undefined', 'undefined');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`NID`, `MemberID`, `ATitle`, `Notification`, `ADate`, `status`) VALUES
(15, 1, 'Padura', 'Your Advertisement is Rejected by the Admin', '2016-07-24 20:03:07', -1);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

--
-- Dumping data for table `postadvertiesement`
--

INSERT INTO `postadvertiesement` (`IDAdd`, `Type`, `Title`, `Image`, `Description`, `ContactNo`, `Email`, `StartDate`, `EndDate`, `CDate`) VALUES
(19, 'Event', 'Get Together', 'img/ldaYK5wTq6GjoEcXZfvg_pizza.jpg', 'Get Together of 94 batch', 2147483647, 'sandaru@gmail.com', 'Sun Jul 24 2016', 'Sun Jul 31 2016', '2016-07-23 05:46:15'),
(20, 'Promote', 'Batch T-Shirt', 'img/mer1.jpg', 'Batch t-Shirt is available', 714536728, 'repa@gmail.com', 'Thu Aug 04 2016', 'Wed Aug 31 2016', '2016-07-23 05:52:28');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Dumping data for table `usendadvertiesement`
--

INSERT INTO `usendadvertiesement` (`SID`, `MemberId`, `title`, `Selection`, `Image`, `Description`, `ContactNo`, `Email`, `StartDate`, `EndDate`, `sendDate`, `status`) VALUES
(9, 1, 'Get Together', 'Event', 'img/ldaYK5wTq6GjoEcXZfvg_pizza.jpg', 'Get Together of 94 batch', 2147483647, 'sandaru@gmail.com', 'Sun Jul 24 2016 00:00:00 GMT 0', 'Sun Jul 31 2016 00:00:00 GMT 0', '2016-07-23 05:46:15', 1),
(10, 1, 'Exhibition', 'Merchent', 'img/meet1.jpg', 'Exhibition for fund raising', 1123456789, 'kumar@gmail.com', 'Fri Jul 29 2016 00:00:00 GMT 0', 'Fri Aug 05 2016 00:00:00 GMT 0', '2016-07-23 05:56:10', -1),
(12, 1, 'hy', 'Event', 'img/', 'frg', 3454, 'fgf@hnm', 'Thu Jul 28 2016 00:00:00 GMT 0', 'Thu Jul 14 2016 00:00:00 GMT 0', '2016-07-24 12:35:08', -1),
(13, 1, 'Padura', 'Event', 'img/', 'Padura with 94 group', 768945632, 'haresh@gmail.com', 'Tue Jul 19 2016 00:00:00 GMT 0', 'Wed Aug 03 2016 00:00:00 GMT 0', '2016-07-24 19:41:11', -1),
(14, 9, 'Hy', 'Merchent', 'img/', 'sfds', 0, 'sas@dd', 'Tue Jul 19 2016 00:00:00 GMT 0', 'Thu Jul 28 2016 00:00:00 GMT 0', '2016-07-24 20:05:49', 0);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

--
-- Dumping data for table `user_family`
--

INSERT INTO `user_family` (`family_id`, `userid`, `spouse_name`, `child_name`, `type`, `date_of_birth`, `school_name`) VALUES
(11, 1, 'hou', 'null', 's', 'null', 0),
(19, 39, 'ggg', 'null', 's', 'null', 0),
(20, 10, 'hy', 'null', 's', 'null', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
