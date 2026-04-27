use aula_add;
create table aprendiz(
	id int not null auto_increment primary key,
    nome varchar(60),
    setor varchar(60),
    idade varchar(60)
);

SELECT * FROM aprendiz