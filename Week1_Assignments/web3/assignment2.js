// What if I ask you that the input string should start with 100xdevs ? How would the code change?
const crypto = require("crypto");

const hashValue = (pref) => {
  let input = 0;
  while (true) {
    let hash = crypto
      .createHash("sha256")
      .update("100xdevs" + input.toString())
      .digest("hex");
    if (hash.startsWith(pref)) {
      console.log(hash, input);
      break;
    }
    input++;
  }
};

hashValue("00000");
