export default (function creteValue() {
  let value = 0;
  let valueListeners = new Set();

  function subscribeToValue(listener) {
    valueListeners.add(listener);
  }

  function setValue(number) {
    value = number;
    onValueChange();
  }
  function getValue() {
    return value;
  }

  // private
  function onValueChange() {
    valueListeners.forEach((listener) => listener(value));
  }

  return {
    subscribeToValue,
    setValue,
    getValue,
  };
})();
