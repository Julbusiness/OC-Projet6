class FilterV1 {
	constructor(Medias, likes, date, title) {
		this._Medias = Medias;
		this._likes = likes;
		this._date = date;
		this._title = title;
	}
	/* ------------------------------ by popularity ----------------------------- */
	async filterByPopularity() {
		await new Promise((resolve) => setTimeout(resolve, 1000));

		if (!this._likes) {
			return this._Medias;
		}

		const FilteredMedias = [];

		for (let i = 0; i < this._Medias.length; i++) {
			// console.log(this._Medias[i].likes)
			if (this._Medias[i].likes) {
				FilteredMedias.push(this._Medias[i]);
			}
		}

		FilteredMedias.sort((a, b) => {
			return b.likes - a.likes;
		});

		return FilteredMedias;
	}

	/* --------------------------------- by date -------------------------------- */
	async filterByDate() {
		await new Promise((resolve) => setTimeout(resolve, 1000));

		if (!this._date) {
			return this._date;
		}

		const FilteredMedias = [];

		for (let i = 0; i < this._Medias.length; i++) {
			// console.log(this._Medias[i].likes)
			if (this._Medias[i].date) {
				FilteredMedias.push(this._Medias[i]);
			}
		}

		FilteredMedias.sort((a, b) => {
			return b.date - a.date;
		});

		return FilteredMedias;
	}

	/* -------------------------------- by title -------------------------------- */
	async filterByTitle() {
		await new Promise((resolve) => setTimeout(resolve, 1000));

		if (!this._title) {
			return this._title;
		}

		const FilteredMedias = [];

		for (let i = 0; i < this._Medias.length; i++) {
			// console.log(this._Medias[i].likes)
			if (this._Medias[i].title) {
				FilteredMedias.push(this._Medias[i]);
			}
		}

		FilteredMedias.sort((a, b) => {
			return b.title - a.title;
		});

		return FilteredMedias;
	}
}
