// importing classes from other files
import inquirer from "inquirer";
import { QueryResult } from 'pg';
import {pool} from './connection.js';
import Department from "./department.js";
import Role from './role.js';
import Employee from './employee.js';


// define the Cli class
class Cli {
  // TODO: update the vehicles property to accept Truck and Motorbike objects as well
  // TODO: You will need to use the Union operator to define additional types for the array
  // TODO: See the AbleToTow interface for an example of how to use the Union operator
  // exit: boolean = false;

  // // TODO: Update the constructor to accept Truck and Motorbike objects as well
  constructor() {
  }
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
      .then((answers) => {
        const department = new Department(
          answers.name,
        );
        this.query(dep)(department)
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
      .then((answers) => {
        const role = new Role(
          answers.name,
          parseInt(answers.salary),
          answers.department,
        );
       
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
      .then((answers) => {
        const employee = new Employee(
          answers.firstName,
          answers.lastName,
          answers.role,
          answers.manager,
        );
        
      });
  }

  viewDepartment(): void {
    inquirer
    .prompt([
      {
        type: 'list',
        name: 'selectedDepartment',
        message: 'View All Departments',
        choices: this.employees.map((employee) => {
          return {
            
          }
        })
      }
    ])
  }

  viewRole(): void {
    inquirer
    .prompt([
      {
        type: 'list',
        name: 'selectedRole',
        message: 'View All Role',
        choices: this.employees.map((employee) => {
          return {
            
          }
        })
      }
    ])
  }

  viewEmployee(): void {
    // pool.qeury employees
    inquirer
    .prompt([
      {
        type: 'list',
        name: 'selectedEmployee',
        message: 'View All Employees',
        choices: this.employees.map((employee) => {
          return {
            
          }
        })
      }
    ])
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
