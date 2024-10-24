// Importing Vehicle and Wheel classes
import { visitNode } from 'typescript';
import Department from './department.js';


// The role class
class Role {
// Declare properties of the role class
 name: string;
 salary: number;
 departments: Department[]

  // Create a constructor that accepts the properties of the role class
  constructor (
  name: string,
  salary: number,
  departments : Department[],
  ) {
    // The constructor should initialize the properties of the role class
 this.name = name;
 this.salary = salary;
 this.departments= departments;

}
}

// Export the role class as the default export
export default Role;
