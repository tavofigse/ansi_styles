export interface IStyleOption {
  open: string;
  close: string;
}

export interface IModifierOption {
  reset: IStyleOption;
  bold: IStyleOption;
  dim: IStyleOption;
  italic: IStyleOption;
  underline: IStyleOption;
  inverse: IStyleOption;
  hidden: IStyleOption;
  strikethrough: IStyleOption;
}

export interface IColorOption {
  black: IStyleOption;
  red: IStyleOption;
  green: IStyleOption;
  yellow: IStyleOption;
  blue: IStyleOption;
  magenta: IStyleOption;
  cyan: IStyleOption;
  white: IStyleOption;
  blackBright: IStyleOption;
  redBright: IStyleOption;
  greenBright: IStyleOption;
  yellowBright: IStyleOption;
  blueBright: IStyleOption;
  magentaBright: IStyleOption;
  cyanBright: IStyleOption;
  whiteBright: IStyleOption;
  gray: IStyleOption;
  grey: IStyleOption;
}

export interface IBGColorOption {
  bgBlack: IStyleOption;
  bgRed: IStyleOption;
  bgGreen: IStyleOption;
  bgYellow: IStyleOption;
  bgBlue: IStyleOption;
  bgMagenta: IStyleOption;
  bgCyan: IStyleOption;
  bgWhite: IStyleOption;
  bgBlackBright: IStyleOption;
  bgRedBright: IStyleOption;
  bgGreenBright: IStyleOption;
  bgYellowBright: IStyleOption;
  bgBlueBright: IStyleOption;
  bgMagentaBright: IStyleOption;
  bgCyanBright: IStyleOption;
  bgWhiteBright: IStyleOption;
  bgGray: IStyleOption;
  bgGrey: IStyleOption;
}

export interface IStyle {
  modifier: IModifierOption;
  color: IColorOption;
  bgColor: IBGColorOption;
  reset: IStyleOption;
  bold: IStyleOption;
  dim: IStyleOption;
  italic: IStyleOption;
  underline: IStyleOption;
  inverse: IStyleOption;
  hidden: IStyleOption;
  strikethrough: IStyleOption;
  codes: Map<number, number>;
  black: IStyleOption;
  red: IStyleOption;
  green: IStyleOption;
  yellow: IStyleOption;
  blue: IStyleOption;
  magenta: IStyleOption;
  cyan: IStyleOption;
  white: IStyleOption;
  blackBright: IStyleOption;
  redBright: IStyleOption;
  greenBright: IStyleOption;
  yellowBright: IStyleOption;
  blueBright: IStyleOption;
  magentaBright: IStyleOption;
  cyanBright: IStyleOption;
  whiteBright: IStyleOption;
  gray: IStyleOption;
  grey: IStyleOption;
  bgBlack: IStyleOption;
  bgRed: IStyleOption;
  bgGreen: IStyleOption;
  bgYellow: IStyleOption;
  bgBlue: IStyleOption;
  bgMagenta: IStyleOption;
  bgCyan: IStyleOption;
  bgWhite: IStyleOption;
  bgBlackBright: IStyleOption;
  bgRedBright: IStyleOption;
  bgGreenBright: IStyleOption;
  bgYellowBright: IStyleOption;
  bgBlueBright: IStyleOption;
  bgMagentaBright: IStyleOption;
  bgCyanBright: IStyleOption;
  bgWhiteBright: IStyleOption;
  bgGray: IStyleOption;
  bgGrey: IStyleOption;
}

