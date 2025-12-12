import { readFileSync } from "node:fs";

function Main(input: string) {
	const lines = input.split("\n");
	const [a, b, c, x] = lines.map((str) => parseInt(str));
	let ans = 0;
	for (let i = 0; i <= a; i++) {
		for (let j = 0; j <= b; j++) {
			for (let k = 0; k <= c; k++) {
				if (i * 500 + j * 100 + k * 50 === x) {
					ans++;
				}
			}
		}
	}
	console.log(ans);
}

Main(readFileSync("/dev/stdin", "utf8"));
