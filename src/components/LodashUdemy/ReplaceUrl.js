import { forEach, replace, reduce } from "lodash";

const replaceUrl = (initialUrl, replacements) => {
  forEach(replacements, (item) => {
    initialUrl = replace(initialUrl, item.from, item.to);
  });

  return initialUrl;
};

export const replaceUrlBetter = (initialUrl, replacements) => {
  return reduce(
    replacements,
    (acc, item) => {
      return replace(acc, item.from, item.to);
    },
    initialUrl
  );
};

export default replaceUrl;
