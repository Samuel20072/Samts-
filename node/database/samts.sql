-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-08-2024 a las 06:04:07
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `samts`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `contenido` text COLLATE utf8_spanish2_ci NOT NULL,
  `autor` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `fecha_publicacion` date DEFAULT NULL,
  `categoria` int(11) DEFAULT NULL,
  `vistas` int(11) DEFAULT 0,
  `Corazones` int(11) DEFAULT 0,
  `destacado` tinyint(1) DEFAULT 0,
  `creado_en` timestamp NOT NULL DEFAULT current_timestamp(),
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `articles`
--

INSERT INTO `articles` (`id`, `titulo`, `contenido`, `autor`, `fecha_publicacion`, `categoria`, `vistas`, `Corazones`, `destacado`, `creado_en`, `createdAt`, `updatedAt`) VALUES
(1, 'PHP', 'PHP (acrónimo recursivo de PHP: Hypertext Preprocessor) es un lenguaje de código abierto muy popular especialmente adecuado para el desarrollo web y que puede ser incrustado en HTML.', 'Samu0912', '2024-08-26', 321, 32, 0, 1, '2024-08-26 20:54:03', '2024-08-26 21:36:33', '2024-08-26 21:36:33'),
(2, 'Ejeplo de como ser inteligente', 'No hay duda de que la inteligencia es una cualidad muy valorada en nuestra sociedad, por eso somos muchos los que perseguimos el hábito de aumentar y mejorar no solo nuestro conocimiento o cultura, sino también nuestra capacidad de respuesta intelectual y emocional a todos los retos que se nos plantean día a día. La inteligencia se define como la facultad con la que cuenta nuestra mente para aprender y entender los conocimientos, para razonar y tomar decisiones de forma acertada, por eso todo lo que hacemos en nuestro día a día cuenta ¡y de qué manera!¿Quieres destacar un poco más por tu inteligencia? Sigue leyendo porque en este artículo de unCOMO te damos 9 hábitos para ser más inteligente que te ayudarán a hacerte notar.', 'Samu0912', '0000-00-00', 321, 0, 0, 1, '2024-08-26 21:58:51', '2024-08-27 02:58:51', '2024-08-27 02:58:51');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `nameCategory` varchar(20) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`id`, `nameCategory`) VALUES
(321, 'Tecnologia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `nombreCompleto` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `nombreUsuario` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `email` varchar(80) COLLATE utf8_spanish2_ci NOT NULL,
  `password` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `descripcion` char(100) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`nombreCompleto`, `nombreUsuario`, `email`, `password`, `descripcion`) VALUES
('Samuel Torres Ospina', 'Samu0912', 'samueltorresospina312@gmail.com', '2020', 'me llamo samuel y tengo 17 años y estudio en el SENA galan');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `autor` (`autor`),
  ADD KEY `categoria` (`categoria`);

--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`nombreUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=322;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `articles`
--
ALTER TABLE `articles`
  ADD CONSTRAINT `articles_ibfk_1` FOREIGN KEY (`autor`) REFERENCES `users` (`nombreUsuario`),
  ADD CONSTRAINT `articles_ibfk_2` FOREIGN KEY (`categoria`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
