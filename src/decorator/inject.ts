export function Inject(): ParameterDecorator {
  return function (target, propertyKey, parameterIndex) {
    console.log(arguments);
  }
}