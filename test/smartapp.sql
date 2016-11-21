-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2016 at 11:09 AM
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
(3, 73, 2, 1, 'a'),
(6, 73, 2, 1, 's'),
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
(53, 73, 2, 1, 'gg'),
(54, 73, 2, 1, 'hj'),
(55, 73, 2, 1, 'good'),
(57, -1, 21, 1, 'wooow'),
(58, 73, 2, 70, 'good');

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
(8, 1, 1, 1),
(9, 0, 1, 1),
(10, 2, 1, 1),
(11, 9, 1, 1),
(12, 10, 1, 1),
(13, 67, 1, 1),
(14, 70, -1, 1),
(15, 38, 1, 1),
(16, 3, 1, 1);

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
(8, 'Blood donation camp', '2016-08-15', 'Brandix headoffice', '09:00', 3, 'img\\img1.jpg', 'cc', '', '16:00', 1, 'Doctors Association'),
(9, 'Batch Party', '2016-08-01', 'Hilton', '12:00', 1, 'img\\img2.jpg', '', '', '18:00', 1, ''),
(80, 'fd', '2016-06-16', 'c', '09 : 16', 1, '', 'c', '', '11 : 16', 0, '1994 Old Boys Association'),
(81, 'check1', '2016-07-14', 'df', '9:16', 1, '', '', '', '11:16', 1, '1994 Old Boys Association'),
(82, 'test', '2016-07-20', 'i', '13:0', 2, 'defaultbanner.jpg', 'undefined', '', '17:1', 1, '');

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
(73, 'Cricket', 'http://localhost/test/imag/42XUz96SjSFGiQjoKJcw_cricket.png', 'Professinal', 'This is for cricket fans', 0),
(82, 'Australians', 'http://localhost/test/imag/w5Gq0NztTxWrXMzABzRZ_australia.png', 'Professinal', 'This group is for the old boys of royal collage who lives in Australia ', 0),
(83, 'Music', 'http://localhost/test/imag/GF1b6BcoTo678SCH8oz8_music.jpg', 'Entertainment', 'This group is for music fans of royal collage', -10),
(84, 'Enginners', 'http://localhost/test/imag/bgcHRKzFRIyly4qlg3PE_hz2dDXCgRTSH3g4ep6Am_ingineers.jpg', 'Professinal', 'This is the group of engineers  ', 0),
(85, 'IT', 'http://localhost/test/imag/download (5).jpg', 'Professinal', 'We are the old boys of royal collage currently is in the IT field', -5),
(86, 'Doctors', 'http://localhost/test/imag/5rw2GKOjSu6XIInHz9il_doctor.jpg', 'Professinal', 'This is the group of doctors in royal collage 94 batch', 0),
(88, 'Business', 'http://localhost/test/imag/b.jpg', 'Professional', 'This is about business', 0),
(89, 'Tours', 'http://localhost/test/imag/t.jpg', 'Entertainment', 'Let\'s go back to the school time', 0),
(90, 'Learn', 'http://localhost/test/imag/7DB96bZSYqg8OsoCmDeA_brain.jpg', 'Professinal', 'This is for learning', 0),
(91, 'xxx', 'xcxcx', 'Professional', 'xcxc', 0),
(92, 'group', 'image.png', 'Entertainment', 'about', 0),
(93, 'erji', 'j', 'Professional', 'jojopj', 0),
(94, 'erjii', 'j', 'Professional', 'jojopj', 0),
(95, 'hariii', 'j', 'Professional', 'jojopj', 0),
(96, 'dfw', 'dkvndvn', 'dvmdk', '', 0),
(97, 'hariiiii', 'j', 'Professional', 'jojopj', 0);

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
(73, 70),
(82, 1),
(82, 21),
(85, 1),
(85, 2),
(89, 1),
(90, 1),
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
(2, 73, 1, 'We won the first place', 'http://localhost/test/imag/c1.jpg', '2016-06-08', '07:31:16'),
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
(19, -1, 1, 's', 'http://localhost/test/imag/p3.jpg', '2016-06-08', '09:04:41'),
(20, -1, 1, 'notice', 'http://localhost/test/imag/p2.jpg', '2016-06-08', '12:23:59'),
(21, -1, 1, 'wow', 'http://localhost/test/imag/p1.jpg', '2016-06-08', '13:06:50'),
(26, -1, 1, 'victory of royal', 'http://localhost/test/imag/p3.jpg', '2016-06-10', '11:45:23'),
(29, -1, 0, 'Here we go', 'http://localhost/test/imag/p3.jpg', '2016-06-14', '15:56:49'),
(41, 82, 1, 'Here we are', 'http://localhost/test/imag/ra2.jpg', '2016-06-15', '11:30:00'),
(48, -1, 1, 'notice', 'come on this friday', '2016-08-19', '10:30:28'),
(53, 83, 1, 'notice', 'http://localhost/test/imag/c1.jpg', '2016-08-28', '21:16:56'),
(54, 85, 1, 'notice', 'http://localhost/test/imag/c1.jpg', '2016-08-28', '21:18:39'),
(55, 73, 2, 'notice', 'http://localhost/test/imag/c1.jpg', '2016-08-28', '21:36:59'),
(66, 74, 1, 'xzzxzxzxxz', 'undefined', '2016-08-31', '23:40:50');

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
  `summary` varchar(100) NOT NULL,
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
(13, 1, 'jE1xcBd4GA', 'Sandakelum', 'Tharindu', 'Software Engineer', 'https://media.licdn.com/mpr/mprx/0_tmY0ctNwrqNTmzgtO0HlxQvwNPThmkji4mQ0-Q3wKBoTIqK74mHAMQvwchHTIzjmNEQAM89Iprw3DhctRjUi0QcFMrw8DhqaZjUpqbGotAY2F9ftquDtN12RJ5lKkh_0AY01PvetT4E', 336, 'Computer Software', 'mr.stadikaram@gmail.com', 'Looking for a Training or a Internship related to Software Development and other Software related fi', 'Sri Lanka', 'https://www.linkedin.com/in/sandakelum-tharindu-499a96113', 'undefined', 'undefined');

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `nid` int(11) NOT NULL,
  `grpname` varchar(500) NOT NULL,
  `gid` int(11) NOT NULL,
  `image` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`nid`, `grpname`, `gid`, `image`) VALUES
