import { assertEquals } from "@std/assert";
import { version } from "npm:node-mdaemon-api";

Deno.test(function addTest() {
  assertEquals(version, "24.0.2-alpha.34");
});

