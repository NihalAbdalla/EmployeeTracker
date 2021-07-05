const { prompt } = require("inquirer");
const db = require("./db");
const consoletable = require("console.table");
const inquirer = require("inquirer");

const start = () => {
    inquirer.prompt({
        id: "managerId",
        name: "managerName",
    consoletable.log(),
})
}