(7, 'erji', 93, 'j'),
(8, 'erjii', 94, 'j'),
(9, 'hariii', 95, 'j'),
(10, 'dfw', 96, 'dkvndvn'),
(11, 'hariiiii', 97, 'j');

-- --------------------------------------------------------

--
-- Table structure for table `notificatio_member`
--

CREATE TABLE `notificatio_member` (
  `iid` int(11) NOT NULL,
  `nid` int(11) NOT NULL,
  `mid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notificatio_member`
--

INSERT INTO `notificatio_member` (`iid`, `nid`, `mid`) VALUES
(192, 7, 2),
(193, 7, 3),
(194, 7, 21),
(195, 7, 25),
(196, 7, 34),
(197, 7, 35),
(198, 7, 36),
(199, 7, 37),
(200, 7, 38),
(201, 7, 39),
(202, 7, 41),
(203, 7, 43),
(204, 7, 44),
(205, 7, 57),
(206, 7, 58),
(207, 7, 59),
(208, 7, 60),
(209, 7, 61),
(210, 7, 64),
(211, 7, 65),
(212, 7, 66),
(213, 7, 68),
(214, 7, 70),
(215, 8, 1),
(216, 8, 2),
(217, 8, 3),
(218, 8, 21),
(219, 8, 25),
(220, 8, 34),
(221, 8, 35),
(222, 8, 36),
(223, 8, 37),
(224, 8, 38),
(225, 8, 39),
(226, 8, 41),
(227, 8, 43),
(228, 8, 44),
(229, 8, 57),
(230, 8, 58),
(231, 8, 59),
(232, 8, 60),
(233, 8, 61),
(234, 8, 64),
(235, 8, 65),
(236, 8, 66),
(237, 8, 68),
(238, 8, 70),
(239, 9, 1),
(240, 9, 2),
(241, 9, 3),
(242, 9, 21),
(243, 9, 25),
(244, 9, 34),
(245, 9, 35),
(246, 9, 36),
(247, 9, 37),
(248, 9, 38),
(249, 9, 39),
(250, 9, 41),
(251, 9, 43),
(252, 9, 44),
(253, 9, 57),
(254, 9, 58),
(255, 9, 59),
(256, 9, 60),
(257, 9, 61),
(258, 9, 64),
(259, 9, 65),
(260, 9, 66),
(261, 9, 68),
(262, 9, 70),
(263, 10, 1),
(264, 10, 2),
(265, 10, 3),
(266, 10, 21),
(267, 10, 25),
(268, 10, 34),
(269, 10, 35),
(270, 10, 36),
(271, 10, 37),
(272, 10, 38),
(273, 10, 39),
(274, 10, 41),
(275, 10, 43),
(276, 10, 44),
(277, 10, 57),
(278, 10, 58),
(279, 10, 59),
(280, 10, 60),
(281, 10, 61),
(282, 10, 64),
(283, 10, 65),
(284, 10, 66),
(285, 10, 68),
(286, 10, 70),
(287, 11, 1),
(288, 11, 2),
(289, 11, 3),
(290, 11, 21),
(291, 11, 25),
(292, 11, 34),
(293, 11, 35),
(294, 11, 36),
(295, 11, 37),
(296, 11, 38),
(297, 11, 39),
(298, 11, 41),
(299, 11, 43),
(300, 11, 44),
(301, 11, 57),
(302, 11, 58),
(303, 11, 59),
(304, 11, 60),
(305, 11, 61),
(306, 11, 64),
(307, 11, 65),
(308, 11, 66),
(309, 11, 68),
(310, 11, 70);

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
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(10) NOT NULL,
  `entity` varchar(255) NOT NULL,
  `value` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `entity`, `value`) VALUES
