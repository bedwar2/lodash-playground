import { chain, map, compact, join } from "lodash";

const ClassNames = (classObject) => {
  const getClassName = (val, key) => {
    return val === true && key;
  };

  return chain(classObject).map(getClassName).compact().join(" ").value();
};

export default ClassNames;
