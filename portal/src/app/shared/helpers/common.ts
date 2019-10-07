export function convertArrayAsObjectToArray (array_as_object) {
  /*
    array_as_object: an object that seems an array. An object that its keys are numbers and values are objects.
    (e.g. 'Object {0: Object, 1: Object, 2: Object, 3: Object, ...}')

    return an array of objects (e.g. 'Array(79) [Object, Object, Object, Object, ...]')
  */
  let array = Object.values(array_as_object);
  return array.slice(0, array.length - 1);
}
