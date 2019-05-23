export function Property(): PropertyDecorator {
  return function (target, propertyKey) {
    console.log(111, arguments);
    // Reflect.defineProperty(target, propertyKey, {
    //   configurable: true,
    //   enumerable: true,
    //   value: '43',
    //   writable: true
    // });
    // console.log(2223, target);
  }
}