(1, 'profilealter', 1);

-- --------------------------------------------------------

--
-- Table structure for table `timeline`
--

CREATE TABLE `timeline` (
  `id` int(100) NOT NULL DEFAULT '0',
  `title` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `time` datetime NOT NULL,
  `uid` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `reset` int(10) NOT NULL DEFAULT '0',
  `image` varchar(255) NOT NULL DEFAULT 'images/default.png'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `class`, `dob`, `address`, `contact_no`, `home`, `profession`, `office_address`, `office_phone`, `office_email`, `role`, `request`, `requestdate`, `reset`, `image`) VALUES
(1, 'pppp', 'p', '123', '13B', '1992-11-20', 'galle', 712323345, 912222222, 'Businesman', 'Alexandrite, Galle', 712345662, '', 'member', 1, '0000-00-00', 1, 'images/default.png'),
(2, 'harshani', 'harshani', 'sep', '13C', '1994-07-09', 'Kegalle', 0, 0, 'Engineer', '', 0, '', 'admin', 1, '0000-00-00', 1, 'images/default.png'),
(3, 'hashan', 'h', '12345', '13A', '0000-00-00', 'Matara', 0, 0, 'Doctor', '', 0, '', 'rep', 1, '0000-00-00', 1, 'images/default.png'),
(21, 'kamal', 'undefined', '12345', '13A', '0000-00-00', 'Kandy', 0, 0, 'Doctor', '', 0, '', 'class representative', 1, '0000-00-00', 0, 'images/default.jpg'),
(25, 'pawan', 'g@mail.com', '12345', '13B', '0000-00-00', 'Galle', 0, 0, 'Businessman', '', 0, '', 'member', 2, '0000-00-00', 0, 'images/default.jpg'),
(34, 'hasakelum', 'p@gmail.com', '', '13B', '0000-00-00', 'Matara', 0, 0, 'Doctor', '', 0, '', 'member', 2, '2016-06-08', 0, 'images/default.jpg'),
(35, 'aaa', 'bb@gmail.com', '', '13B', '0000-00-00', 'Galle', 0, 0, 'Engineer', '', 0, '', 'member', 0, '2016-06-09', 0, 'images/default.jpg'),
(36, 'kamal', 'kamal@gamail.com', '', '13B', '0000-00-00', '', 0, 0, 'Engineer', '', 0, '', 'member', 0, '2016-06-10', 0, 'images/default.jpg'),
(37, 'pawan', 'Agma@ol.com', '12345', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 1, '2016-06-11', 0, 'images/default.jpg'),
(38, 'aa', 'a@gmail.com', '12345', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 1, '2016-06-12', 0, 'images/default.jpg'),
(39, 'aaa', 'aaa@gmail.com', '12345', '13B', '0000-00-00', 'Galle', 714444444, 912222222, '', '', 0, '', 'member', 1, '2016-06-13', 0, 'images/default.jpg'),
(41, 'pawan', 'pawan@gmil.com', '12345', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 1, '2016-06-14', 0, 'images/default.jpg'),
(43, 'fff', 'ff@gmail.com', '12345', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 1, '2016-06-14', 0, 'images/default.jpg'),
(44, 'i', 'gg@gmail.com', '12345', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 1, '2016-06-14', 0, 'images/default.jpg'),
(57, 'p00', 'd@gmail.com', '', '13A', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 2, '2016-06-14', 0, 'images/default.jpg'),
(58, 'pp', 'hhhhh@gmail.com', '', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 2, '2016-06-14', 0, 'images/default.jpg'),
(59, 'pp', 'ght@gmail.com', '', '13B', '0000-00-00', '', 0, 0, '', '', 0, '', 'member', 2, '2016-06-14', 0, 'images/default.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `useralterations`
--

CREATE TABLE `useralterations` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `uid` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
(11, 1, 'hq', 'null', 's', 'null', 0),
(19, 39, 'ggg', 'null', 's', 'null', 0),
(20, 67, 'yik', 'null', 's', 'null', 0),
(23, 1, 'null', 'pppppq', 'c', '2000-9-22', 0);

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
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`nid`);

