import {
  assertEquals,
  assertNotEquals,
} from "https://deno.land/std/testing/asserts.ts";
import { styles } from "../lib/main.ts";

Deno.test("return ANSI escape codes", () => {
  assertEquals(styles.green.open, "\u001B[32m");
  assertEquals(styles.bgGreen.open, "\u001B[42m");
  assertEquals(styles.green.close, "\u001B[39m");
  assertEquals(styles.gray.open, styles.grey.open);
});

Deno.test("group related codes into categories", () => {
  assertEquals(styles.color.magenta, styles.magenta);
  assertEquals(styles.bgColor.bgYellow, styles.bgYellow);
  assertEquals(styles.modifier.bold, styles.bold);
});

Deno.test("groups should not be enumerable", () => {
  assertNotEquals(
    Object.getOwnPropertyDescriptor(styles, "modifier"),
    undefined,
  );
  assertEquals(Object.keys(styles).includes("modifier"), false);
});
