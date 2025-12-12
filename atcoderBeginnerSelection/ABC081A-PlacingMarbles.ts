import { readFileSync } from "node:fs";

function Main(input: string) {
	const ans = input
		.split("\n")[0]
		.split("")
		.filter((char) => char === "1").length;
	console.log(ans);
}
Main(readFileSync("/dev/stdin", "utf8"));
