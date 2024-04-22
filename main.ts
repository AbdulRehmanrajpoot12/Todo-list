import inquirer from "inquirer";
import chalk from "chalk"

let todos:string[] = [];
let loop = true;

while(loop){
    const answers :{
        TODO: string,
        ADDMORE: boolean
    } = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do you want in your todo? "
        },
        {
            type: "confirm",
            name: "ADDMORE",
            message: "Do you want to add more todo? ",
            default: false
        }
    ])
    const {TODO, ADDMORE} = answers;
    loop = ADDMORE
    if(TODO) {
        todos.push(TODO)
    }else {
        console.log(chalk.yellow.bold("Kindly add a valid input!!"))
    }
}

if(todos.length > 0){
    console.log(chalk.green.bold("Your todo list:"))
todos.forEach(todo => {
    console.log((todo))        
    });
} else {
    console.log(chalk.red.bold("No todos found!!"))
}