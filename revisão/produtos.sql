-- Active: 1690557301658@@127.0.0.1@3306@system_products
CREATE DATABASE system_products;
USE system_products;

CREATE TABLE tb_produtos(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    descricao VARCHAR(255),
    preco float
);
