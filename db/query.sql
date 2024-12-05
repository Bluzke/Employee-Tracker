-- Query to get all roles with department details
SELECT role.id,role.title,role.salary, departments.department
FROM role
JOIN departments ON role.department_id = departments.id;

-- Query to get all employees wiht role and department details
SELECT employee.id,employee.first_name,employee.last_name, role.title,role.salary,role.department_id
FROM employee
JOIN role ON employee.role_id = role_id; 