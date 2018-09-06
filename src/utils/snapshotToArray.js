const snapshotToArray = snapshot => (
  Object.entries(snapshot).map(e => Object.assign(e[1], { key: e[0] }))
);

export default snapshotToArray;
