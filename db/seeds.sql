INSERT INTO departments (department)
VALUES ('Legal'),
('Finance'),
('Marketing'),
('Sales'),
('Engineering'),
('Customer Service');

INSERT INTO role (title,department_id, salary)
VALUES ('Sales Lead', 4 , 100000),
('Salesperson', 4 , 80000),
('Lead Engineer', 5, 150000),
('Software Engineer', 5 , 120000),
('Acoount Manager', 2 , 160000),
('Accountant', 2 , 125000),
('Legal Team Lead', 1 , 250000),
('Lawyer', 1 , 190000);

INSERT INTO employee (first_name, last_name,role_id)
VALUES ('Lily','Carter',1),
('Max','Reed',2),
('Zoe','Hunt',3),
('Sam','Lee',4),
('Ava','Gray',5),
('Leo','King',6),
('Mia','Cole',7),
('Eli','Park',8);
       
