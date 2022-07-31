class RatingSorterApi {
	static async sorter(data, sortBy) {
		console.log("Get from compute");

		if (sortBy === "likes") {
			return new Promise((resolve) => {
				setTimeout(() => {
					const result = {
						key: sortBy,
						data: Array.from(data).sort((a, b) => b.likes - a.likes),
					};

					resolve(result);
				}, 1000);
			});
		} else if (sortBy === "date") {
			return new Promise((resolve) => {
				setTimeout(() => {
					const result = {
						key: sortBy,
						data: Array.from(data).sort((a, b) => new Date(b.date) - new Date(a.date)),
					};

					resolve(result);
				}, 1000);
			});
		} else if (sortBy === "title") {
			return new Promise((resolve) => {
				setTimeout(() => {
					const result = {
						key: sortBy,
						data: Array.from(data).sort((a, b) => a.title .localeCompare(b.title)),
					};

					resolve(result);
				}, 1000);
			});
		} else {
			throw new "unknow sortBy type"();
		}
	}
}
