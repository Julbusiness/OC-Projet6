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