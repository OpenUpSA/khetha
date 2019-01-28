export default (local = {}, remote = {}) => {
  const { synced: localSynced } = local.storage || {};
  const { synced: remoteSynced } = remote.storage || {};
  const { timestap: localTimestap } = localSynced || 0;
  const { timestap: remoteTimestap } = remoteSynced || 0;

  const localTime = new Date(localTimestap).getTime();
  const remoteTime = new Date(remoteTimestap).getTime();
  const shouldUpdate = localTime < remoteTime;

  return shouldUpdate;
};
