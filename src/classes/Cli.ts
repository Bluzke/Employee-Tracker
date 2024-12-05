// importing classes from other files
import inquirer from "inquirer";
import { QueryResult } from 'pg';
import {pool} from '../connection.js'
import Department from "./department.js";
import Role from './role.js';
import Employee from './employee.js';


// define the Cli class
class Cli {
  constructor() {}
  // }

  // make a menu the 6 options 


  // add department function
    
  // add role function

  // add employee function


  // method to create department
  createDepartment(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of the department?',
        },
      ])
      .then(async (answers) => {
        try {
          const query = "INSERT INTO department (name) VALUES ($1) RETURNING *";
          const values = [answers.name];
          const result = await pool.query(query, values);
          console.log("Department added:", result.rows[0]);
        } catch (err) {
          console.error("Error adding department:", err);
        }
      });
  }

  

  // method to create role
  createRole(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of the role?',
        },
        {
          type: 'input',
          name: 'salary',
          message: 'What is the salary of the role?',
        },
        {
          type: '',
          name: 'departments',
          message: 'Which department does the role belong to?',
        },
      ])
      .then(async (answers) => {
        try {
          const query =
            "INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *";
          const values = [answers.title, parseFloat(answers.salary), answers.department_id];
          const result = await pool.query(query, values);
          console.log("Role added:", result.rows[0]);
        } catch (err) {
          console.error("Error adding role:", err);
        }
      });
  }

  // method to create an employee
  createEmployee(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'firstName',
          message: 'What is the employees first name?',
        },
        {
          type: 'input',
          name: 'lastName',
          message: 'What is the employees last name?',
        },
        {
          type: '',
          name: 'role',
          message: 'What is the employees role?',
        },
        {
          type: '',
          name: 'manager',
          message: 'Who is the employees manager?',
        },
      ])
      .then(async (answers) => {
        try {
          const query =
            "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *";
          const values = [
            answers.first_name,
            answers.last_name,
            answers.role_id,
            answers.manager_id || null,
          ];
          const result = await pool.query(query, values);
          console.log("Employee added:", result.rows[0]);
        } catch (err) {
          console.error("Error adding employee:", err);
        }
      });
  }
    // Method to view all departments
  async viewDepartment(): Promise<void> {
    try {
      const query = "SELECT * FROM department";
      const result = await pool.query(query);
      console.table(result.rows);
    } catch (err) {
      console.error("Error viewing departments:", err);
    }
  }

    // Method to view all roles
    async viewRole(): Promise<void> {
      try {
        const query = `
          SELECT role.id, role.title, role.salary, department.name AS department
          FROM role
          JOIN department ON role.department_id = department.id
        `;
        const result = await pool.query(query);
        console.table(result.rows);
      } catch (err) {
        console.error("Error viewing roles:", err);
      }
    }

  // Method to view all employees
  async viewEmployee(): Promise<void> {
    try {
      const query = `
      SELECT employee.id,employee.first_name,employee.last_name, role.title,role.salary,role.department_id
      FROM employee
      JOIN role ON employee.role_id = role_id; 
      `;
      const result = await pool.query(query);
      console.table(result.rows);
    } catch (err) {
      console.error("Error viewing employees:", err);
    }
  }

  // method to start the cli
  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'CreateOrSelect',
          message:
            'Choose an option',
          choices: ['View All Employees', 'Add Employee', 'View All Roles', 'Add Role', 'View all Departments', 'Add Department'],
        },
      ])
      .then((answers) => {
        // check if the user wants to create a new vehicle or select an existing vehicle
        if (answers.CreateOrSelect === 'View All Employees') {
          this.viewEmployee();
        } else if (answers.CreateOrSelect === 'Add Employee') {
          this.createEmployee();
        }
          else if (answers.CreateOrSelect === 'View All Roles') {
          this.viewRole();
        } else if (answers.CreateOrSelect === 'Add Role') {
          this.createRole();
        }
        else if (answers.CreateOrSelect === 'View all Departments') {
          this.viewDepartment();
        } else if (answers.CreateOrSelect === 'Add Department') {
          this.createDepartment();
        } 
        }
      );
  }
}

// export the Cli class
export default Cli;
