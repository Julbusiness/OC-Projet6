export default class MediaModel {
	constructor(data) {
		this._id = data.id;
		this._photographerId = data.photographerId;
		this._title = data.title;
		this._likes = data.likes;
		this._date = data.date;
		this._price = data.price;
		this._description = data.description;
		this._globalLikes = 297081;
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
}

export class Picture extends MediaModel {
	constructor(data) {
		super(data);
		this._type = "image";
		this._image = data.image;
		this._imagePath = `assets/images/${data.photographerId}/${this._image}`;
		this._format = "img";
		this._icon = "fa-magnifying-glass";
	}

	get path() {
		return this._imagePath;
	}

	get image() {
		return this._image;
	}

	get type() {
		return this._type;
	}

	get icon() {
		return this._icon;
	}

	get format() {
		return this._format;
	}
}

export class Video extends MediaModel {
	constructor(data) {
		super(data);
		this._type = "video";
		this._video = data.video;
		this._videoPath = `assets/images/${data.photographerId}/${this._video}`;
		this._format = "video";
		this._icon = "fa-circle-play";
	}

	get path() {
		return this._videoPath;
	}

	get video() {
		return this._video;
	}

	get type() {
		return this._type;
	}

	get icon() {
		return this._icon;
	}

	get format() {
		return this._format;
	}
}
