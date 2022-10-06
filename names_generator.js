import fs from "fs";
let html = fs.readFileSync("html.txt");
let str = html.toString("utf8");

const regex =
  /<a.*href\s?=['"]*(?<href>[^'"]*)[^>]*>((?<text>(.(?!\<\/a\>))*.))<\/a>/g;

// Alternative syntax using RegExp constructor
// const regex = new RegExp('<a.*href\\s?=[\'"]*(?<href>[^\'"]*)[^>]*>((?<text>(.(?!\\<\\/a\\>))*.))<\\/a>', 'g')

let m;

// let links = [];
let links_name = [];
while ((m = regex.exec(str)) !== null) {
  // This is necessary to avoid infinite loops with zero-width matches
  if (m.index === regex.lastIndex) {
    regex.lastIndex++;
  }
  // links.push("https://support.microsoft.com" + m.groups.href);
  links_name.push(m.groups.text);
  console.log(m.groups.text);

  // The result can be accessed through the `m`-variable.
  //   m.forEach((match, groupIndex) => {
  //     console.log(`Found match, group ${groupIndex}: ${match}`);
  //   });
}

// console.log("\n links: ", links);
// console.log("\n names: ", links_name);
