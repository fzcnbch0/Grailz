-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 21 Maj 2024, 22:08
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
(1, 'Classic T-Shirt', 'A plain t-shirt for everyday wear.', '19.99'),
(2, 'Denim Jeans', 'Blue denim jeans with a comfortable fit.', '49.99'),
(3, 'Leather Jacket', 'A stylish leather jacket for cool weather.', '199.99'),
(4, 'Summer Dress', 'A light, floral summer dress.', '29.99'),
(5, 'Sweatpants', 'Comfortable sweatpants for lounging.', '39.99'),
(6, 'Winter Coat', 'A heavy winter coat to keep you warm.', '149.99'),
(7, 'Sports Shoes', 'Lightweight and durable sports shoes.', '59.99'),
(8, 'Baseball Cap', 'A stylish cap to complete your look.', '14.99'),
(9, 'Sunglasses', 'Protect your eyes with these cool shades.', '24.99'),
(10, 'Sneakers', 'Trendy sneakers for everyday wear.', '69.99');

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
(1, 'Men', 'Tops', 'M', 'Brand A'),
(2, 'Women', 'Bottoms', 'L', 'Brand B'),
(3, 'Men', 'Outerwear', 'XL', 'Brand C'),
(4, 'Women', 'Dresses', 'M', 'Brand D'),
(5, 'Men', 'Bottoms', 'L', 'Brand E'),
(6, 'Men', 'Outerwear', 'L', 'Brand F'),
(7, 'Unisex', 'Footwear', '10', 'Brand G'),
(8, 'Unisex', 'Accessories', 'One Size', 'Brand H'),
(9, 'Unisex', 'Accessories', 'One Size', 'Brand I'),
(10, 'Unisex', 'Footwear', '9', 'Brand J');

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
(10, 29, 10.5);

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
(1, '/images/classic_tshirt.jpg'),
(2, '/images/denim_jeans.jpg'),
(3, '/images/leather_jacket.jpg'),
(4, '/images/summer_dress.jpg'),
(5, '/images/sweatpants.jpg'),
(6, '/images/winter_coat.jpg'),
(7, '/images/sports_shoes.jpg'),
(8, '/images/baseball_cap.jpg'),
(9, '/images/sunglasses.jpg'),
(10, '/images/sneakers.jpg');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `balance` decimal(10,2) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `user`
--

INSERT INTO `user` (`user_id`, `name`, `balance`, `city`) VALUES
(1, 'John Doe', '100.00', 'New York'),
(2, 'Jane Smith', '150.50', 'Los Angeles'),
(3, 'Alice Johnson', '75.25', 'Chicago'),
(4, 'Bob Brown', '50.00', 'Houston'),
(5, 'Charlie Davis', '200.00', 'Phoenix'),
(6, 'Diana Evans', '300.75', 'Philadelphia'),
(7, 'Frank Green', '125.00', 'San Antonio'),
(8, 'Grace Harris', '80.00', 'San Diego'),
(9, 'Henry Irwin', '90.50', 'Dallas'),
(10, 'Ivy Johnson', '120.00', 'San Jose');

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
(2, 1),
(2, 4),
(3, 5),
(3, 6),
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
(10, 10);

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
(5, 15, 6);

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
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT dla tabeli `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT dla tabeli `user_orders`
--
ALTER TABLE `user_orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

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
