const fs = require("fs");
const path = require("path");

const created = () => {
  setTimeout(() => {
    fs.mkdir(path.join("practise"), (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("Ochildi");
    });
  }, 3000);
};
const createdFile = () => {
  setTimeout(() => {
    fs.writeFile(path.join("practise", "text.txt"), '"boldi"', (err) => {
      if (err) {
        return console.log(err);
      }
    });
  }, 4000);
};
const write = () => {
  setTimeout(() => {
    fs.rename(
      path.join("practise", "text.txt"),
      path.join("practise", "index.txt"),
      (err) => {
        if (err) {
          return console.log(err);
        } else {
          console.log("rename boldi");
        }
      }
    );
  }, 5000);
};

const read = () => {
  setTimeout(() => {
    fs.readFile(path.join("practise", "index.txt"), "utf-8", (err, data) => {
      if (err) {
        return console.log(err);
      } else {
        console.log("fail raeding");
        console.log(data);
      }
    });
  }, 6000);
};

const deleted = () => {
  setTimeout(() => {
    fs.rm(path.join("practise", "index.txt"), (err) => {
      if (err) {
        return console.log(err);
      } else {
        console.log("fayl delted boldi");
      }
    });
  }, 7000);
};

const deleted2 = () => {
  setTimeout(() => {
    fs.rmdir(path.join("practise"), (err) => {
      if (err) {
        return console.log(err);
      } else {
        console.log("Papka delted boldi");
      }
    });
  }, 8000);
};

created();
createdFile();
write();
deleted();
deleted2();
read();
