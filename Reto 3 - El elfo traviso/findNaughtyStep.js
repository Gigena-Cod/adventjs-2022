const MINIMUN_ORIGINAL_LENGTH = 0;

const MINIMUN_MODIFIED_LENGTH = 0;

const FIRST_POSITION = 0;

const EMPTY_STATE = "";

export function findNaughtyStep(original, modified) {
  if (original.length === MINIMUN_ORIGINAL_LENGTH) return modified;

  if (modified.length === MINIMUN_MODIFIED_LENGTH) return EMPTY_STATE;

  if (!original || typeof original !== "string")
    throw new Error("The param 'original' must be an string");

  if (!modified || typeof modified !== "string")
    throw new Error("The param 'modified' must be an string");

  if (original === modified) return EMPTY_STATE;

  const arrayWithMoreProcess =
    original.length > modified.length ? original : modified;

  const arrayWithLessProcess =
    original.length > modified.length ? modified : original;

  const extraProcess = findStep(arrayWithMoreProcess, arrayWithLessProcess);
  return extraProcess;
}

const findStep = (moreProcess, lessProcess) => {
  const arrayWithMoreProcess = moreProcess.split("");
  const arrayWithLessProcess = lessProcess.split("");

  const extraProcess = arrayWithMoreProcess.filter((chart, index) => {
    if (arrayWithLessProcess[index] !== chart) return chart;
  });

  return extraProcess[FIRST_POSITION];
};
