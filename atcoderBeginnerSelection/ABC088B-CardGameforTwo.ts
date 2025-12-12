import { readFileSync } from "node:fs";

function Main(input: string) {
	// const lines = input.split("\n");
	// const n = Number(lines[0]);
	// const listA = lines[1].split(" ").map(Number).sort().reverse();

	// let ans = 0;

	// for (let i = 0; i < n; i++) {
	// 	if (i % 2) {
	// 		ans -= listA[i];
	// 	} else {
	// 		ans += listA[i];
	// 	}
	// }

	// console.log(ans);

	const [, cardsline] = input.split("\n");
	const cards = cardsline
		.split(" ")
		.map(Number)
		.sort((a, b) => b - a);

	const ans = cards.reduce(
		(total, value, index) => total + value * (index % 2 === 0 ? 1 : -1),
		0,
	);
	console.log(ans);
}

Main(readFileSync("/dev/stdin", "utf8"));
