// TODO: Write code to define and export the Employee class
class Employee {

    constructor(n,id,email){
this.name = n,
this.id = id,
this.email = email,
this.role = 'Employee'

    }

    // Methods
getName(){
    return this.name
}
getId(){
    return this.id
}

getEmail(){
    return this.email 
}
getRole(){
    return this.role
}
}

module.exports= Employee