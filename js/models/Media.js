class Media {
	constructor(data, sommeLikes) {
		this._id = data.id;
		this._photographerId = data.photographerId;
		this._title = data.title;
		this._likes = data.likes;
		this._date = data.date;
		this._price = data.price;
		this._description = data.description;
		this._globalLikes = sommeLikes;
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

	get globalLikes() {
		return this._globalLikes;
	}

	get path() {
		return this._path;
	}
}

// eslint-disable-next-line no-unused-vars
class Picture extends Media {
	constructor(data) {
		super(data);
		this._type = "image";
		this._image = data.image;
		this._pathName = `assets/images/${data.photographerId}/${this._image}`;
		this._format = "img";
	}

	get path() {
		return this._pathName;
	}

	get image() {
		return this._image;
	}

	get type() {
		return this._type;
	}

	get format() {
		return this._format;
	}
}

// eslint-disable-next-line no-unused-vars
class Video extends Media {
	constructor(data) {
		super(data);
		this._type = "video";
		this._video = data.video;
		this._pathName = `assets/images/${data.photographerId}/${this._video}`;
		this._format = "video"
	}

	get path() {
		return this._pathName;
	}

	get video() {
		return this._video;
	}

	get type() {
		return this._type;
	}

	get format() {
		return this._format;
	}
}
