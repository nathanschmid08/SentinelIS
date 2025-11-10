/*
inserts.sql
-----------
This file contains SQL insert statements for testing purposes.
*/

INSERT INTO COMPANY (COMP_NAME, COMP_DESC) VALUES
('Test Company 1', 'This is a test company for software development. Nr.1'),
('Test Company 2', 'This is a test company for software development. Nr.2'),
('Test Company 3', 'This is a test company for software development. Nr.3'),
('Test Company 4', 'This is a test company for software development. Nr.4'),
('Test Company 5', 'This is a test company for software development. Nr.5'),
('Test Company 6', 'This is a test company for software development. Nr.6'),
('Test Company 7', 'This is a test company for software development. Nr.7'),
('Test Company 8', 'This is a test company for software development. Nr.8'),
('Test Company 9', 'This is a test company for software development. Nr.9'),
('Test Company 10', 'This is a test company for software development. Nr.10'),
('Test Company 11', 'This is a test company for software development. Nr.11'),
('Test Company 12', 'This is a test company for software development. Nr.12'),
('Test Company 13', 'This is a test company for software development. Nr.13'),
('Test Company 14', 'This is a test company for software development. Nr.14'),
('Test Company 15', 'This is a test company for software development. Nr.15');



INSERT INTO USERS (COMP_ID, USER_ABBR, USER_SURNAME, USER_FIRST_NAME, USER_ROLE) VALUES
(1, 'SMJ', 'Smith', 'John', 'System Admin'),
(1, 'MIJ', 'Miller', 'Jane', 'Software Engineer'),
(2, 'JOM', 'Johnson', 'Michael', 'Database Admin'),
(2, 'DAE', 'Davis', 'Emily', 'Software Engineer'),
(3, 'BRW', 'Brown', 'William', 'System Admin'),
(3, 'WIO', 'Wilson', 'Olivia', 'Software Engineer'),
(4, 'TAJ', 'Taylor', 'James', 'Cloud Admin'),
(4, 'ANS', 'Anderson', 'Sophia', 'Software Engineer'),
(5, 'THB', 'Thomas', 'Benjamin', 'Network Admin'),
(5, 'JAA', 'Jackson', 'Ava', 'Software Engineer'),
(6, 'WHD', 'White', 'Daniel', 'Security Admin'),
(6, 'HAM', 'Harris', 'Mia', 'Software Engineer'),
(7, 'MAM', 'Martin', 'Matthew', 'DevOps Engineer'),
(7, 'THI', 'Thompson', 'Isabella', 'Software Engineer'),
(8, 'GAJ', 'Garcia', 'Joseph', 'System Admin'),
(8, 'MAC', 'Martinez', 'Charlotte', 'Software Engineer'),
(9, 'ROD', 'Robinson', 'David', 'Database Admin'),
(9, 'CLA', 'Clark', 'Amelia', 'Software Engineer'),
(10, 'ROA', 'Rodriguez', 'Andrew', 'Applications Admin'),
(10, 'LEG', 'Lewis', 'Grace', 'Software Engineer'),
(11, 'LEC', 'Lee', 'Christopher', 'Support Admin'),
(11, 'WAL', 'Walker', 'Lily', 'Software Engineer'),
(12, 'HAA', 'Hall', 'Alexander', 'Network Admin'),
(12, 'YOE', 'Young', 'Ella', 'Software Engineer'),
(13, 'KIS', 'King', 'Samuel', 'IT Manager'),
(13, 'WRC', 'Wright', 'Chloe', 'Software Engineer'),
(14, 'SCH', 'Scott', 'Henry', 'System Admin'),
(14, 'GRA', 'Green', 'Abigail', 'Software Engineer'),
(15, 'ADL', 'Adams', 'Lucas', 'Cloud Admin'),
(15, 'BAH', 'Baker', 'Harper', 'Software Engineer');