-- CREATE ALUNO - TRIGGER - FUNCTION

CREATE SEQUENCE seq_ra START 1;

CREATE TABLE Aluno (
    id_aluno SERIAL PRIMARY KEY,
    ra VARCHAR (7) UNIQUE NOT NULL,
    nome VARCHAR (80) NOT NULL,
    sobrenome VARCHAR (80) NOT NULL,
    data_nascimento DATE,
    endereco VARCHAR (200),
    email VARCHAR (80),
    celular VARCHAR (20) NOT NULL
);

CREATE OR REPLACE FUNCTION gerar_ra() RETURNS TRIGGER AS $$
BEGIN
    NEW.ra := 'AAA' || TO_CHAR(nextval('seq_ra'), 'FM0000');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_gerar_ra
BEFORE INSERT ON Aluno
FOR EACH ROW EXECUTE FUNCTION gerar_ra();

-- CREATE LIVRO
CREATE TABLE Livro (
    id_livro SERIAL PRIMARY KEY,
    titulo VARCHAR (200) NOT NULL,
    autor VARCHAR (150) NOT NULL,
    editora VARCHAR (100) NOT NULL,
    ano_publicacao VARCHAR (5),
    isbn VARCHAR (20),
    quant_total INTEGER NOT NULL,
    quant_disponivel INTEGER NOT NULL,
    valor_aquisicao DECIMAL (10,2),
    status_livro_emprestado VARCHAR (20)
);


-- CREATE EMPRESTIMO
CREATE TABLE Emprestimo (
    id_emprestimo SERIAL PRIMARY KEY,
    id_aluno INT REFERENCES Aluno(id_aluno),
    id_livro INT REFERENCES Livro(id_livro),
    data_emprestimo DATE NOT NULL,
    data_devolucao DATE,
    status_emprestimo VARCHAR (20)
);


-- ALUNO
INSERT INTO Aluno (nome, sobrenome, data_nascimento, endereco, email, celular) 
VALUES 
('Conor', 'McGregor', '2005-01-15', 'Rua UFC, 123', 'mcgregor@ufc.com', '16998959876'),
('Amanda', 'Nunes', '2004-03-22', 'Rua UFC, 456', 'amanda.nunes@ufc.com', '16995992305'),
('Angelina', 'Jolie', '2003-07-10', 'Rua Hollywood, 789', 'jolie@cinema.com', '16991915502'),
('Natalie', 'Portman', '2002-11-05', 'Rua Hollywood, 101', 'natalie.portman@cinema.com', '16993930703'),
('Shaquille', 'ONeal', '2004-09-18', 'Rua NBA, 202', 'shaquille@gmail.com', '16993937030'),
('Harry', 'Kane', '2000-05-18', 'Rua Futebol, 2024', 'kane@futi.com', '16998951983'),
('Jaqueline', 'Carvalho', '2001-12-10', 'Rua Volei, 456', 'jack@volei.com', '16991993575'),
('Sheilla', 'Castro', '2003-04-25', 'Rua Volei, 2028', 'sheilla.castro@volei.com', '16981974547'),
('Gabriela', 'Guimarães', '2007-08-19', 'Rua Volei, 2028', 'gaby@volei.com', '16983932215'),
('Magic', 'Johnson', '2003-07-08', 'Rua NBA, 1999', 'magic@gmail.com', '16993932020');


-- ALUNO -- INSIRA 10 ALUNOS 
INSERT INTO Aluno (nome, sobrenome, data_nascimento, endereco, email, celular) 
VALUES 
('Michael', 'Jordan', '2005-01-15', 'Rua Esportes, 123', 'mjordan@nba.com', '11998877665'),
('Ronda', 'Rousey', '2004-03-22', 'Rua Luta, 456', 'ronda@wwe.com', '11995544332'),
('Scarlett', 'Johansson', '2003-07-10', 'Rua Cinema, 789', 'scarlett@cinema.com', '11991115504'),
('Emma', 'Watson', '2002-11-05', 'Rua Magia, 101', 'emma.watson@hogwarts.com', '11993330804'),
('LeBron', 'James', '2004-09-18', 'Rua NBA, 202', 'lebron@nba.com', '11993337777'),
('Cristiano', 'Ronaldo', '2000-05-18', 'Rua Futebol, 2024', 'cr7@futebol.com', '11998881983'),
('Marta', 'Vieira', '2001-12-10', 'Rua Futebol, 456', 'marta@futebol.com', '11992222345'),
('Simone', 'Biles', '2003-04-25', 'Rua Ginastica, 2028', 'simone@gym.com', '11981234567'),
('Neymar', 'Junior', '2007-08-19', 'Rua Futebol, 2028', 'neymar@futebol.com', '11983337755'),
('Kobe', 'Bryant', '2003-07-08', 'Rua NBA, 1999', 'kobe@nba.com', '11993338866');


