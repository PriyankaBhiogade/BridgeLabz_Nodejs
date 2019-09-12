const yaml = require('js-yaml');
const fs = require('fs');

    const ymlData = yaml.safeLoad(fs.readFileSync('./yaml.yml', 'utf8'));
    const json = JSON.stringify(ymlData, null, 4);
    console.log(json);

