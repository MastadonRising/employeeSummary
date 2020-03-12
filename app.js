const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Joi = require('Joi');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require('./lib/Employee');
const render = require("./lib/htmlRenderer");
const employees =[];
var res ='';

function onValidation(err,val){
    if(err){
        console.log(err.message);
        return err.message;         
    }
    else{
        return true;            
    }
           
};
function validateName(name) {
    return Joi.validate(name, Joi.string().required(), onValidation);
};
function validateEmail(email) {
    return Joi.validate(email, Joi.string().email(), onValidation);
};

function promptInit(){  
    return inquirer.prompt([
        {
        type: "input",
        message: "What is the Employee's name?",
        name: "name",
        validate: validateName
        },
        {
        type: "input",
        message: "What is the Employee ID #?",
        name: "id",
        validate: (name)=> !isNaN(name)
        },
        {
        type: "input",
        message: "What is the employee's email?",
        name: "email",
        validate: validateEmail
        },
        {
        type: "list",
        message: "What is the employee's role?",
        name: "role",
        choices:[
            "Manager",
            "Engineer",
            "Intern"
            ]
        },
        {
        type: "input",
        message: "What is your office Number?",
        name: "specific",
        validate: (name)=> !isNaN(name),
        when:function( answers ) {
            return answers.role === "Manager";
          }
        },
        {
        type: "input",
        message: "What is your School's name?",
        name: "specific",
        validate: validateName,
        when:function( answers ) {
            return answers.role === "Intern";
            }
        },
        {
        type: "input",
        message: "What is your GitHub Username?",
        name: "specific",
        validate: validateName,
        when:function( answers ) {
            return answers.role === "Engineer";
            }
        },
        {
            type: "confirm",
            message: "Do you need to add another Employee?",
            name: "another"
            }
    ])
};
function buildEmployee($answers) {
    const  {name, id, email, role,specific, another} = $answers;
    switch (role){
        case 'Manager':
           const man = new Manager(name, id, email, specific);
            employees.push(man);
        break;
        case 'Engineer':
            const engineer = new Engineer(name, id, email, specific);
            employees.push(engineer);
        break;
        case 'Intern':
            const intern = new Intern(name, id, email, specific);
            employees.push(intern);
         break;
        default:
            const employee = new Employee(name, id, email);
            employees.push(employee);
        break;
  };

  if(another) {
    buildAnother();  
    } else {
    console.log('All Done')
    var html =  render(employees);
    fs.appendFile(outputPath,html,'utf8',
        function(err) { 
            if (err) throw err;
            // if no error
            console.log("Data is appended to file successfully.")
        }); 
    }
};

function buildAnother(){
    promptInit()
    .then(function(answer){
        buildEmployee(answer);   
    });
};

buildAnother();

