// importing classes from other files
import inquirer from "inquirer";
// import { QueryResult } from 'pg';
import Department from "./department.js";
import Role from './role.js';
import Employee from './employee.js';


// define the Cli class
class Cli {
  // TODO: update the vehicles property to accept Truck and Motorbike objects as well
  // TODO: You will need to use the Union operator to define additional types for the array
  // TODO: See the AbleToTow interface for an example of how to use the Union operator
  // vehicles: (Car | Truck | Motorbike)[];
  // selectedVehicleVin: string | undefined;
  // exit: boolean = false;

  // // TODO: Update the constructor to accept Truck and Motorbike objects as well
  // constructor(vehicles: (Car | Truck | Motorbike)[]) {
  //   this.vehicles = vehicles;
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

  // method to find a vehicle to tow
  // TODO: add a parameter to accept a truck object
  // findVehicleToTow(tow: Truck): void {
  //   inquirer
  //     .prompt([
  //       {
  //         type: 'list',
  //         name: 'vehicleToTow',
  //         message: 'Select a vehicle to tow',
  //         choices: this.vehicles.map((vehicle) => {
  //           return {
  //             name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
  //             value: vehicle,
  //           };
  //         }),
  //       },
  //     ])
  //     .then((answers) => {
  //       // TODO: check if the selected vehicle is the truck
  //       if (answers.vehicle.vin === tow.vin) {
  //         console.log( 'The truck cannot tow itself')
  //       } else { 
  //         tow.tow(answers.vehicle)
  //       }
        // TODO: if it is, log that the truck cannot tow itself then perform actions on the truck to allow the user to select another action
        // TODO: if it is not, tow the selected vehicle then perform actions on the truck to allow the user to select another action
  //     });
  // }

  // method to start the cli
  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'CreateOrSelect',
          message:
            'Choose an option',
          choices: ['Create a new employee', 'Select an existing employee'],
        },
      ])
      .then((answers) => {
        // check if the user wants to create a new vehicle or select an existing vehicle
        if (answers.CreateOrSelect === 'Create a new employee') {
          console.log('need to call create employee function');
        } else {
          console.log('need to call existing employee function');
        }
      });
  }
}

// export the Cli class
export default Cli;
