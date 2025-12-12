import { readFileSync } from "node:fs";

// function Main(input: string) {
// 	const lines = input.split("\n");
// 	let ans = 10**9;
// 	for (const str of lines[1].split(" ")) {
// 		let temp = 0;
// 		let num = parseInt(str);
// 		while (num % 2 === 0) {
// 			temp++;
// 			num /= 2;
// 		}
// 		if (temp < ans) {
// 			ans = temp;
// 		}
// 	}
//     console.log(ans);
// }
// Main(readFileSync("/dev/stdin", "utf8"));

function Main(input: string) {
	const lines = input.split("\n");

	const countDivisions = (num: number) => {
		let count = 0;
		while (num % 2 === 0) {
			count++;
			num /= 2;
		}
		return count;
	};

	const ans = Math.min(
		...lines[1]
			.split(" ")
			.map((str) => parseInt(str))
			.map(countDivisions),
	);

	console.log(ans);
}
Main(readFileSync("/dev/stdin", "utf8"));
