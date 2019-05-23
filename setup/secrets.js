const chalk = require('chalk');
const fs = require('mz/fs');
const inquirer = require('inquirer');
const path = require('path');

const configFilePath = path.resolve('./pelican.json');

const main = async () => {
    const answers = await inquirer.prompt([
        {
            message: 'mongo password?',
            name: 'mongo',
            type: 'password',
        },
    ]);

    await fs.writeFile(configFilePath, JSON.stringify(answers, undefined, 4));

    console.log(chalk.grey('Wrote secrets to'), chalk.bold(configFilePath));
};

main()
    .then(() => {
        console.log(chalk.green('✨ Setup complete! ✨'));
    })
    .catch(error => console.error(chalk.red(error)));
