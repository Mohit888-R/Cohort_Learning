// What if I ask you to find a nonce for the following input -
// harkirat => Raman | Rs 100
// Ram => Ankit | Rs 10

const crypto = require("crypto");

const hashValue = (pref) => {
  let input = 0;
  while (true) {
    const inputStr =
      "harkirat => Raman | Rs 100" + "Ram => Ankit | Rs 10" + input;
    let hash = crypto
      .createHash("sha256")
      .update(inputStr.toString())
      .digest("hex");
    if (hash.startsWith(pref)) {
      console.log(hash, input);
      break;
    }
    input++;
  }
};

hashValue("00000");
