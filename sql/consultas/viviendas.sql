create table HOUSEHOLDS (
 id int identity(1,1)  primary key,
 city varchar(50) not null,
 neighborhood varchar(100) not null,
 housing_type varchar(20) not null,
 housing_status bit not null, --(0-> venta 1-> arriendo)
 area int not null,
 bedrooms int not null,
 bathrooms int not null,
 price bigint not null,
 parking int not null,
 stratum int not null
 )
 
 --consultando tabla
 select * from  HOUSEHOLDS

 --agregando viviendas a la tabla
 insert into HOUSEHOLDS
 values('bogota','suba','apartamento',1,50,3,2,200000000,1,3)

 insert into HOUSEHOLDS
 values('cucuta','claret','casa',0,100,4,3,400000000,2,4)

 insert into HOUSEHOLDS
 values('medellin','el poblado','apartamento',1,200,6,4,900000000,3,6)

 insert into HOUSEHOLDS
 values('cucuta','prados del este','casa',1,50,2,2,300000000,1,4)

 insert into HOUSEHOLDS
 values('cucuta','barrio blanco','apartamento',0,70,3,2,700000000,2,6)

  insert into HOUSEHOLDS
 values('cali','centro','apartamento',1,60,3,2,200000000,1,3)

 insert into HOUSEHOLDS
 values('santa marta','rodadero','casa',1,90,4,3,400000000,2,5)


 --comandos principales
--select = seleccionar registros  
--where = donde --- condicion para filtrar registros

--insert into = insertar o agregar un registro 
--values = asigna los valores de las columnas al registro que se va a agregar 

-- update = actualizar o editar un registro 
--set = asignar un valor a uno o varios registros que se van a actualizar  


--Tipos de datos principales en sql server
--Numero --- Int o bigint
--Texto --- Varchar()
--Booleano --- bit

--not null = significa que el campo no puede estar vacio o nulo
--identity(1,1) = significa que cada vez que se agregue un registro se va a aumentar el id automaticamente
--primary key = significa que la columna va a ser unica e inrrepetible