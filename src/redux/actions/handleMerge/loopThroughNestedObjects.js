const calcIfObject = value => typeof value === 'object' && value !== null;


export default function loopThroughNestedObjects(local, remote) {
  const isObject = calcIfObject(remote);

  if (isObject) {
    const keys = Object.keys(remote);
    const filteredKeys = keys.filter(key => key !== 'timestamp' && key !== 'value');

    if (filteredKeys.length > 0) {
      return filteredKeys.reduce(
        (result, key) => {
          const remoteValue = remote[key];
          const localValue = local[key];

          return {
            ...result,
            [key]: loopThroughNestedObjects(localValue, remoteValue),
          };
        },
        {},
      );
    }

    return remote;
  }

  return local;
}
