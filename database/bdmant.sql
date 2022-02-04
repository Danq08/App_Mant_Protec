CREATE DATABASE bd_mant;

USE bd_mant;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE `registrosgeneral` (
  `id` int(11) NOT NULL,
  `fechayhora` timestamp NOT NULL DEFAULT current_timestamp(),
  `categoria` varchar(255) NOT NULL,
  `equipo` varchar(255) NOT NULL,
  `observaciones` varchar(1000) NOT NULL,
  `estado` varchar(255) NOT NULL,
  `foto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;




CREATE TABLE `registrosinyeccion` (
  `id` int(11) NOT NULL,
  `fechayhora` timestamp NOT NULL DEFAULT current_timestamp(),
  `categoria` varchar(255) NOT NULL,
  `equipo` varchar(255) NOT NULL,
  `observaciones` varchar(1000) NOT NULL,
  `estado` varchar(255) NOT NULL,
  `foto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `registrosmoldes` (
  `id` int(11) NOT NULL,
  `fechayhora` timestamp NOT NULL DEFAULT current_timestamp(),
  `categoria` varchar(255) NOT NULL,
  `equipo` varchar(255) NOT NULL,
  `observaciones` varchar(1000) NOT NULL,
  `estado` varchar(255) NOT NULL,
  `foto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



CREATE TABLE `usuarios` (
  `idusuario` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `rol` varchar(255) NOT NULL,
  `usuario` varchar(255) NOT NULL,
  `contraseña` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


ALTER TABLE `registrosgeneral`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `registrosinyeccion`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `registrosmoldes`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idusuario`);


ALTER TABLE `registrosgeneral`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;


ALTER TABLE `registrosinyeccion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

ALTER TABLE `registrosmoldes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `usuarios`
  MODIFY `idusuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;