--
-- Indexes for table `notificatio_member`
--
ALTER TABLE `notificatio_member`
  ADD PRIMARY KEY (`iid`);

--
-- Indexes for table `postadvertiesement`
--
ALTER TABLE `postadvertiesement`
  ADD PRIMARY KEY (`IDAdd`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `timeline`
--
ALTER TABLE `timeline`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `useralterations`
--
ALTER TABLE `useralterations`
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
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;
--
-- AUTO_INCREMENT for table `followers`
--
ALTER TABLE `followers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;
--
-- AUTO_INCREMENT for table `group_post`
--
ALTER TABLE `group_post`
  MODIFY `postid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;
--
-- AUTO_INCREMENT for table `linkedin`
--
ALTER TABLE `linkedin`
  MODIFY `LID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `nid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `notificatio_member`
--
ALTER TABLE `notificatio_member`
  MODIFY `iid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=311;
--
-- AUTO_INCREMENT for table `postadvertiesement`
--
ALTER TABLE `postadvertiesement`
  MODIFY `IDAdd` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `usendadvertiesement`
--
ALTER TABLE `usendadvertiesement`
  MODIFY `SID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;
--
-- AUTO_INCREMENT for table `useralterations`
--
ALTER TABLE `useralterations`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `user_family`
--
ALTER TABLE `user_family`
  MODIFY `family_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
