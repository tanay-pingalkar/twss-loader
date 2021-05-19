const { getOptions } = require("loader-utils");

module.exports = function loader(source) {
  const options = getOptions(this);
  let sourceArray = [];
  let object = {};
  const regex = /\*([^:].*):/g;

  source
    .replace(/#[\w\W].*/g, "")
    .split(regex)
    .forEach((part) => {
      if (part.trim() !== "" && !part.startsWith("*")) {
        let string = part.replace(/\n/g, " ").replace(/\s+/g, " ").trim();

        sourceArray.push(string);
      }
    });
  for (let i = 0; i < sourceArray.length; i = i + 2) {
    const varsRegex = /\*[a-z]{1,}/g;
    const varsSet = new Set(sourceArray[i + 1].match(varsRegex));
    const splitted = sourceArray[i + 1].split(varsRegex);

    varsSet.forEach((vari) => {
      splitted.push(object[vari.slice(1)]);
    });
    object[sourceArray[i]] = splitted.join(" ");
  }
  return `module.exports=${JSON.stringify(object)}`;
};
