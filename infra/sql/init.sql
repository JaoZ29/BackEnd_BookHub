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

-- INSERT INTO ALUNO 
INSERT INTO Aluno (nome, sobrenome, data_nascimento, endereco, email, celular)
VALUES
('João', 'Silva', '2000-05-10', 'Rua A, 123', 'joao.silva@gmail.com', '11987654321'),
('Maria', 'Oliveira', '1998-07-15', 'Rua B, 456', 'maria.oliveira@gmail.com', '11987654322'),
('Pedro', 'Santos', '1999-08-20', 'Rua C, 789', 'pedro.santos@gmail.com', '11987654323'),
('Ana', 'Souza', '2001-03-30', 'Rua D, 321', 'ana.souza@gmail.com', '11987654324'),
('Carlos', 'Ferreira', '1997-12-10', 'Rua E, 654', 'carlos.ferreira@gmail.com', '11987654325'),
('Juliana', 'Pereira', '2002-02-14', 'Rua F, 987', 'juliana.pereira@gmail.com', '11987654326'),
('Paulo', 'Costa', '1996-09-18', 'Rua G, 147', 'paulo.costa@gmail.com', '11987654327'),
('Fernanda', 'Lima', '1995-06-05', 'Rua H, 258', 'fernanda.lima@gmail.com', '11987654328'),
('Ricardo', 'Melo', '2003-11-25', 'Rua I, 369', 'ricardo.melo@gmail.com', '11987654329'),
('Carolina', 'Martins', '1994-01-08', 'Rua J, 753', 'carolina.martins@gmail.com', '11987654330');

-- INSERT INTO LIVRO 
INSERT INTO Livro (titulo, autor, editora, ano_publicacao, isbn, quant_total, quant_disponivel, valor_aquisicao, status_livro_emprestado)
VALUES
('Dom Casmurro', 'Machado de Assis', 'Editora A', '1899', '9781234567890', 10, 10, 29.90, 'disponível'),
('O Alquimista', 'Paulo Coelho', 'Editora B', '1988', '9781234567891', 5, 5, 35.50, 'disponível'),
('1984', 'George Orwell', 'Editora C', '1949', '9781234567892', 8, 8, 40.00, 'disponível'),
('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 'Editora D', '1943', '9781234567893', 15, 15, 25.00, 'disponível'),
('A Revolução dos Bichos', 'George Orwell', 'Editora E', '1945', '9781234567894', 7, 7, 30.00, 'disponível'),
('A Menina que Roubava Livros', 'Markus Zusak', 'Editora F', '2005', '9781234567895', 12, 12, 45.00, 'disponível'),
('O Senhor dos Anéis', 'J.R.R. Tolkien', 'Editora G', '1954', '9781234567896', 6, 6, 55.00, 'disponível'),
('Harry Potter e a Pedra Filosofal', 'J.K. Rowling', 'Editora H', '1997', '9781234567897', 9, 9, 38.00, 'disponível'),
('Cem Anos de Solidão', 'Gabriel García Márquez', 'Editora I', '1967', '9781234567898', 10, 10, 42.00, 'disponível'),
('O Hobbit', 'J.R.R. Tolkien', 'Editora J', '1937', '9781234567899', 5, 5, 33.00, 'disponível');


-- INSERT INTO EMPRESTIMO (10 registros)
INSERT INTO Emprestimo (id_aluno, id_livro, data_emprestimo, data_devolucao, status_emprestimo)
VALUES
(1, 1, '2024-10-01', '2024-10-15', 'devolvido'),
(2, 2, '2024-10-02', NULL, 'em andamento'),
(3, 3, '2024-10-03', NULL, 'em andamento'),
(4, 4, '2024-10-04', '2024-10-18', 'devolvido'),
(5, 5, '2024-10-05', NULL, 'em andamento'),
(6, 6, '2024-10-06', '2024-10-20', 'devolvido'),
(7, 7, '2024-10-07', NULL, 'em andamento'),
(8, 8, '2024-10-08', '2024-10-22', 'devolvido'),
(9, 9, '2024-10-09', NULL, 'em andamento'),
(10, 10, '2024-10-10', '2024-10-24', 'devolvido');

SELECT * FROM Aluno;
SELECT * FROM Livro;
SELECT * FROM Emprestimo;
