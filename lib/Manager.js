// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Manager extends Employee {
    constructor(n,id,email, office){
        super(n,id,email);
        this.name = n,
        this.id = id,
        this.email = email,
        this.role = 'Manager',
        this.officeNumber = office
            }
    // Methods 
    getRole(){
    return this.role
    }
    getOfficeNumber(){
        return this.officeNumber
    };

};



module.exports= Manager