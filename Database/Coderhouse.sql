-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-04-2022 a las 23:22:54
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `coderhouse`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `idCarrito` int(10) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`idCarrito`, `timestamp`) VALUES
(2, '2022-04-08 01:52:53');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `idProducto` int(10) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `nombre` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(140) COLLATE utf8_spanish_ci NOT NULL,
  `codigo` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `url` varchar(140) COLLATE utf8_spanish_ci NOT NULL,
  `precio` int(10) NOT NULL,
  `stock` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`idProducto`, `timestamp`, `nombre`, `descripcion`, `codigo`, `url`, `precio`, `stock`) VALUES
(1, '2022-04-08 00:23:08', 'Carne', 'Un pedaso de carne', 'car55', 'www.google.com', 555, 77);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto_carrito`
--

CREATE TABLE `producto_carrito` (
  `idProductoCarrito` int(10) NOT NULL,
  `idCarrito` int(10) NOT NULL,
  `idProducto` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `producto_carrito`
--

INSERT INTO `producto_carrito` (`idProductoCarrito`, `idCarrito`, `idProducto`) VALUES
(1, 2, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`idCarrito`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`idProducto`);

--
-- Indices de la tabla `producto_carrito`
--
ALTER TABLE `producto_carrito`
  ADD PRIMARY KEY (`idProductoCarrito`),
  ADD KEY `idProducto` (`idProducto`),
  ADD KEY `idCarrito` (`idCarrito`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `idCarrito` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `idProducto` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `producto_carrito`
--
ALTER TABLE `producto_carrito`
  MODIFY `idProductoCarrito` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `producto_carrito`
--
ALTER TABLE `producto_carrito`
  ADD CONSTRAINT `producto_carrito_ibfk_1` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`idProducto`),
  ADD CONSTRAINT `producto_carrito_ibfk_2` FOREIGN KEY (`idCarrito`) REFERENCES `carrito` (`idCarrito`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
