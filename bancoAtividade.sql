create database vendas;
use vendas;

create table dados_venda(
	id_venda int not null auto_increment primary key,
    nome_produto varchar(45) not null,
    categoria_produto varchar(45) not null,
    quantidade int not null,
    preco_unitario decimal(10,2) not null,
    valor_total decimal(10,2) not null,
    data_venda date not null,
    forma_pagamento varchar(45) not null,
    nome_vendedor varchar(60) not null
);