const profileDataArgs = process.argv.slice(2, process.argv.length);
const [firstName, github] = profileDataArgs;

console.log(firstName, github);

const generatePage = (firstName, github) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Portfolio Demo</title>
        </head>

        <body>
            <h1>${firstName}</h1>
            <h2><a href="https://github.com/${github}">GitHub</a></h2>
        </body>
        </html>
        `;
};
console.log(generatePage(firstName, github));
