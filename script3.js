const average = (...args) => {
	let added = 0
	for (let i = 0; i < args.length; i++) {
		added += args[i];
	}
	return added / args.length
}
console.log(average(1, 3, 6, 6))