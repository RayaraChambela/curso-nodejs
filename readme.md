Node permite que o JavaScript funcione no backend -> É um simples interpretador do js

V8 -> Parte que entende o JS

libuv -> biblioteca que deu caracteristicas de uma linguagem backend para o node

MODULOS -> No Node.js, módulos servem pra dividir código e controlar o que entra e o que sai de cada arquivo.

FRAMEWORK -> Ferramente para facilitar

EXPRESS -> Framework utilizado para criar aplicações backend e web, baseado em rotas

npm -> maiore repositorio de bibliotecas que existe

ROTAS -> Caminho para a sua aplicação "/rota"

SEQUELIZE -> ORM 

doskey xmysql="C:\xampp\mysql\bin\mysql.exe" -h 127.0.0.1 -P 3307 -u root

Usar "xmysql" para inicializar o banco

HANDLER -> Executa a lógica 

MANIPULANDO MYSQL

-- 1) INSERIR (CREATE)
INSERT INTO usuarios (nome, email, idade)
VALUES ('Carla Silva Lima', 'carla@email.com', 25);

-- Inserir vários de uma vez
INSERT INTO usuarios (nome, email, idade)
VALUES
  ('Ana', 'ana@email.com', 20),
  ('Bruno', 'bruno@email.com', 30);


-- 2) CONSULTAR (READ)
SELECT * FROM usuarios;

-- Filtrando
SELECT * FROM usuarios
WHERE nome = 'Carla Silva Lima';

-- Só algumas colunas
SELECT id, nome FROM usuarios
WHERE idade >= 18
ORDER BY nome ASC
LIMIT 10;


-- 3) ATUALIZAR (UPDATE)
-- (Regra: sempre testa o WHERE com um SELECT antes)
UPDATE usuarios
SET nome = 'Nome de Teste'
WHERE nome = 'Carla Silva Lima';

-- Atualizar múltiplos campos
UPDATE usuarios
SET nome = 'Carla', idade = 26
WHERE id = 5;


-- 4) DELETAR (DELETE)
-- (Regra: sempre testa o WHERE com um SELECT antes)
DELETE FROM usuarios
WHERE id = 5;

-- Deletar por condição
DELETE FROM usuarios
WHERE email = 'carla@email.com';


-- Extras úteis
-- Ver quantas linhas foram afetadas pelo último UPDATE/DELETE
SELECT ROW_COUNT();

-- Conferir antes de atualizar/deletar (padrão seguro)
SELECT * FROM usuarios WHERE id = 5;


MONGO DB -> Banco de dados sem esquemas orientado a documentos
-> Utiliza a estrutura de dados JSON