export default class MediaSlider {
	constructor(media) {
		this._media = media;
    this._$wrapperSlider = null
    console.log(this._media.format)
	}

  get mediaHtmlElement() {
		return this.$wrapperSlider;
	}


	createSliderMedia(media) {
		this.$wrapperSlider = document.createElement("div");
		this.$wrapperSlider.classList.add("slider-portfolio")

    // console.log(this._media)

    const sliderCard =`
  		<button class="btn-close-slider" type="button">X</button>

  		<${this._media.format} src="${this._media.path}" class="img-visible-slider"  alt="${this._media.description}, ${this._media.type}" controls>

  		<button class="btn-left" type="button">
    		<img src="assets/icons/chevron-letf.svg" alt="chevron left">
 			</button>

  		<button class="btn-right" type="button">
    		<img src="assets/icons/chevron-right.svg" alt="chevron right">
  		</button>
    `;
		this.$wrapperSlider.innerHTML = sliderCard;
		return this.$wrapperSlider;
	}
}
