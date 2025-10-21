import process from 'node:process';



const parseEnv = () => {
  
  Object.entries(process.env).forEach(([key, value]) => {
    console.log(`RS_${key}=${value}`);
  });
};

parseEnv();
