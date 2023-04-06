export const moveListElement = (idxSource, idxDestination, list) => {
  const copy = [...list];
  const [removed] = copy.splice(idxSource, 1);
  copy.splice(idxDestination, 0, removed);
  return copy;
};
