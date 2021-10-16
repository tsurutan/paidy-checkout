module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'select',
        name: 'category',
        message: 'Which is the category of Atomic Design?',
        choices: ['atoms', 'molecules', 'organisms', 'templates'],
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'What is the name of component?',
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { category, componentName } = answers;
      const path = `${category}/${componentName}`;
      const categoryPath = `src/components/${category}`;
      const absPath = `src/components/${path}`;
      return { ...answers, path, categoryPath, absPath };
    });
  },
};
