-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 31 Maj 2024, 21:24
-- Wersja serwera: 10.4.25-MariaDB
-- Wersja PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `grailz`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `item`
--

CREATE TABLE `item` (
  `item_id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `item`
--

INSERT INTO `item` (`item_id`, `name`, `description`, `price`) VALUES
(1, 'black-levis', 'Classic black Levis jeans for everyday wear.', '19.99'),
(2, 'black-pants', 'Classic black denim jeans with a comfortable fit.', '49.99'),
(3, 'black-print-tshirt', 'Stylish black printed t-shirt for a trendy look.', '199.99'),
(4, 'black-tshirt', 'Simple black t-shirt for casual wear.', '29.99'),
(5, 'blue-jeans', 'Comfortable blue jeans for everyday wear.', '39.99'),
(6, 'boxy-tshirt', 'Loose-fitting boxy t-shirt for a relaxed look.', '149.99'),
(7, 'camo-jacket', 'Trendy camo jacket for a rugged outdoor style.', '59.99'),
(8, 'camo-pants', 'Camouflage print pants for a military-inspired look.', '14.99'),
(9, 'double-knne-pants', 'Stylish double-knee pants for added durability.', '24.99'),
(10, 'vintage-jacket', 'Vintage-style jacket for a retro look.', '69.99'),
(14, 'white-hat', 'Classic white hat to complement any outfit.', '39.99'),
(15, 'white-navy-hat', 'Stylish white and navy hat for a modern look.', '59.99'),
(16, 'white-tshirt', 'Simple white t-shirt for everyday wear.', '79.99');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `item_category`
--

CREATE TABLE `item_category` (
  `item_id` int(11) NOT NULL,
  `department` varchar(100) DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `size` varchar(10) DEFAULT NULL,
  `designer` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `item_category`
--

INSERT INTO `item_category` (`item_id`, `department`, `category`, `size`, `designer`) VALUES
(1, 'Men', 'Tops', 'L', 'Affliction'),
(2, 'Women', 'Bottoms', 'M', 'Vintage'),
(3, 'Men', 'Outerwear', 'XL', 'Y2K'),
(4, 'Women', 'Dresses', 'M', 'Affliction'),
(5, 'Men', 'Bottoms', 'L', 'Vintage'),
(6, 'Men', 'Outerwear', 'L', 'Vintage'),
(7, 'Unisex', 'Footwear', '10', 'Vintage'),
(8, 'Unisex', 'Accessories', 'One Size', 'Affliction'),
(9, 'Unisex', 'Accessories', 'One Size', 'Y2K'),
(10, 'Unisex', 'Footwear', '9', 'Vintage'),
(14, 'Men', 'Tops', 'L', 'Affliction'),
(15, 'Women', 'Bottoms', 'M', 'Vintage'),
(16, 'Men', 'Outerwear', 'M', 'Y2K');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `measurements`
--

CREATE TABLE `measurements` (
  `item_id` int(11) NOT NULL,
  `length` float DEFAULT NULL,
  `width` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `measurements`
--

INSERT INTO `measurements` (`item_id`, `length`, `width`) VALUES
(1, 28.5, 18),
(2, 40, 20),
(3, 25, 22),
(4, 35, 16),
(5, 42, 22.5),
(6, 48, 24),
(7, 30, 10),
(8, 7, 6.5),
(9, 5.5, 5),
(10, 29, 10.5),
(14, 30, 20),
(15, 35, 18.5),
(16, 27, 22);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `offer`
--

CREATE TABLE `offer` (
  `item_id` int(11) NOT NULL,
  `image_path` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `offer`
--

INSERT INTO `offer` (`item_id`, `image_path`) VALUES
(1, '/public/products/black-levis.jpg'),
(2, '/products/black-pants.jpg'),
(3, '/products/black-print-tshirt.jpg'),
(4, '/products/black-tshirt.jpg'),
(5, '/products/blue-jeans.jpg'),
(6, '/products/boxy-tshirt.jpg'),
(7, '/products/camo-jacket.jpg'),
(8, '/products/camo-pants.jpg'),
(9, '/products/double-knne-pants.jpg'),
(10, '/products/vintage-jacket.jpg'),
(14, '/products/white-hat.jpg'),
(15, '/products/white-navy-hat.jpg'),
(16, '/products/white-tshirt.jpg');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `balance` decimal(10,2) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `user`
--

INSERT INTO `user` (`user_id`, `name`, `balance`, `city`, `password`) VALUES
(1, 'John Doe', '100.00', 'New York', 'password1'),
(2, 'Jane Smith', '150.50', 'Los Angeles', 'password2'),
(3, 'Alice Johnson', '75.25', 'Chicago', 'password3'),
(4, 'Bob Brown', '50.00', 'Houston', 'password4'),
(5, 'Charlie Davis', '200.00', 'Phoenix', 'password5'),
(6, 'Diana Evans', '300.75', 'Philadelphia', 'password6'),
(7, 'Frank Green', '125.00', 'San Antonio', 'password7'),
(8, 'Grace Harris', '80.00', 'San Diego', 'password8'),
(9, 'Henry Irwin', '90.50', 'Dallas', 'password9'),
(10, 'Ivy Johnson', '120.00', 'San Jose', 'password10'),
(11, 'John Doe', NULL, 'New York', '$2a$10$rNlov4cfckGiyp8RLzmwcuUyzaXPpmrktszX5ITHqclifnjUrfAN6'),
(12, 'John Doe2', NULL, 'New York', '$2a$10$kDY9UMgg1X6Kt5S1HgbPBeTWhk25Me2AMehqaRBceRltcw/QDJXf2'),
(13, 'John Doe2', NULL, 'New York', '$2a$10$j59CvzWR2cULcYIemd/Y6uY0dOinRgZzBjmYGrIZkDYoONKehTEES'),
(14, 'John Doe2', NULL, 'neww', '$2a$10$Ixy5f/0fQWx0XPgJQxaw0.15khFpwblQCGp8oOug5KeECHatgtvSO'),
(15, 'John Doe11', NULL, NULL, 'password2'),
(16, '1', NULL, NULL, '1'),
(17, 'bruno', NULL, 'poznan', 'szwec');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user_cart`
--

CREATE TABLE `user_cart` (
  `user_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `user_cart`
--

INSERT INTO `user_cart` (`user_id`, `item_id`) VALUES
(1, 2),
(1, 3),
(1, 14),
(2, 1),
(2, 4),
(2, 15),
(3, 5),
(3, 6),
(3, 16),
(4, 7),
(4, 8),
(5, 9),
(5, 10),
(6, 1),
(6, 2),
(7, 3),
(7, 4),
(8, 5),
(8, 6),
(9, 7),
(9, 8),
(10, 9),
(10, 10),
(16, 3);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user_orders`
--

CREATE TABLE `user_orders` (
  `user_id` int(11) DEFAULT NULL,
  `order_id` int(11) NOT NULL,
  `item_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `user_orders`
--

INSERT INTO `user_orders` (`user_id`, `order_id`, `item_id`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 4),
(5, 5, 5),
(6, 6, 6),
(7, 7, 7),
(8, 8, 8),
(9, 9, 9),
(10, 10, 10),
(1, 11, 2),
(2, 12, 3),
(3, 13, 4),
(4, 14, 5),
(5, 15, 6),
(1, 16, 14),
(2, 17, 15),
(3, 18, 16);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`item_id`);

--
-- Indeksy dla tabeli `item_category`
--
ALTER TABLE `item_category`
  ADD PRIMARY KEY (`item_id`);

--
-- Indeksy dla tabeli `measurements`
--
ALTER TABLE `measurements`
  ADD PRIMARY KEY (`item_id`);

--
-- Indeksy dla tabeli `offer`
--
ALTER TABLE `offer`
  ADD PRIMARY KEY (`item_id`);

--
-- Indeksy dla tabeli `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indeksy dla tabeli `user_cart`
--
ALTER TABLE `user_cart`
  ADD PRIMARY KEY (`user_id`,`item_id`),
  ADD KEY `item_id` (`item_id`);

--
-- Indeksy dla tabeli `user_orders`
--
ALTER TABLE `user_orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `item_id` (`item_id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `item`
--
ALTER TABLE `item`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT dla tabeli `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT dla tabeli `user_orders`
--
ALTER TABLE `user_orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `item_category`
--
ALTER TABLE `item_category`
  ADD CONSTRAINT `item_category_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `item` (`item_id`);

--
-- Ograniczenia dla tabeli `measurements`
--
ALTER TABLE `measurements`
  ADD CONSTRAINT `measurements_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `item` (`item_id`);

--
-- Ograniczenia dla tabeli `offer`
--
ALTER TABLE `offer`
  ADD CONSTRAINT `offer_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `item` (`item_id`);

--
-- Ograniczenia dla tabeli `user_cart`
--
ALTER TABLE `user_cart`
  ADD CONSTRAINT `user_cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `user_cart_ibfk_2` FOREIGN KEY (`item_id`) REFERENCES `item` (`item_id`);

--
-- Ograniczenia dla tabeli `user_orders`
--
ALTER TABLE `user_orders`
  ADD CONSTRAINT `user_orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `user_orders_ibfk_2` FOREIGN KEY (`item_id`) REFERENCES `item` (`item_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
