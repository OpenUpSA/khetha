export default (local = {}, remote = {}) => {
  const { synced: localSynced } = local.storage || {};
  const { synced: remoteSynced } = remote.storage || {};
  const { timestamp: localTimestamp = 0 } = localSynced || {};
  const { timestamp: remoteTimestamp = 0 } = remoteSynced || {};

  const localTime = new Date(localTimestamp).getTime();
  const remoteTime = new Date(remoteTimestamp).getTime();
  const shouldUpdate = localTime < remoteTime;

  return shouldUpdate;
};
