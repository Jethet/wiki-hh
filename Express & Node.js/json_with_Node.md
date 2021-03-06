## Reading and Writing JSON Files with Node.js

**The .json file does not need any export if it to be used in another file.** It always has to be an array of JSON objects if you want  
to use the .json file as a test database or something like that. Don't add anything more outside of the array.  


**Reading the JSON data from a file**

The Node.js fs module has two functions available that can be used to read files from the file system: *readFile* and *readFileSync*.

* **The readFileSync function** reads data from a file in a synchronous manner. This function blocks the rest of the code from executing  
until all the data is read from a file. The function is particularly useful when your application has to load configuration settings before m
it can perform any other tasks. Example:  
``` js
const fs = require('fs');

let rawdata = fs.readFileSync('student.json');
let student = JSON.parse(rawdata);
console.log(student);
```
In the above Node.js code we first load the fs module to our application. Next we use the readFileSync function and pass it the relative  
file path to the file that we want to read.  
We want to read the file in its JSON format and for this we use the JSON.parse function. This function handles parsing the raw data,  
converts it to ASCII text, and parses the actual JSON data in to a JavaScript object.

* **The readFile function** reads file data in an asynchronous manner. When a readFile function is called, the file reading process starts  
and immediately the control shifts to next line executing the remaining lines of code. Once the file data has been loaded, this function will  
call the callback function provided to it. This way you aren't blocking code execution while waiting for the operating system to get back to  
you with data. The readFile function takes two parameters: the path to the file that is to be read, and the callback function that is to be  
called when the file is read completely. You can optionally also include a parameter with options.  
Example:  
``` js
const fs = require('fs');

fs.readFile('student.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student);
});

console.log('This is after the read call')
```

NB: the last line of code in our file is the one that shows up first in the output since the callback has not been called yet.

**fs.readFile** returns a file in JSON format. To access the data object inside the file, we need to parse it from JSON back to a JavaScipt  
object. Add `JSON.parse()` to the fs.readFile's callback function: `let parsedFile = JSON.parse(file)` (see `let students = JSON.parse(data)`).


**Using __dirname**  
`__dirname` is a Node global object that gives you a path to current working directory. It avoids writing the whole path out in full.
``` js
fs.readFile(__dirname + '/data/posts.json', function (error, file) {
    console.log(file.toString());
});
```
Use `file.toString()` to avoid the result being logged in buffer format.

--------------
**Writing JSON to a File**

There are two functions for writing data to files: *writeFile* and *writeFileSync*. The writeFile method writes data to a file  
in an asynchronous way while writeFileSync function writes data to a file in a synchronous manner.

* **The writeFileSync function** accepts 2-3 parameters: the path of the file to write data to, the data to write, and an optional parameter. If the file doesn't already exist, then a new file is created for you.  
Example:  
``` js
const fs = require('fs');

let student = { 
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
};
 
let data = JSON.stringify(student);
fs.writeFileSync('student-2.json', data);
```
**IMPORTANT:** the resulting data is in the form of one line of string, which is difficult to read. For serialized JSON to be human readable, add: `let data = JSON.stringify(student, null, 2);`. This will add newlines and a couple of indentations to the serialized JSON.

* **The writeFile function** executes in asynchronous manner, which means code is not blocked while data is written to the file. Like all asynchronous methods from before, we need to pass a callback to this function.  
Example:
``` js
const fs = require('fs');

let student = { 
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
};
 
let data = JSON.stringify(student, null, 2);

fs.writeFile('student-3.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

console.log('This is after the write call');
```
