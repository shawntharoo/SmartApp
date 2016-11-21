-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2016 at 02:28 AM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smartapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `buissnescard`
--

CREATE TABLE `buissnescard` (
  `ID` int(11) NOT NULL,
  `Profession` varchar(40) NOT NULL,
  `Skills` varchar(100) NOT NULL DEFAULT 'No',
  `Awards` varchar(60) NOT NULL DEFAULT 'No',
  `WorkPlace` varchar(40) NOT NULL,
  `Address` varchar(50) NOT NULL,
  `Contact` int(11) NOT NULL,
  `Email` varchar(40) NOT NULL,
  `WorkHour` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `buissnescard`
--

INSERT INTO `buissnescard` (`ID`, `Profession`, `Skills`, `Awards`, `WorkPlace`, `Address`, `Contact`, `Email`, `WorkHour`) VALUES
(1, 'Software Engineer', 'AngularJs, Ionic, Java', 'SCPJP, RedHat', 'Millenium  IT', 'Malabe,baththaramulla', 112567876, 'saman.MIT@gmail.com', '8.00AM-6.00PM');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `cid` int(11) NOT NULL,
  `gid` int(11) NOT NULL,
  `postid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `comment` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`cid`, `gid`, `postid`, `userid`, `comment`) VALUES
(1, 73, 2, 2, 'cvxcvc'),
(7, 73, 2, 1, 'd'),
(8, 73, 2, 1, 'g'),
(9, 73, 2, 1, 'h'),
(18, 73, 2, 1, 'kkkkkkkk'),
(19, 73, 2, 1, 'kkkkkkkk'),
(20, 73, 2, 1, 'lll'),
(21, 73, 2, 1, 'lklk'),
(22, 73, 2, 1, 'sdsdsd'),
(24, 73, -1, 1, 'nbnb'),
(25, -1, 19, 1, 'dcd'),
(26, -1, 19, 1, 'cvc'),
(28, 74, 21, 1, 'bjbj'),
(29, 74, 21, 1, 'bjbj'),
(32, 74, 44, 1, 'ml,m'),
(33, 85, 45, 1, 'mnmnmnmnm'),
(37, 74, 19, 1, 'nnnnmmnn'),
(38, 74, 19, 1, 'hi'),
(39, 85, 2, 1, 'xcxc'),
(40, 73, 2, 1, 'ghghh'),
(41, 74, 22, 1, 'sas'),
(42, 85, 45, 1, 'mmn'),
(43, 74, 45, 1, 'xxcxc'),
(48, 85, 46, 1, 'mn m'),
(49, 74, 47, 1, 'xcxcxcxxccxccxcxcc'),
(54, 73, 2, 1, 'hj'),
(55, 73, 2, 1, 'good'),
(58, 73, 2, 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `disableadd`
--

CREATE TABLE `disableadd` (
  `ID` int(11) NOT NULL,
  `MemID` int(11) NOT NULL,
  `Status` int(11) NOT NULL DEFAULT '1',
  `Admin` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `disableadd`
--

INSERT INTO `disableadd` (`ID`, `MemID`, `Status`, `Admin`) VALUES
(8, 1, -1, -1),
(9, 0, 1, -1),
(10, 2, 1, -1),
(11, 9, 1, -1),
(12, 10, 1, -1),
(13, 3, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `eventparticipants`
--

CREATE TABLE `eventparticipants` (
  `eventId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `status` varchar(30) NOT NULL,
  `mergebit` int(2) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `eventparticipants`
--

INSERT INTO `eventparticipants` (`eventId`, `userId`, `status`, `mergebit`) VALUES
(1, 1, 'going', 0),
(1, 2, 'interested', 0),
(1, 3, 'interested', 0),
(1, 4, 'interested', 0),
(8, 1, 'interested', 0),
(8, 2, 'going', 0),
(8, 3, 'interested', 0),
(9, 1, 'going', 0),
(9, 2, 'interested', 0);

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `eventName` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `venue` varchar(50) NOT NULL,
  `start_time` varchar(30) NOT NULL,
  `organizerId` int(11) NOT NULL,
  `eventBanner` varchar(500) NOT NULL,
  `description` varchar(150) NOT NULL,
  `status` varchar(50) NOT NULL,
  `end_time` varchar(30) NOT NULL,
  `duration` int(11) NOT NULL,
  `hostedBy` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `eventName`, `date`, `venue`, `start_time`, `organizerId`, `eventBanner`, `description`, `status`, `end_time`, `duration`, `hostedBy`) VALUES
