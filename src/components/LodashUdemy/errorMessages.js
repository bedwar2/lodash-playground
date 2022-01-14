import { map, upperFirst } from "lodash";

const errorList = (errorsArray) => {
  return map(errorsArray, "message").join(", ");
};

const errorMessages = (errorMessageObject) => {
  return map(errorMessageObject, (val, key) => {
    return upperFirst(key) + ": " + errorList(val.errors);
  });
};

export default errorMessages;
