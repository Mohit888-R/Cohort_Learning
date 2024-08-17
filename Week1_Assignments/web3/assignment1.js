// What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?
const crypto = require("crypto");

const hashValue = (pref) => {
  let input = 0;
  while (true) {
    let hash = crypto
      .createHash("sha256")
      .update(input.toString())
      .digest("hex");
    if (hash.startsWith(pref)) {
      console.log(hash, input);
      break;
    }
    input++;
  }
};

hashValue("00000");
