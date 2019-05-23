import { Component, Emitter, Inject, Property } from './decorator/index';

@Component()
export class Avatar {
  @Property()
  name = 'name';

  @Property()
  age = 55;

  @Emitter()
  showName(@Inject() key: string) {
    return this.name;
  }
}

console.log(new Avatar());