
export function convertArrayAsObjectToArray (array_as_object) {
  /*
    array_as_object: an object that seems an array. An object that its keys are numbers and values are objects.
    (e.g. 'Object {0: Object, 1: Object, 2: Object, 3: Object, ...}')

    return an array of objects (e.g. 'Array(79) [Object, Object, Object, Object, ...]')
  */
  let array = Object.values(array_as_object);
  return array.slice(0, array.length - 1);
}

export function downloadFile(filename: string, data: string, type = 'text/plain;charset=utf-8'): void {
  // Source: https://stackoverflow.com/a/33542499
  // this function works with any browser

  // create a blob that contains the 'data'
  let blob = new Blob([ data ], { type: type });

  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(blob, filename);
  } else {
    // create a new element 'a' to put on the DOM and download the file
    let element = window.document.createElement('a');

    // add the URL and the filename to the 'element'
    element.href = window.URL.createObjectURL(blob);
    element.download = filename;

    // not show element on the screen
    element.style.display = 'none';

    // add 'element' on the DOM
    document.body.appendChild(element);
    // click on it, in order to download the file
    element.click();
    // remove it from DOM
    document.body.removeChild(element);
  }
}

export function isObjectEmpty(obj: object): boolean{
  // Source: https://stackoverflow.com/a/32108184
  // because Object.entries(new Date()).length === 0;
  // we have to do some additional check
  return Object.entries(obj).length === 0 && obj.constructor === Object
}

/** create a join method to Object class */
// Object.prototype.join = function(glue, separator) {
//   // Source: https://gist.github.com/lucasdavila/4331999
//   const object = this;

//   if (glue == undefined) {
//     glue = '=';
//   }

//   if (separator == undefined) {
//     separator = ',';
//   }

//   return Object.keys(object).map((key) => { return key + glue + object[key]; }).join(separator);
// }

export function join (obj: object, glue: string, separator: string) {
  // Source: https://gist.github.com/lucasdavila/4331999
  if (glue == undefined) {
    glue = '=';
  }

  if (separator == undefined) {
    separator = ',';
  }

  return Object.keys(obj).map((key) => { return key + glue + obj[key]; }).join(separator);
}

export function isNumeric (string: any) {
  // Source: https://stackoverflow.com/questions/175739/built-in-way-in-javascript-to-check-if-a-string-is-a-valid-number
  if (/^-{0,1}\d+$/.test(string)) {
    // valid integer (positive or negative)
    return true;
  } else if(/^\d+\.\d+$/.test(string)) {
    // valid float
    return true;
  } else {
    // not valid number
    return false;
  }
}

export function isValueNotNullAndNotUndefined(value: any): boolean {
  return value !== null && value !== undefined;
}
