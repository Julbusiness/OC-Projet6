class Media {
	constructor(data) {
		this._id = data.id;
		this._photographeId = data.photographeId;
		this._title = data.title;
		this._image = data.image;
		this._video = data.video;
		this._likes = data.likes;
		this._date = data.date;
		this._price = data.price;
		this._description = data.description;
	}

	get id() {
		return this._id;
	}

	get photographeId() {
		return this._photographeId;
	}

	get title() {
		return this._title;
	}

	get image() {
		return this._image;
	}

	get video() {
		return this._video;
	}

	get likes() {
		return this._likes;
	}

	get date() {
		return this._date;
	}

	get price() {
		return this._price;
	}

	get description() {
		return this._description;
	}
}
