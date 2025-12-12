import { readFileSync } from "node:fs";

function Main(input: string) {
	const lines = input.split("\n");
	const a = parseInt(lines[0]);
	const lines2 = lines[1].split(" ");
	const b = parseInt(lines2[0]);
	const c = parseInt(lines2[1]);
	console.log("%d %s", a + b + c, lines[2]);
}

Main(readFileSync("/dev/stdin", "utf8"));
