

create table USERS(
   id  int identity(1,1) not null,
   username varchar(50) not null,
   pass varchar(50) not null,
   name varchar(200) not null,
   phone int not null,
   email varchar(200) not null,
   active bit not null,--(0-> inactivo 1-> activo)
   primary key(username)
)

--CONSULTA PARA OBTENER TODOS LOS USUARIOS
select * from USERS

--consulta para obtener los usuarios activos 
select * from USERS
where active = 1

--consulta para obtener el nombre y el email de los usuarios
select name,email from USERS


--consulta para agregar un usuario
insert into USERS(username,pass,name,phone,email,active)
values ('eliana123','1234','eliana rodriguez',300123456,'elix.gmail',1)


--consulta para editar un usuario
update USERS
set active = 0
where username = 'julian123'


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












