\c postgres;
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

\c employee_db;

CREATE TABLE departments (
  id SERIAL PRIMARY KEY,
  department VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role (
  id SERIAL PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INTEGER 
  FOREIGN KEY (department_id)
  REFERENCES departments(id)
  ON DELETE SET NULL

);

CREATE TABLE employee (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER,
  FOREIGN KEY (role_id)
  REFERENCES role(id)
  ON DELETE SET NULL
)
