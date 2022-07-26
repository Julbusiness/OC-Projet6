class Filter {
  constructor(medias){
    this.medias = medias;

    this.$wrapper = document.createElement('div')
    this.$filterFormWrapper = document.querySelector('.filter-form-wrapper')
    this.$mediasWrapper = document.querySelector('.portfolio')
  }

  async filterMedias(likes) {
    this.clearMediasWrapper()

    const AdaptedFilterLib = new Adapter(this.medias, likes)
    console.log(AdaptedFilterLib)
    const FilteredMedias = await AdaptedFilterLib.filterByPopularity()

    FilteredMedias.forEach(media => {
        const Template = new MediaCardContent(media)
        this.$mediasWrapper.appendChild(Template.createMediaCardContent())
    })
}

onChangeFilter() {
    this.$wrapper
        .querySelector('form')
        .addEventListener('change', e => {
            const likes = e.target.value
            console.log(e.target.value);
            this.filterMedias(likes)
        })
}

clearMediasWrapper() {
    this.$mediasWrapper.innerHTML = ""
}

render(media) {
    console.log(media);
    const filterForm = `
        <form class="filter-form" action="#" method="POST">
            <label for="filter-select">Trier par : </label>
            <select name="filter-select" id="filter-select">
                <option value="">Aucun filtre</option>
                <option value="${media.likes}">Popularity</option>
                <option value="date">Date</option>
                <option value="title">Title</option>
            </select>
        </form>
    `

    this.$wrapper.innerHTML = filterForm
    this.onChangeFilter()

    this.$filterFormWrapper.appendChild(this.$wrapper)
}

}