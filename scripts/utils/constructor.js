class Photographer {
	constructor(id, name, city, country, tagline, price, portrait, description) {
		this.id = id;
		this.name = name;
		this.city = city;
		this.country = country;
		this.tagline = tagline;
		this.price = price;
		this.portrait = portrait;
		this.description = description;
		this.arrMedia = [];
		this.globalLikes = 0;
	}
}

class Media {
	constructor(
		id,
		photographeId,
		title,
		image,
		video,
		likes,
		date,
		price,
		description
	) {
		this.id = id;
		this.photographeId = photographeId;
		this.title = title;
		this.image = image;
		this.video = video;
		this.likes = likes;
		this.date = date;
		this.price = price;
		this.description = description;
	}
}