export const rawStyles: IStyle = JSON.parse(`{
    "bgColor":{
        "bgBlack":{
            "open":"\\u001b[40m",
            "close":"\\u001b[49m"
        },
        "bgRed":{
            "open":"\\u001b[41m",
            "close":"\\u001b[49m"
        },
        "bgGreen":{
            "open":"\\u001b[42m",
            "close":"\\u001b[49m"
        },
        "bgYellow":{
            "open":"\\u001b[43m",
            "close":"\\u001b[49m"
        },
        "bgBlue":{
            "open":"\\u001b[44m",
            "close":"\\u001b[49m"
        },
        "bgMagenta":{
            "open":"\\u001b[45m",
            "close":"\\u001b[49m"
        },
        "bgCyan":{
            "open":"\\u001b[46m",
            "close":"\\u001b[49m"
        },
        "bgWhite":{
            "open":"\\u001b[47m",
            "close":"\\u001b[49m"
        },
        "bgBlackBright":{
            "open":"\\u001b[100m",
            "close":"\\u001b[49m"
        },
        "bgRedBright":{
            "open":"\\u001b[101m",
            "close":"\\u001b[49m"
        },
        "bgGreenBright":{
            "open":"\\u001b[102m",
            "close":"\\u001b[49m"
        },
        "bgYellowBright":{
            "open":"\\u001b[103m",
            "close":"\\u001b[49m"
        },
        "bgBlueBright":{
            "open":"\\u001b[104m",
            "close":"\\u001b[49m"
        },
        "bgMagentaBright":{
            "open":"\\u001b[105m",
            "close":"\\u001b[49m"
        },
        "bgCyanBright":{
            "open":"\\u001b[106m",
            "close":"\\u001b[49m"
        },
        "bgWhiteBright":{
            "open":"\\u001b[107m",
            "close":"\\u001b[49m"
        },
        "bgGray":{
            "open":"\\u001b[100m",
            "close":"\\u001b[49m"
        },
        "bgGrey":{
            "open":"\\u001b[100m",
            "close":"\\u001b[49m"
        }
    },
    "modifier":{
        "reset":{
            "open":"\\u001b[0m",
            "close":"\\u001b[0m"
        },
        "bold":{
            "open":"\\u001b[1m",
            "close":"\\u001b[22m"
        },
        "dim":{
            "open":"\\u001b[2m",
            "close":"\\u001b[22m"
        },
        "italic":{
            "open":"\\u001b[3m",
            "close":"\\u001b[23m"
        },
        "underline":{
            "open":"\\u001b[4m",
            "close":"\\u001b[24m"
        },
        "inverse":{
            "open":"\\u001b[7m",
            "close":"\\u001b[27m"
        },
        "hidden":{
            "open":"\\u001b[8m",
            "close":"\\u001b[28m"
        },
        "strikethrough":{
            "open":"\\u001b[9m",
            "close":"\\u001b[29m"
        }
    },
    "color":{
        "black":{
            "open":"\\u001b[30m",
            "close":"\\u001b[39m"
        },
        "red":{
            "open":"\\u001b[31m",
            "close":"\\u001b[39m"
        },
        "green":{
            "open":"\\u001b[32m",
            "close":"\\u001b[39m"
        },
        "yellow":{
            "open":"\\u001b[33m",
            "close":"\\u001b[39m"
        },
        "blue":{
            "open":"\\u001b[34m",
            "close":"\\u001b[39m"
        },
        "magenta":{
            "open":"\\u001b[35m",
            "close":"\\u001b[39m"
        },
        "cyan":{
            "open":"\\u001b[36m",
            "close":"\\u001b[39m"
        },
        "white":{
            "open":"\\u001b[37m",
            "close":"\\u001b[39m"
        },
        "blackBright":{
            "open":"\\u001b[90m",
            "close":"\\u001b[39m"
        },
        "redBright":{
            "open":"\\u001b[91m",
            "close":"\\u001b[39m"
        },
        "greenBright":{
            "open":"\\u001b[92m",
            "close":"\\u001b[39m"
        },
        "yellowBright":{
            "open":"\\u001b[93m",
            "close":"\\u001b[39m"
        },
        "blueBright":{
            "open":"\\u001b[94m",
            "close":"\\u001b[39m"
        },
        "magentaBright":{
            "open":"\\u001b[95m",
            "close":"\\u001b[39m"
        },
        "cyanBright":{
            "open":"\\u001b[96m",
            "close":"\\u001b[39m"
        },
        "whiteBright":{
            "open":"\\u001b[97m",
            "close":"\\u001b[39m"
        },
        "gray":{
            "open":"\\u001b[90m",
            "close":"\\u001b[39m"
        },
        "grey":{
            "open":"\\u001b[90m",
            "close":"\\u001b[39m"
        }
    },
    "reset":{
        "open":"\\u001b[0m",
        "close":"\\u001b[0m"
    },
    "bold":{
        "open":"\\u001b[1m",
        "close":"\\u001b[22m"
    },
    "dim":{
        "open":"\\u001b[2m",
        "close":"\\u001b[22m"
    },
    "italic":{
        "open":"\\u001b[3m",
        "close":"\\u001b[23m"
    },
    "underline":{
        "open":"\\u001b[4m",
        "close":"\\u001b[24m"
    },
    "inverse":{
        "open":"\\u001b[7m",
        "close":"\\u001b[27m"
    },
    "hidden":{
        "open":"\\u001b[8m",
        "close":"\\u001b[28m"
    },
    "strikethrough":{
        "open":"\\u001b[9m",
        "close":"\\u001b[29m"
    },
    "black":{
        "open":"\\u001b[30m",
        "close":"\\u001b[39m"
    },
    "red":{
        "open":"\\u001b[31m",
        "close":"\\u001b[39m"
    },
    "green":{
        "open":"\\u001b[32m",
        "close":"\\u001b[39m"
    },
    "yellow":{
        "open":"\\u001b[33m",
        "close":"\\u001b[39m"
    },
    "blue":{
        "open":"\\u001b[34m",
        "close":"\\u001b[39m"
    },
    "magenta":{
        "open":"\\u001b[35m",
        "close":"\\u001b[39m"
    },
    "cyan":{
        "open":"\\u001b[36m",
        "close":"\\u001b[39m"
    },
    "white":{
        "open":"\\u001b[37m",
        "close":"\\u001b[39m"
    },
    "blackBright":{
        "open":"\\u001b[90m",
        "close":"\\u001b[39m"
    },
    "redBright":{
        "open":"\\u001b[91m",
        "close":"\\u001b[39m"
    },
    "greenBright":{
        "open":"\\u001b[92m",
        "close":"\\u001b[39m"
    },
    "yellowBright":{
        "open":"\\u001b[93m",
        "close":"\\u001b[39m"
    },
    "blueBright":{
        "open":"\\u001b[94m",
        "close":"\\u001b[39m"
    },
    "magentaBright":{
        "open":"\\u001b[95m",
        "close":"\\u001b[39m"
    },
    "cyanBright":{
        "open":"\\u001b[96m",
        "close":"\\u001b[39m"
    },
    "whiteBright":{
        "open":"\\u001b[97m",
        "close":"\\u001b[39m"
    },
    "gray":{
        "open":"\\u001b[90m",
        "close":"\\u001b[39m"
    },
    "grey":{
        "open":"\\u001b[90m",
        "close":"\\u001b[39m"
    },
    "bgBlack":{
        "open":"\\u001b[40m",
        "close":"\\u001b[49m"
    },
    "bgRed":{
        "open":"\\u001b[41m",
        "close":"\\u001b[49m"
    },
    "bgGreen":{
        "open":"\\u001b[42m",
        "close":"\\u001b[49m"
    },
    "bgYellow":{
        "open":"\\u001b[43m",
        "close":"\\u001b[49m"
    },
    "bgBlue":{
        "open":"\\u001b[44m",
        "close":"\\u001b[49m"
    },
    "bgMagenta":{
        "open":"\\u001b[45m",
        "close":"\\u001b[49m"
    },
    "bgCyan":{
        "open":"\\u001b[46m",
        "close":"\\u001b[49m"
    },
    "bgWhite":{
        "open":"\\u001b[47m",
        "close":"\\u001b[49m"
    },
    "bgBlackBright":{
        "open":"\\u001b[100m",
        "close":"\\u001b[49m"
    },
    "bgRedBright":{
        "open":"\\u001b[101m",
        "close":"\\u001b[49m"
    },
    "bgGreenBright":{
        "open":"\\u001b[102m",
        "close":"\\u001b[49m"
    },
    "bgYellowBright":{
        "open":"\\u001b[103m",
        "close":"\\u001b[49m"
    },
    "bgBlueBright":{
        "open":"\\u001b[104m",
        "close":"\\u001b[49m"
    },
    "bgMagentaBright":{
        "open":"\\u001b[105m",
        "close":"\\u001b[49m"
    },
    "bgCyanBright":{
        "open":"\\u001b[106m",
        "close":"\\u001b[49m"
    },
    "bgWhiteBright":{
        "open":"\\u001b[107m",
        "close":"\\u001b[49m"
    },
    "bgGray":{
        "open":"\\u001b[100m",
        "close":"\\u001b[49m"
    },
    "bgGrey":{
        "open":"\\u001b[100m",
        "close":"\\u001b[49m"
    }
}`.replace(`\\\\`, `\\`));

export const rawCodes = JSON.parse(`[
  [0, 0],
  [1, 22],
  [2, 22],
  [3, 23],
  [4, 24],
  [7, 27],
  [8, 28],
  [9, 29],
  [30, 39],
  [31, 39],
  [32, 39],
  [33, 39],
  [34, 39],
  [35, 39],
  [36, 39],
  [37, 39],
  [90, 39],
  [91, 39],
  [92, 39],
  [93, 39],
  [94, 39],
  [95, 39],
  [96, 39],
  [97, 39],
  [40, 49],
  [41, 49],
  [42, 49],
  [43, 49],
  [44, 49],
  [45, 49],
  [46, 49],
  [47, 49],
  [100, 49],
  [101, 49],
  [102, 49],
  [103, 49],
  [104, 49],
  [105, 49],
  [106, 49],
  [107, 49]
]`);
