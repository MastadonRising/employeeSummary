// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(n,id,email, git){
        super(n,id,email);
        this.name = n,
        this.id = id,
        this.email = email,
        this.role = 'Engineer',
        this.github = git
            }
    // Methods 
    getRole(){
        return this.role
    }
    getGithub(){
        return this.github
    }
}

module.exports= Engineer