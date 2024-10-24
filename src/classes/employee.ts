// Importing role js
import { visitNode } from 'typescript';
import Role from './role.js';


// The role class
class Employee {
// Declare properties of the Vehicle class
 firstName: string;
 lastName: string;
 role: Role[];
 manager: Employee[];

  // Create a constructor that accepts the properties of the Vehicle class
  constructor (
  firstName: string,
  lastName: string,
  role : Role[],
  manager: Employee[],
  ) {
    // The constructor should initialize the properties of the Vehicle class
 this.firstName = firstName;
 this.lastName = lastName
 this.role= role;
 this.manager = manager

}
}

// Export the Vehicle class as the default export
export default Employee;
