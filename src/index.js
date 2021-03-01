const inquirer = require('inquirer')

//Basic questions

inquirer
    .prompt([
        {
            type: 'list',
            name: 'mode',
            message: 'What should I do?',
            choices: ['Option A', 'Option B'],
        },
    ])
