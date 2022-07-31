class MediaCardContent {
	constructor(media, WishlistSubject) {
		this._media = media;
		this.WishlistSubject = WishlistSubject;

		this.$wrapperWrap = document.createElement("div");
		this.$wrapperWrap.classList.add("wrap");

		this.$wrapperContent = document.createElement("div");
		this.$wrapperContent.classList.add("media-card");
		this.$wrapperContent.setAttribute("data-id", `${this._media.id}`);

		this.$wrapperPics = document.createElement("div");
		this.$wrapperPics.classList.add("pics");
	}

	/* -------------------------------- fonctions ------------------------------- */
	handleWishButton() {
		const that = this;

		this.$wrapperWrap
			.querySelector(".wish-btn")
			.addEventListener("click", function () {
				if (this.classList.contains("wished")) {
					this.classList.remove("wished");
					console.log(that.WishListSubject.fire("DEC"));
					that.WishListSubject.fire("DEC");
				} else {
					this.classList.add("wished");
					console.log(that.WishListSubject.fire("INC"));
					that.WishListSubject.fire("INC");
				}
			});
	}

	createMediaCardContent() {
		const card = ` 

        <a href="#" class="media-cover" aria-label="${this._media.description}, agrandir l'image">          
          <${this._media.format} src="${this._media.path}" alt="${this._media.description}, ${this._media.type}" class="pics"/>
        </a> 
    `;

		const cardContent = `

		<div class="media-content">
		<h2 class="media-title" tabindex="0">${this._media.title}</h2>
		<div class="media-like favorite">
			<span class="wish-count">${this._media.likes}</span>
			<div class="wish-btn">
				<svg class="heart" viewBox="0 0 241.59736 220.05746">
					<g transform="translate(-175.32265,-1696.4765)">
							<path d="m 243.45243,1708.9786 c -26.9341,0.2312 -51.58009,21.4767 -55.08178,48.2939 -3.11346,23.844 7.32949,47.3995 23.96855,64.2142 27.5148,27.8054 61.22631,49.7939 83.44686,82.5473 4.39089,-4.6889 9.27818,-12.0655 14.22742,-17.529 25.22951,-27.8509 58.1653,-48.0133 80.86454,-78.1545 17.17546,-22.8065 19.10279,-58.1138 -0.53802,-80.4051 -18.24975,-20.7125 -51.76012,-25.1712 -74.36972,-9.2543 -8.22594,5.791 -15.27469,13.3707 -19.93251,22.3123 -10.05314,-19.3195 -30.53412,-32.2142 -52.58534,-32.0248 z" />
					</g>
				</svg>
			</div>
			</div>
		</div> 
		`;
		this.$wrapperWrap.appendChild(this.$wrapperContent);
		this.$wrapperWrap.appendChild(this.$wrapperPics);
		this.$wrapperContent.innerHTML = card;
		this.$wrapperPics.innerHTML = cardContent;
		this.handleWishButton();
		return this.$wrapperWrap;
	}
}