-- LIVRO
INSERT INTO Livro (titulo, autor, editora, ano_publicacao, isbn, quant_total, quant_disponivel, valor_aquisicao, status_livro_emprestado) 
VALUES 
('O Senhor dos Anéis', 'J.R.R. Tolkien', 'HarperCollins', '1954', '978-0007525546', 10, 10, 150.00, 'Disponível'),
('1984', 'George Orwell', 'Companhia das Letras', '1949', '978-8535906770', 8, 8, 90.00, 'Disponível'),
('Dom Quixote', 'Miguel de Cervantes', 'Penguin Classics', '1605', '978-0142437230', 6, 6, 120.00, 'Disponível'),
('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 'Agir', '1943', '978-8522008731', 12, 12, 50.00, 'Disponível'),
('A Revolução dos Bichos', 'George Orwell', 'Penguin', '1945', '978-0141036137', 7, 7, 80.00, 'Disponível'),
('O Hobbit', 'J.R.R. Tolkien', 'HarperCollins', '1937', '978-0007458424', 9, 9, 140.00, 'Disponível'),
('O Conde de Monte Cristo', 'Alexandre Dumas', 'Penguin Classics', '1844', '978-0140449266', 5, 5, 110.00, 'Disponível'),
('Orgulho e Preconceito', 'Jane Austen', 'Penguin Classics', '1813', '978-0141439518', 7, 7, 90.00, 'Disponível'),
('Moby Dick', 'Herman Melville', 'Penguin Classics', '1851', '978-0142437247', 4, 4, 100.00, 'Disponível'),
('Guerra e Paz', 'Liev Tolstói', 'Companhia das Letras', '1869', '978-8535922343', 3, 3, 130.00, 'Disponível');

-- LIVRO -- INSIRA 10 LIVROS -- DADOS REAIS 
INSERT INTO Livro (titulo, autor, editora, ano_publicacao, isbn, quant_total, quant_disponivel, valor_aquisicao, status_livro_emprestado)
VALUES
('O Código Da Vinci', 'Dan Brown', 'Arqueiro', 2003, '978-8599296493', 10, 7, 50.00, 'indisponível'),
('A Menina que Roubava Livros', 'Markus Zusak', 'Intrínseca', 2005, '978-8598078304', 8, 5, 45.00, 'indisponível'),
('O Morro dos Ventos Uivantes', 'Emily Brontë', 'Penguin', 1847, '978-0141439556', 6, 4, 35.00, 'disponível'),
('Jogos Vorazes', 'Suzanne Collins', 'Rocco', 2008, '978-0439023528', 12, 9, 60.00, 'indisponível'),
('Percy Jackson e o Ladrão de Raios', 'Rick Riordan', 'Intrínseca', 2005, '978-1423103349', 10, 8, 40.00, 'disponível'),
('O Alquimista', 'Paulo Coelho', 'HarperCollins', 1988, '978-0061122415', 9, 6, 55.00, 'indisponível'),
('A Culpa é das Estrelas', 'John Green', 'Intrínseca', 2012, '978-0141345659', 8, 3, 30.00, 'disponível'),
('O Apanhador no Campo de Centeio', 'J.D. Salinger', 'Penguin', 1951, '978-0316769488', 7, 5, 35.00, 'indisponível'),
('Morte Súbita', 'J.K. Rowling', 'Nova Fronteira', 2012, '978-8535923212', 6, 4, 75.00, 'indisponível'),
('Orgulho e Preconceito', 'Jane Austen', 'Penguin', 1813, '978-0141439518', 5, 2, 25.00, 'disponível');


-- Inserindo Emprestimos
INSERT INTO Emprestimo (id_aluno, id_livro, data_emprestimo, data_devolucao, status_emprestimo) 
VALUES 
(1, 2, '2024-09-01', '2024-09-15', 'Em andamento'),
(2, 1, '2024-09-02', '2024-09-16', 'Em andamento'),
(3, 5, '2024-09-03', '2024-09-17', 'Em andamento'),
(5, 3, '2024-09-04', '2024-09-18', 'Em andamento'),
(4, 6, '2024-09-05', '2024-09-19', 'Em andamento'),
(6, 4, '2024-09-06', '2024-09-20', 'Em andamento'),
(7, 8, '2024-09-07', '2024-09-21', 'Em andamento'),
(8, 7, '2024-09-08', '2024-09-22', 'Em andamento'),
(10, 9, '2024-09-09', '2024-09-23', 'Em andamento'),
(9, 10, '2024-09-10', '2024-09-24', 'Em andamento'),
(1, 10, '2024-09-11', '2024-09-25', 'Em andamento'),
(2, 3, '2024-09-11', '2024-09-25', 'Em andamento'),
(4, 5, '2024-09-11', '2024-09-25', 'Em andamento'),
(6, 2, '2024-09-11', '2024-09-25', 'Em andamento');


-- Inserindo Emprestimos -- 10 EMPRESTIMOS, não repetir em
Aqui estão 10 novos exemplos de inserções para a tabela `Emprestimo`:
INSERT INTO Emprestimo (id_aluno, id_livro, data_emprestimo, data_devolucao, status_emprestimo) 
VALUES 
(1, 2, '2024-09-01', '2024-09-15', 'Em andamento'),
(2, 3, '2024-09-02', '2024-09-16', 'Em andamento'),
(3, 4, '2024-09-03', '2024-09-17', 'Em andamento'),
(4, 5, '2024-09-04', '2024-09-18', 'Em andamento'),
(5, 6, '2024-09-05', '2024-09-19', 'Em andamento'),
(6, 7, '2024-09-06', '2024-09-20', 'Em andamento'),
(7, 8, '2024-09-07', '2024-09-21', 'Em andamento'),
(8, 9, '2024-09-08', '2024-09-22', 'Em andamento'),
(9, 10, '2024-09-09', '2024-09-23', 'Em andamento'),
(10, 1, '2024-09-10', '2024-09-24', 'Em andamento');
