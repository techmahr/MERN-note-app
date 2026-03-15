import os from "os";
import fs from "fs";

console.log("mahr")

// fs.writeFileSync("hello.txt", "Hello Node by Mahr");

const data = fs.readFileSync("hello.txt", "utf8");
console.log(data);



