-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 19-11-2026 a las 18:55:46
-- Versión del servidor: 8.0.46
-- Versión de PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ourpath`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administra`
--

CREATE TABLE `administra` (
  `id_administra` int NOT NULL,
  `id_reg` int NOT NULL,
  `id_usuario` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulo`
--

CREATE TABLE `articulo` (
  `id_articulo` int NOT NULL,
  `nombre` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `precio` float NOT NULL,
  `stock` int NOT NULL,
  `categoria` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `imagen` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `articulo`
--

INSERT INTO `articulo` (`id_articulo`, `nombre`, `descripcion`, `precio`, `stock`, `categoria`, `imagen`) VALUES
(1, 'PokÃ©mon Rojo', 'ClÃ¡sico RPG de Game Boy donde atrapas criaturas en la regiÃ³n de Kanto.', 899, 12, 'RPG', 'Pokemon_Rojo.jpg'),
(2, 'PokÃ©mon Azul', 'VersiÃ³n azul del clÃ¡sico RPG de Game Boy ambientado en Kanto.', 899, 10, 'RPG', 'Pokemon_Azul.jpg'),
(3, 'PokÃ©mon Amarillo', 'EdiciÃ³n especial de Game Boy con Pikachu como compaÃ±ero.', 950, 8, 'RPG', 'Pokemon_Amarillo.jpg'),
(4, 'Super Mario Bros.', 'El plataformero que definiÃ³ una era en el NES.', 650, 15, 'Plataformas', 'Mario_Bros.jpg'),
(5, 'Super Mario Bros. 3', 'Aventura plataformera del NES con trajes y mapas de mundos.', 780, 9, 'Plataformas', 'Mario_Bros3.jpg'),
(6, 'Super Mario World', 'Mario y Yoshi exploran la Isla de los Dinosaurios en SNES.', 720, 11, 'Plataformas', 'Mario_World.jpg'),
(7, 'Super Mario 64', 'Primer Mario en 3D para Nintendo 64 en el castillo de Peach.', 850, 7, 'Plataformas', 'Mario_64.jpg'),
(8, 'The Legend of Zelda', 'Aventura original de Link para NES con cartucho dorado.', 800, 6, 'Aventura', 'Zelda_NES.jpg'),
(9, 'Zelda: A Link to the Past', 'Aventura Ã©pica de SNES entre el Mundo de la Luz y el de la Oscuridad.', 950, 5, 'Aventura', 'Zelda_LinkPast.jpg'),
(10, 'Zelda: Ocarina of Time', 'Aventura 3D de Nintendo 64 considerada una obra maestra.', 1100, 6, 'Aventura', 'Zelda_Ocarina.jpg'),
(11, 'Zelda: Majora\'s Mask', 'Aventura de Nintendo 64 con un ciclo de tres dÃ­as y mÃ¡scaras.', 1050, 4, 'Aventura', 'Zelda_Majora.jpg'),
(12, 'Metroid', 'ExploraciÃ³n espacial de Samus Aran para NES.', 700, 8, 'Aventura', 'Metroid.jpg'),
(13, 'Super Metroid', 'Joya de SNES de acciÃ³n y exploraciÃ³n en el planeta Zebes.', 980, 5, 'Aventura', 'Super_Metroid.jpg'),
(14, 'Donkey Kong Country', 'Plataformero de SNES con grÃ¡ficos prerenderizados y Diddy Kong.', 690, 10, 'Plataformas', 'DK_Country.jpg'),
(15, 'Kirby\'s Dream Land', 'Primera aventura de Kirby en Game Boy, corta y divertida.', 450, 14, 'Plataformas', 'Kirby_DreamLand.jpg'),
(16, 'Sonic the Hedgehog', 'Debut del erizo azul para Sega Genesis a mÃ¡xima velocidad.', 550, 13, 'Plataformas', 'Sonic_1.jpg'),
(17, 'Sonic the Hedgehog 2', 'Secuela de Genesis con la apariciÃ³n de Tails.', 600, 12, 'Plataformas', 'Sonic_2.jpg'),
(18, 'Sonic 3 & Knuckles', 'Cartucho acoplable de Genesis con la historia completa de Sonic 3.', 1200, 3, 'Plataformas', 'Sonic_3_Knuckles.jpg'),
(19, 'Streets of Rage 2', 'Beat \'em up de Genesis con excelente banda sonora.', 750, 6, 'AcciÃ³n', 'Streets_Rage2.jpg'),
(20, 'Mortal Kombat II', 'Juego de pelea de SNES con fatalities y nuevos personajes.', 620, 9, 'Pelea', 'Mortal_Kombat2.jpg'),
(21, 'Street Fighter II', 'ClÃ¡sico juego de pelea de SNES que popularizÃ³ el gÃ©nero.', 680, 11, 'Pelea', 'Street_Fighter2.jpg'),
(22, 'Super Smash Bros.', 'Peleas multijugador con personajes de Nintendo en N64.', 890, 8, 'Pelea', 'Smash_Bros_64.jpg'),
(23, 'Final Fantasy VII', 'RPG de PlayStation protagonizado por Cloud y Sephiroth.', 1300, 5, 'RPG', 'Final_Fantasy7.jpg'),
(24, 'Final Fantasy VI', 'RPG de SNES con un gran elenco y trama memorable.', 1500, 3, 'RPG', 'Final_Fantasy6.jpg'),
(25, 'Chrono Trigger', 'RPG de SNES con viajes en el tiempo y mÃºltiples finales.', 1600, 3, 'RPG', 'Chrono_Trigger.jpg'),
(26, 'Castlevania: Symphony of the Night', 'Aventura gÃ³tica de PlayStation con exploraciÃ³n estilo metroidvania.', 1250, 4, 'Aventura', 'Castlevania_SOTN.jpg'),
(27, 'Castlevania', 'AcciÃ³n de terror gÃ³tico para NES con el cazador Simon Belmont.', 720, 7, 'AcciÃ³n', 'Castlevania.jpg'),
(28, 'Mega Man 2', 'AcciÃ³n y plataformas de NES con ocho jefes robÃ³ticos.', 850, 6, 'AcciÃ³n', 'Mega_Man2.jpg'),
(29, 'Mega Man X', 'AcciÃ³n futurista de SNES con X y Zero.', 900, 5, 'AcciÃ³n', 'Mega_Man_X.jpg'),
(30, 'Contra', 'Run and gun cooperativo de NES con el cÃ³digo Konami.', 650, 9, 'Shooter', 'Contra.jpg'),
(31, 'Contra III: The Alien Wars', 'Shooter de acciÃ³n frenÃ©tica para SNES contra invasores alienÃ­genas.', 880, 5, 'Shooter', 'Contra3.jpg'),
(32, 'Duck Hunt', 'Juego de punterÃ­a para NES que usa la pistola Zapper.', 400, 16, 'Shooter', 'Duck_Hunt.jpg'),
(33, 'Tetris', 'Puzzle clÃ¡sico para Game Boy con la mÃºsica de Korobeiniki.', 380, 20, 'Puzzle', 'Tetris.jpg'),
(34, 'Pac-Man', 'ClÃ¡sico arcade de laberintos para Atari 2600.', 350, 10, 'Arcade', 'Pac_Man.jpg'),
(35, 'Space Invaders', 'Arcade pionero de disparos espaciales para Atari 2600.', 350, 10, 'Arcade', 'Space_Invaders.jpg'),
(36, 'Pitfall!', 'Aventura de selva con Pitfall Harry para Atari 2600.', 380, 8, 'Aventura', 'Pitfall.jpg'),
(37, 'Crash Bandicoot', 'Plataformero 3D de PlayStation con giros y cajas de TNT.', 620, 12, 'Plataformas', 'Crash_Bandicoot.jpg'),
(38, 'Spyro the Dragon', 'Aventura de plataformas de PlayStation con un pequeÃ±o dragÃ³n morado.', 600, 10, 'Plataformas', 'Spyro_Dragon.jpg'),
(39, 'Metal Gear Solid', 'Espionaje tÃ¡ctico de PlayStation con Solid Snake.', 780, 7, 'AcciÃ³n', 'Metal_Gear_Solid.jpg'),
(40, 'Resident Evil 2', 'Survival horror de PlayStation en Raccoon City con Leon y Claire.', 850, 6, 'Terror', 'Resident_Evil2.jpg'),
(41, 'Gran Turismo', 'Simulador de carreras de PlayStation con autos reales.', 520, 11, 'Carreras', 'Gran_Turismo.jpg'),
(42, 'Mario Kart 64', 'Carreras multijugador de Nintendo 64 con objetos y atajos.', 820, 9, 'Carreras', 'Mario_Kart64.jpg'),
(43, 'F-Zero', 'Carreras futuristas de alta velocidad para SNES.', 600, 7, 'Carreras', 'F_Zero.jpg'),
(44, 'GoldenEye 007', 'Shooter en primera persona de Nintendo 64 con multijugador a pantalla dividida.', 900, 6, 'Shooter', 'GoldenEye_007.jpg'),
(45, 'Star Fox 64', 'Combate aÃ©reo espacial de Nintendo 64 con Fox McCloud.', 780, 7, 'Shooter', 'Star_Fox64.jpg'),
(46, 'Banjo-Kazooie', 'Plataformero 3D de Nintendo 64 con un oso y un ave.', 850, 5, 'Plataformas', 'Banjo_Kazooie.jpg'),
(47, 'EarthBound', 'RPG humorÃ­stico de SNES ambientado en un mundo moderno.', 2200, 2, 'RPG', 'Earthbound.jpg'),
(48, 'Dr. Mario', 'Puzzle de NES donde combinas pastillas para eliminar virus.', 480, 10, 'Puzzle', 'Dr_Mario.jpg'),
(49, 'Excitebike', 'Carreras de motocross para NES con editor de pistas.', 500, 9, 'Carreras', 'Excitebike.jpg'),
(50, 'Punch-Out!!', 'Boxeo de NES con Little Mac y oponentes memorables.', 750, 6, 'Deportes', 'Punch_Out.jpg'),
(51, 'Golden Axe', 'Beat \'em up de fantasÃ­a para Sega Genesis con tres hÃ©roes.', 560, 8, 'AcciÃ³n', 'Golden_Axe.jpg'),
(52, 'Altered Beast', 'AcciÃ³n de Sega Genesis donde te transformas en bestias.', 520, 8, 'AcciÃ³n', 'Altered_Beast.jpg'),
(53, 'Ecco the Dolphin', 'Aventura submarina de Sega Genesis con un delfÃ­n.', 600, 5, 'Aventura', 'Ecco_Dolphin.jpg'),
(54, 'Crazy Taxi', 'ConducciÃ³n arcade de Dreamcast como taxista en la ciudad.', 650, 7, 'Carreras', 'Crazy_Taxi.jpg'),
(55, 'Shenmue', 'Aventura de mundo abierto de Dreamcast en el JapÃ³n de 1986.', 780, 5, 'Aventura', 'Shenmue.jpg'),
(56, 'Metal Slug', 'Run and gun arcade de Neo Geo con acciÃ³n explosiva.', 1800, 3, 'Shooter', 'Metal_Slug.jpg'),
(57, 'Bomberman', 'Puzzle de acciÃ³n para TurboGrafx con bombas y laberintos.', 580, 6, 'Arcade', 'Bomberman.jpg'),
(58, 'Ice Climber', 'Plataformero de NES donde escalas montaÃ±as heladas.', 520, 7, 'Plataformas', 'Ice_Climber.jpg'),
(59, 'Tony Hawk\'s Pro Skater 2', 'Skate arcade de PlayStation con combos y pistas icÃ³nicas.', 650, 9, 'Deportes', 'Tony_Hawk2.jpg'),
(60, 'International Superstar Soccer 64', 'FÃºtbol de Nintendo 64 con jugabilidad Ã¡gil y modo multijugador.', 700, 8, 'Deportes', 'ISS_64.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comercia`
--

CREATE TABLE `comercia` (
  `operacion` int NOT NULL,
  `id_usuario` int NOT NULL,
  `id_art` int NOT NULL,
  `fecha` date NOT NULL,
  `monto` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `escribe`
--

CREATE TABLE `escribe` (
  `id_escribe` int NOT NULL,
  `id_usuario` int NOT NULL,
  `id_pub` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro historico`
--

CREATE TABLE `registro historico` (
  `id_regH` int NOT NULL,
  `titulo` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `año` date NOT NULL,
  `consola` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int NOT NULL,
  `nombre` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `correo` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `clave` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `perfil` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL DEFAULT 'U'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administra`
--
ALTER TABLE `administra`
  ADD PRIMARY KEY (`id_administra`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_reg` (`id_reg`);

--
-- Indices de la tabla `articulo`
--
ALTER TABLE `articulo`
  ADD PRIMARY KEY (`id_articulo`);

--
-- Indices de la tabla `comercia`
--
ALTER TABLE `comercia`
  ADD PRIMARY KEY (`operacion`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_art` (`id_art`);

--
-- Indices de la tabla `escribe`
--
ALTER TABLE `escribe`
  ADD PRIMARY KEY (`id_escribe`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_pub` (`id_pub`);

--
-- Indices de la tabla `registro historico`
--
ALTER TABLE `registro historico`
  ADD PRIMARY KEY (`id_regH`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administra`
--
ALTER TABLE `administra`
  MODIFY `id_administra` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `articulo`
--
ALTER TABLE `articulo`
  MODIFY `id_articulo` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT de la tabla `comercia`
--
ALTER TABLE `comercia`
  MODIFY `operacion` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `escribe`
--
ALTER TABLE `escribe`
  MODIFY `id_escribe` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `registro historico`
--
ALTER TABLE `registro historico`
  MODIFY `id_regH` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
