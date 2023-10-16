const path = require("path");
// console.log(path.parse(__filename).ext);
const fs = require("fs");
// fs.mkdir(path.join(__dirname, "tmp"), (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("папка создана");
// });
const filePath = path.join(__dirname, "tmp", "tmp.txt");
// fs.writeFile(filePath, "Привет студенты", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Файл создан");
// });
fs.appendFile(filePath, "\nДо свидания, студенты", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("файл changed");
});
