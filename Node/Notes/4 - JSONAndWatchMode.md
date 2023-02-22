# Importing JSON and Watch Mode

When we import a JSON file, Node will automatically convert our JSON into a JavaScipt Object

```
<!-- JSON FILE -->
{
    name: 'Jordan Wilson',
    address: {
        line_1 : 'Address Line 1',
        line_2 : 'Address Line 2'
    }
}

<!-- index.js file -->
const data = require("./data");
```

.json is not required when importing our json files however NodeJS will first look for a data.js file before data.json file

It is recommended to use the .json for json files

# Watch Mode

Since v18 we can use Watch Mode

Instead of always writing node index we can use watch mode

To use Watch mode we can enter the following into our terminal

```
node --watch fileName
```
