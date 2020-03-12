// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Intern extends Employee {
    constructor(n,id,email, school){
        super(n,id,email);
        this.name = n,
        this.id = id,
        this.email = email,
        this.role = 'Intern',
        this.school= school
            }
    // Methods 
    getRole(){
    return this.role
    }
    getSchool(){
        return this.school
    };
    prompt(){
        return inquirer.prompt([
            { 
            type: "input",
            message: "What is your school's name?",
            name: "prompt",
            validate: validateName,
            }]);
    }
}

module.exports= Intern