import calcIfUpdate from './calcIfUpdate';
import loopThroughNestedObjects from './loopThroughNestedObjects';


export default ({ local }) => ({ remote }) => {
  const promise = new Promise((resolve) => {
    const { sync: localSyncedDate } = local.storage || {};
    const { sync: remoteSyncedDate } = remote.storage || {};

    const willUpdate = calcIfUpdate(
      localSyncedDate,
      remoteSyncedDate,
    );

    if (!willUpdate) {
      return resolve({ merged: local });
    }

    const merged = loopThroughNestedObjects(local, remote);
    return resolve({ merged });
  });

  return promise;
};
