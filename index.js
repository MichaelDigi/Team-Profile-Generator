const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const htmlgenerate = require("./TemplateGenerator/htmlgenerator");

let teamnames = [];

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is members Name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is members id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is members email?",
  },
  {
    type: "list",
    name: "memberRole",
    message: "What is members role?",
    choices: ["Engineer", "Intern", "Manager"],
  },
];

const qIntern = [
  {
    type: "input",
    name: "school",
    message: "What school does the intern attend?",
  },
];

const qEngineer = [
  {
    type: "input",
    name: "github",
    message: "Enter engineers github user",
  },
];

const qManager = [
  {
    type: "input",
    name: "officeNumber",
    message: "Enter managers office number",
  },
];

const addAnotherMemeber = [
  {
    type: "list",
    name: "AddMore",
    message: "Add another member?",
    choices: ["Y", "N"],
  },
];

async function init() {
  let responseAddMore;
  // responseAddMore.complete = "No";
  console.log("before the do while", responseAddMore);
  do {
    let firstResponse = await inquirer.prompt(questions);
    console.log(firstResponse);
    if (firstResponse.memberRole === "Engineer") {
      console.log("engineer");
      let secondResponse = await inquirer.prompt(qEngineer);
      const engineer = new Engineer(
        firstResponse.name,
        firstResponse.id,
        firstResponse.email,
        secondResponse.github
      );
      console.log(engineer);
      teamnames.push(engineer);
    } else if (firstResponse.memberRole === "Intern") {
      let secondResponse = await inquirer.prompt(qIntern);
      const intern = new Intern(
        firstResponse.name,
        firstResponse.id,
        firstResponse.email,
        secondResponse.school
      );
      console.log(intern);
      teamnames.push(intern);
    } else {
      let secondResponse = await inquirer.prompt(qManager);
      const manager = new Manager(
        firstResponse.name,
        firstResponse.id,
        firstResponse.email,
        secondResponse.officeNumber
      );
      console.log(manager);
      teamnames.push(manager);
    }

    responseAddMore = await inquirer.prompt(addAnotherMemeber);
    console.log(responseAddMore);
  } while (responseAddMore.AddMore === "Y");
  console.log("This is my team list", teamnames);
  let template = htmlgenerate(teamnames);
  console.log(template);

  let OUTPUT = path.resolve(__dirname, "assets");

  const outputpath = path.join(OUTPUT, "index.html");
  fs.writeFileSync(outputpath, template, "utf-8");
}

init();
