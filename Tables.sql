CREATE TABLE PRODUCTO
(
idProducto int(10)  AUTO_INCREMENT not null,
timestamp timestamp not null,
nombre varchar(15) not null,
descripcion varchar(140) not null,
codigo varchar(15) not null,
url varchar(140)not null,
precio int(10) not null,
stock int(10) not null,
primary key (idProducto)
);
INSERT INTO `producto` (`idProducto`, `timestamp`, `nombre`, `descripcion`, `codigo`, `url`, `precio`, `stock`) VALUES (NULL, current_timestamp(), 'Carne', 'Un pedaso de carne', 'car55', 'www.google.com', '555', '77');
CREATE TABLE CARRITO
(
idCarrito int(10) AUTO_INCREMENT not null,
timestamp timestamp not null,
idProducto int(10) not null,
foreign key (idProducto) references PRODUCTO(idProducto),
primary key (idCarrito)
);