(1, 'Animal Care', '2016-08-22', 'sugathadasa stadium', '10:00', 2, 'img\\savewil.jpg', 'good cause', '', '14:00', 1, 'Doctors Association'),
(9, 'Batch Party', '2016-08-01', 'Hilton', '12:00', 1, 'img\\img2.jpg', '', '', '18:00', 1, ''),
(80, 'fd', '2016-06-16', 'c', '09 : 16', 1, '', 'c', '', '11 : 16', 0, '1994 Old Boys Association'),
(81, 'check1', '2016-07-14', 'df', '9:16', 1, '', '', '', '11:16', 1, '1994 Old Boys Association'),
(82, 'test', '2016-07-20', 'i', '13:0', 2, 'defaultbanner.jpg', 'undefined', '', '17:1', 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `facebookprof`
--

CREATE TABLE `facebookprof` (
  `id` int(11) NOT NULL,
  `Mem_Id` int(11) NOT NULL,
  `FBId` varchar(30) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Picture` varchar(1000) NOT NULL,
  `Gender` varchar(30) NOT NULL,
  `Email` varchar(150) NOT NULL,
  `Age` varchar(30) NOT NULL,
  `Link` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `facebookprof`
--

INSERT INTO `facebookprof` (`id`, `Mem_Id`, `FBId`, `Name`, `Picture`, `Gender`, `Email`, `Age`, `Link`) VALUES
(2, 1, '1210495858990318', 'Sandakelum Tharindu', 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpl1/v/t1.0-1/c53.0.213.320/p320x320/14666312_1273646412675262_590904701608850665_n.jpg?oh=82b44b0b5a4f5abb3334c35f7a1f4034&oe=58C8C7F2&__gda__=1485346616_3df6c002b5a8f6eb1aba03012f3ffea9', 'male', 'undefined', '21', 'https://www.facebook.com/app_scoped_user_id/1210495858990318/');

-- --------------------------------------------------------

--
-- Table structure for table `favouriteadd`
--

CREATE TABLE `favouriteadd` (
  `ID` int(11) NOT NULL,
  `AddId` int(11) NOT NULL,
  `MemId` int(11) NOT NULL,
  `Type` varchar(20) NOT NULL,
  `Title` varchar(40) NOT NULL,
  `Image` varchar(100) NOT NULL,
  `Description` varchar(150) NOT NULL,
  `ContactNo` int(11) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `StartDate` varchar(15) NOT NULL,
  `EndDate` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `favouriteadd`
--

INSERT INTO `favouriteadd` (`ID`, `AddId`, `MemId`, `Type`, `Title`, `Image`, `Description`, `ContactNo`, `Email`, `StartDate`, `EndDate`) VALUES
(2, 19, 1, 'Event', 'Get Together', 'img/ad3.png', 'Get Together of 94 batch', 2147483647, 'sandaru@gmail.com', 'Sun Jul 24 2016', 'Sun Jul 31 2016');

-- --------------------------------------------------------

--
-- Table structure for table `followers`
--

CREATE TABLE `followers` (
  `id` int(11) NOT NULL,
  `ownerid` int(11) NOT NULL,
  `followerid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `followers`
--

INSERT INTO `followers` (`id`, `ownerid`, `followerid`) VALUES
(1, 1, 2),
(6, 1, 3),
(7, 1, 35),
(8, 1, 21),
(9, 1, 21);

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE `games` (
  `ID` int(11) NOT NULL,
  `Availability` int(11) NOT NULL
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

CREATE TABLE `groups` (
  `id` int(11) NOT NULL,
  `group_name` varchar(50) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `category` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  `num_participants` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
(89, 'Tours', 'imag/t.jpg', 'Entertainment', 'Let\'s go back to the school time', 0),
(90, 'Learn', 'imag/7DB96bZSYqg8OsoCmDeA_brain.jpg', 'Professinal', 'This is for learning', 0);

-- --------------------------------------------------------

--
-- Table structure for table `group_participants`
--

CREATE TABLE `group_participants` (
  `groupid` int(11) NOT NULL,
  `userid` int(11) NOT NULL
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

CREATE TABLE `group_post` (
  `postid` int(11) NOT NULL,
  `groupid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `descriptions` varchar(1000) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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

CREATE TABLE `linkedin` (
  `LID` int(11) NOT NULL,
  `Mem_Id` int(11) NOT NULL,
  `LinkedId` varchar(20) NOT NULL,
  `firstName` varchar(40) NOT NULL,
  `lastName` varchar(40) NOT NULL,
  `headline` varchar(50) NOT NULL,
  `photo` varchar(250) NOT NULL,
  `numConnections` int(11) NOT NULL,
  `industry` varchar(50) NOT NULL,
  `emailAddress` varchar(50) NOT NULL,
  `summary` varchar(400) NOT NULL,
  `location` varchar(30) NOT NULL,
  `publicProfileUrl` varchar(100) NOT NULL,
  `specialties` varchar(300) NOT NULL,
  `positions` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `linkedin`
--

INSERT INTO `linkedin` (`LID`, `Mem_Id`, `LinkedId`, `firstName`, `lastName`, `headline`, `photo`, `numConnections`, `industry`, `emailAddress`, `summary`, `location`, `publicProfileUrl`, `specialties`, `positions`) VALUES
(12, 0, 'jE1xcBd4GA', 'Sandakelum', 'Tharindu', 'Software Engineer', 'https://media.licdn.com/mpr/mprx/0_tmY0ctNwrqNTmzgtO0HlxQvwNPThmkji4mQ0-Q3wKBoTIqK74mHAMQvwchHTIzjmNEQAM89Iprw3DhctRjUi0QcFMrw8DhqaZjUpqbGotAY2F9ftquDtN12RJ5lKkh_0AY01PvetT4E', 244, 'Computer Software', 'mr.stadikaram@gmail.com', 'Looking for a Training or a Internship related to Software Development and other Software related fi', 'Sri Lanka', 'https://www.linkedin.com/in/sandakelum-tharindu-499a96113', 'undefined', 'undefined'),
(13, 1, 'v3Sch_3dy7', 'Sandakelum', 'Tharindu', 'Associate Automation Expertise at VirtusaPolaris', 'https://media.licdn.com/mpr/mprx/0_tmY0ctNwrqNTmzgtO0HlxQvwNPThmkji4mQ0-Q3wKBoTIqK74mHAMQvwchHTIzjmNEQAM89Iprw3DhctRjUi0QcFMrw8DhqaZjUpqbGotAY2F9ftquDtN12RJ5lKkh_0AY01PvetT4E', 450, 'Computer Software', 'mr.stadikaram@gmail.com', 'Looking for a Training or a Internship related to Software Development and other Software related fields', 'Sri Lanka', 'https://www.linkedin.com/in/sandakelum-tharindu-499a96113', 'undefined', 'undefined');

-- --------------------------------------------------------

--
-- Table structure for table `postadvertiesement`
--

CREATE TABLE `postadvertiesement` (
  `IDAdd` int(11) NOT NULL,
  `Type` varchar(20) NOT NULL,
  `Title` varchar(40) NOT NULL,
  `Image` varchar(100) NOT NULL,
  `Description` varchar(150) NOT NULL,
  `ContactNo` int(11) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `StartDate` varchar(15) NOT NULL,
  `EndDate` varchar(15) NOT NULL,
  `CDate` varchar(40) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `postadvertiesement`
--

INSERT INTO `postadvertiesement` (`IDAdd`, `Type`, `Title`, `Image`, `Description`, `ContactNo`, `Email`, `StartDate`, `EndDate`, `CDate`, `status`) VALUES
(19, 'Event', 'Get Together', 'img/ad3.png', 'Get Together of 94 batch', 2147483647, 'sandaru@gmail.com', 'Sun Jul 24 2016', 'Sun Jul 31 2016', '2016-07-23 05:46:15', 0),
(20, 'Promote', 'Batch T-Shirt', 'img/mer1.jpg', 'Batch t-Shirt is available', 714536728, 'repa@gmail.com', 'Thu Aug 04 2016', 'Wed Aug 31 2016', '2016-07-23 05:52:28', 1);

-- --------------------------------------------------------

--
-- Table structure for table `usendadvertiesement`
--

CREATE TABLE `usendadvertiesement` (
  `SID` int(11) NOT NULL,
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
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usendadvertiesement`
--

INSERT INTO `usendadvertiesement` (`SID`, `MemberId`, `title`, `Selection`, `Image`, `Description`, `ContactNo`, `Email`, `StartDate`, `EndDate`, `sendDate`, `status`) VALUES
(9, 1, 'Get Together', 'Event', 'img/ad3.jpg', 'Get Together of 94 batch', 2147483647, 'sandaru@gmail.com', 'Sun Jul 24 2016 00:00:00 GMT 0', 'Sun Jul 31 2016 00:00:00 GMT 0', '2016-07-23 05:46:15', 1),
(10, 1, 'Exhibition', 'Merchent', 'img/ad1.jpg', 'Exhibition for fund raising', 1123456789, 'kumar@gmail.com', 'Fri Jul 29 2016 00:00:00 GMT 0', 'Fri Aug 05 2016 00:00:00 GMT 0', '2016-07-23 05:56:10', -1),
(12, 1, 'hy', 'Event', 'img/ad2.png', 'frg', 3454, 'fgf@hnm', 'Thu Jul 28 2016 00:00:00 GMT 0', 'Thu Jul 14 2016 00:00:00 GMT 0', '2016-07-24 12:35:08', -1),
(13, 1, 'Padura', 'Event', 'img/ad1.png', 'Padura with 94 group', 768945632, 'haresh@gmail.com', 'Tue Jul 19 2016 00:00:00 GMT 0', 'Wed Aug 03 2016 00:00:00 GMT 0', '2016-07-24 19:41:11', -1),
(14, 9, 'Hy', 'Merchent', 'img/ad2.png', 'sfds', 0, 'sas@dd', 'Tue Jul 19 2016 00:00:00 GMT 0', 'Thu Jul 28 2016 00:00:00 GMT 0', '2016-07-24 20:05:49', 0),
(15, 1, 'test 1', 'Promote', 'img/ad3.png', 'testing testing', 712365985, 'test@134.com', '2016-09-24', '2016-09-29', '2016-09-24 01:57:57', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `class` varchar(20) NOT NULL,
  `dob` varchar(200) NOT NULL,
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
  `reset` int(10) NOT NULL DEFAULT '0',
  `image` varchar(255) NOT NULL DEFAULT 'images/default.png'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `class`, `dob`, `address`, `contact_no`, `home`, `profession`, `office_address`, `office_phone`, `office_email`, `role`, `request`, `requestdate`, `reset`, `image`) VALUES
(1, 'Saman Perera', 'p', '12345', '13B', '1992-11-21', '115/1,Galle', 712344533, 112340967, 'Businesman', 'Alexandrite, Galle', 712345662, '', 'member', 1, '0000-00-00', 1, 'images/1478777034611.jpg'),
(2, 'Harshani Yik', 'harshani', 'sep', '13C', '1994-07-09', 'Kegalle', 0, 0, 'Engineer', '', 0, '', 'admin', 1, '0000-00-00', 1, 'images/1477574590043.jpg'),
(3, 'hashan', 'h', '123', '13A', '1992-10-04', 'Matara', 0, 0, 'Doctor', '', 0, '', 'member', 1, '0000-00-00', 1, 'images/default.png'),
(21, 'kamal', 'undefined', '12345', '13A', '0000-00-00', 'Kandy', 0, 0, 'Doctor', '', 0, '', 'member', 1, '0000-00-00', 0, 'images/default.png'),
(25, 'pawan', 'g@mail.com', '12345', '13B', '0000-00-00', 'Galle', 0, 0, 'Businessman', '', 0, '', 'member', 2, '0000-00-00', 0, 'images/default.png'),
(34, 'hasakelum', 'p@gmail.com', '', '13B', '0000-00-00', 'Matara', 0, 0, 'Doctor', '', 0, '', 'member', 2, '2016-06-08', 0, 'images/default.jpg'),
(35, 'aaa', 'bb@gmail.com', '', '13B', '0000-00-00', 'Galle', 0, 0, 'Engineer', '', 0, '', 'member', 0, '2016-06-09', 0, 'images/default.jpg'),
(36, 'kamal', 'kamal@gamail.com', '', '13B', '0000-00-00', '', 0, 0, 'Engineer', '', 0, '', 'member', 0, '2016-06-10', 0, 'images/default.jpg'),
(37, 'pawan', 'Agma@ol.com', '12345', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 1, '2016-06-11', 0, 'images/default.jpg'),
(38, 'aa', 'a@gmail.com', '12345', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 1, '2016-06-12', 0, 'images/default.png'),
(39, 'aaa', 'aaa@gmail.com', '12345', '13B', '0000-00-00', 'Galle', 714444444, 912222222, '', '', 0, '', 'member', 1, '2016-06-13', 0, 'images/default.jpg'),
(41, 'pawan', 'pawan@gmil.com', '12345', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 1, '2016-06-14', 0, 'images/default.jpg'),
(43, 'fff', 'ff@gmail.com', '12345', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 1, '2016-06-14', 0, 'images/default.jpg'),
(44, 'i', 'gg@gmail.com', '12345', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 1, '2016-06-14', 0, 'images/default.jpg'),
(57, 'p00', 'd@gmail.com', '', '13A', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 2, '2016-06-14', 0, 'images/default.jpg'),
(58, 'pp', 'hhhhh@gmail.com', '', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 2, '2016-06-14', 0, 'images/default.jpg'),
(59, 'pp', 'ght@gmail.com', '', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 2, '2016-06-14', 0, 'images/default.jpg'),
(60, 'pawan', 'q@gmail.com', '', '13A', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 2, '2016-06-14', 0, 'images/default.jpg'),
(61, 'pp', 'h@gmail.com', '12345', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 1, '2016-06-14', 0, 'images/default.jpg'),
(64, 'test', 'test@gmail.com', '12345', '13A', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 1, '2016-06-15', 0, 'images/default.jpg'),
(65, 'saman', 'saman@gmail.com', '', '13A', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 1, '2016-07-11', 0, 'images/default.jpg'),
(66, 'test', 'test4@gmail.com', '', '13A', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 1, '2016-08-12', 0, 'images/default.jpg'),
(68, 'alex', 'alexandritegalle@gmail.com', '', '13A', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 0, '2016-09-22', 0, 'images/default.jpg'),
(83, 'Praveen Dias', 'praveendias94@gmail.com', '83r9483', '13B', '1977-12-16', '', 0, 0, '', '', 0, '', 'member', 1, '2016-10-28', 0, 'images/default.png'),
(84, 'Pawan Dasanga Gamage', 'gamagepawan@gmail.com', '', '13B', '1977-12-15', '', 0, 0, '', '', 0, '', 'member', 0, '2016-11-10', 0, 'images/default.png');

-- --------------------------------------------------------

--
-- Table structure for table `user_family`
--

CREATE TABLE `user_family` (
  `family_id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `spouse_name` varchar(50) NOT NULL,
  `child_name` varchar(50) DEFAULT NULL,
  `type` varchar(10) DEFAULT NULL,
  `date_of_birth` varchar(200) DEFAULT NULL,
  `school_name` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_family`
--

INSERT INTO `user_family` (`family_id`, `userid`, `spouse_name`, `child_name`, `type`, `date_of_birth`, `school_name`) VALUES
(11, 1, 'hh', 'null', 's', 'null', 0),
(19, 39, 'ggg', 'null', 's', 'null', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buissnescard`
--
ALTER TABLE `buissnescard`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `disableadd`
--
ALTER TABLE `disableadd`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `eventparticipants`
--
ALTER TABLE `eventparticipants`
  ADD PRIMARY KEY (`eventId`,`userId`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `facebookprof`
--
ALTER TABLE `facebookprof`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `favouriteadd`
--
ALTER TABLE `favouriteadd`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `followers`
--
ALTER TABLE `followers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `group_participants`
--
ALTER TABLE `group_participants`
  ADD PRIMARY KEY (`groupid`,`userid`);

--
-- Indexes for table `group_post`
--
ALTER TABLE `group_post`
  ADD PRIMARY KEY (`postid`);

--
-- Indexes for table `linkedin`
--
ALTER TABLE `linkedin`
  ADD PRIMARY KEY (`LID`);

--
-- Indexes for table `postadvertiesement`
--
ALTER TABLE `postadvertiesement`
  ADD PRIMARY KEY (`IDAdd`);

--
-- Indexes for table `usendadvertiesement`
--
ALTER TABLE `usendadvertiesement`
  ADD PRIMARY KEY (`SID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_family`
--
ALTER TABLE `user_family`
  ADD PRIMARY KEY (`family_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
--
-- AUTO_INCREMENT for table `disableadd`
--
ALTER TABLE `disableadd`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;
--
-- AUTO_INCREMENT for table `facebookprof`
--
ALTER TABLE `facebookprof`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `favouriteadd`
--
ALTER TABLE `favouriteadd`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `followers`
--
ALTER TABLE `followers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;
--
-- AUTO_INCREMENT for table `group_post`
--
ALTER TABLE `group_post`
  MODIFY `postid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
--
-- AUTO_INCREMENT for table `linkedin`
--
ALTER TABLE `linkedin`
  MODIFY `LID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `postadvertiesement`
--
ALTER TABLE `postadvertiesement`
  MODIFY `IDAdd` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT for table `usendadvertiesement`
--
ALTER TABLE `usendadvertiesement`
  MODIFY `SID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;
--
-- AUTO_INCREMENT for table `user_family`
--
ALTER TABLE `user_family`
  MODIFY `family_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
