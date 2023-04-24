export const updateError = (error, stateUpdater) => {
  stateUpdater(error);

  setTimeout(() => {
    stateUpdater('')
  }, 1000);
}