import * as fs from "fs";

let accountData = {
  email: "",
  password: "",
 
};

try {
  accountData = JSON.parse(fs.readFileSync("account.json", "utf8"));
} catch (e) {
  accountData.email = process.env.EMAIL;
  accountData.password = process.env.PASSWORD;
  
}

export { accountData };

