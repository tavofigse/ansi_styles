import { rawStyles, rawCodes, IStyle } from "./constants.ts";
import { setLazyProperty } from "./utils.ts";

function assembleStyles(): IStyle {
  setLazyProperty(rawStyles, "codes", () => {
    const codes: Map<number, number> = new Map();

    return rawCodes.reduce(
      (currentMap: Map<number, number>, accumulator: number[]) => {
        return currentMap.set(accumulator[0], accumulator[1]);
      },
      codes,
    );
  });

  // Groups should not be enumerable.
  Object.defineProperty(rawStyles, "color", {
    value: rawStyles.color,
    enumerable: false,
  });

  Object.defineProperty(rawStyles, "modifier", {
    value: rawStyles.modifier,
    enumerable: false,
  });

  Object.defineProperty(rawStyles, "bgColor", {
    value: rawStyles.bgColor,
    enumerable: false,
  });

  return rawStyles;
}

export const styles = assembleStyles();
