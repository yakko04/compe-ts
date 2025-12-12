import { readFileSync } from "node:fs";

function Main(input: string) {
	const lines = input.split("\n");
	const [a, b] = lines[0].split(" ").map(Number);
	if ((a * b) % 2 === 0) {
		console.log("Even");
	} else {
		console.log("Odd");
	}
}
Main(readFileSync("/dev/stdin", "utf8"));
