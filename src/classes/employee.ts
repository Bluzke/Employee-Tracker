// Importing Vehicle and Wheel classes
import { visitNode } from 'typescript';
import Role from './role.js';


// The role class
class Vehicle {
// Declare properties of the Vehicle class
 firstName: string;
 lastName: string;
 role: Role[];
 manager: Manager[];

  // Create a constructor that accepts the properties of the Vehicle class
  constructor (
  name: string,
  salary: number,
  role : Role[],
  manager: Manager[],
  ) {
    // The constructor should initialize the properties of the Vehicle class
 this.firstName = firstName;
 this.lastName = lastName
 this.role= role;
 this.manager = manager

}
}

// Export the Vehicle class as the default export
export default Vehicle;
