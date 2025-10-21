import process from "node:process";

const parseArgs = () => {
  const data = process.argv;
  const len = data.length;
  for (let i = 2; i < len; i+=2) {
    console.log(`${data[i].slice(2)} is ${data[i + 1]}`)
  }
};

parseArgs();
