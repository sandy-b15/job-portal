export function isValid(text) {
  if (text != null) {
    return true;
  } else {
    return false;
  }
}

export function isValidNumber(text) {
  if (typeof text == "number") {
    return true;
  } else {
    return false;
  }
}
