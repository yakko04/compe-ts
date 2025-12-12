import { readFileSync } from "node:fs";

function Main(input: string) {
	// const [n, a, b] = input.split(" ").map((str) => parseInt(str));
	// let ans = 0;
	// for (let i = 1; i <= n; i++) {
	// 	const strI = i.toString().split("");
	//     console.log(strI);
	// 	let tmp = 0;
	// 	for (const dig of strI) {
	// 		tmp += parseInt(dig);
	// 	}
	// 	if (a <= tmp && tmp <= b) {
	// 		ans += i;
	// 	}
	// }
	// console.log(ans);
	const [n, a, b] = input.split(" ").map(Number);

	const ans = Array.from({ length: n }, (_, i) => i + 1)
		.filter((i) => {
			const sum = i
				.toString()
				.split("")
				.reduce((s, d) => s + +d, 0);
			return a <= sum && sum <= b;
		})
		.reduce((total, i) => total + i, 0);

	console.log(ans);
}

Main(readFileSync("/dev/stdin", "utf8"));
