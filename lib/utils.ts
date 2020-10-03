type GetterType = () => any;

export function setLazyProperty(
  object: any,
  property: string,
  get: GetterType,
): void {
  Object.defineProperty(object, property, {
    get: () => {
      const value = get();

      Object.defineProperty(object, property, {
        value,
        enumerable: true,
        configurable: true,
      });

      return value;
    },
    enumerable: true,
    configurable: true,
  });
}
