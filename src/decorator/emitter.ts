export function Emitter(): MethodDecorator {
  return function (target, propertyKey, descriptor) {
    console.log(arguments);
  }
}