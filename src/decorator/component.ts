export function Component(): ClassDecorator {
  return function (target) {
    console.dir(target);
  }
}