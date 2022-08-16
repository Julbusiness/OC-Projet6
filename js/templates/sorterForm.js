// eslint-disable-next-line no-unused-vars
class SorterForm {
	constructor(Medias, wishlistSubject, sommeLikes) {
		this.Medias = Medias;
		this.wishlistSubject = wishlistSubject;
		this.sommeLikes = sommeLikes;

		this.$wrapper = document.createElement("div");
		this.$sorterFormWrapper = document.querySelector(".sorter-form-wrapper");
		this.$mediasWrapper = document.querySelector(".portfolio");

		// eslint-disable-next-line no-undef
		this.ProxyRatingSorter = new ProxyRatingSorter();
	}

	async sorterMedias(sorter) {
		this.clearMediasWrapper();

		if (sorter) {
			const sortedData = await this.ProxyRatingSorter.sorter(
				this.Medias,
				sorter
			);

			const SortedMedias = sortedData.data;

			SortedMedias.forEach((Media) => {
				// eslint-disable-next-line no-undef
				const Template = new MediaCardContent(Media, this.wishlistSubject, this.sommeLikes);
				this.$mediasWrapper.appendChild(Template.createMediaCardContent());
				// eslint-disable-next-line no-undef
				const lightbox = new Lightbox(SortedMedias);
				console.log(lightbox)

				document
					.querySelectorAll(".portfolio .wrapper .media-card")
					.forEach((mediasDom) => {
						// console.log(mediasDom)
						mediasDom.addEventListener("click", (e) => {
							lightbox.show(e.currentTarget.dataset.id);
							// console.log(e.currentTarget.dataset.id);
						});
					});
			});
		} else {
			this.Medias.forEach((Media) => {
				// eslint-disable-next-line no-undef
				const Template = new MediaCardContent(Media);
				this.$mediasWrapper.appendChild(Template.createMediaCardContent());
			});
		}
	}

	onChangeSorter() {
		this.$wrapper.querySelector("form").addEventListener("change", (e) => {
			const sorter = e.target.value;
			this.sorterMedias(sorter);
		});
	}

	clearMediasWrapper() {
		this.$mediasWrapper.innerHTML = "";
		// Permet de remettre le nombre de like global a zero
		const GlobalLikes = document.querySelector(".globalLikes");
		GlobalLikes.innerHTML = this.sommeLikes;
	}

	render() {
		const sorterForm = `
          <form action="#" method="POST" class="sorter-form">
              <label for="sorter-select">Triez par : </label>
              <select name="sorter-select" id="sorter-select">
                  <option value="">Aucun tri</option>
                  <option value="likes">Popularity</option>
                  <option value="date">Date</option>
                  <option value="title">Title</option>
              </select>
          </form>
      `;

		this.$wrapper.innerHTML = sorterForm;
		this.onChangeSorter();

		this.$sorterFormWrapper.appendChild(this.$wrapper);
	}
}
