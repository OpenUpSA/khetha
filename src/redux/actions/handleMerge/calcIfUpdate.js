export default (local, remote) => {
  const localTime = new Date(local.storage.synced.timestamp || 0).getTime();
  const remoteTime = new Date(remote.storage.synced.timestamp || 0).getTime();
  const shouldUpdate = localTime < remoteTime;

  return shouldUpdate;
};
