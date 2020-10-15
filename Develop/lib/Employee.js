// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id; 
        this.email = email;
    }
    getName() {
       // name = answers.name;
       return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }

}

module.exports = Employee;




























const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);


function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your name"
          },
          {
            type: "input",
            name: "id",
            message: "Enter your ID Number"
          },
          {
            type: "input",
            name: "installation",
            message: "Enter installation instructions:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter your ID Number"
          },
          {
            type: "input",
            name: "installation",
            message: "Enter installation instructions:"
        },
    ])
}
