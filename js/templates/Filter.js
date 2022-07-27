class Filter {
  constructor(Medias){
    this.Medias = Medias;

    this.$wrapper = document.createElement('div')
    this.$filterFormWrapper = document.querySelector('.filter-form-wrapper')
    this.$mediasWrapper = document.querySelector('.portfolio')
  }

  async filterMedias(likes, date, title) {
    this.clearMediasWrapper()

    const FilterLib = new FilterV1(this.Medias, likes, date, title)
    
    const FilteredLikes = await FilterLib.filterByPopularity()
    const FilteredDate = await FilterLib.filterByDate()
    const FilteredTitle = await FilterLib.filterByTitle()

    FilteredLikes.forEach(Media => {
        const Template = new MediaCardContent(Media)
        this.$mediasWrapper.appendChild(Template.createMediaCardContent(Media))
    })

    FilteredDate.forEach(Media => {
        const Template = new MediaCardContent(Media)
        this.$mediasWrapper.appendChild(Template.createMediaCardContent(Media))
    })

    FilteredTitle.forEach(Media => {
        const Template = new MediaCardContent(Media)
        this.$mediasWrapper.appendChild(Template.createMediaCardContent(Media))
    })
}

    onChangeFilter() {
        this.$wrapper
            .querySelector('form')
            .addEventListener('change', e => {
                const element = e.target.value
                this.filterMedias(element)
            })
    }

    clearMediasWrapper() {
        this.$mediasWrapper.innerHTML = ""
    }

    render() {
        const filterForm = `
            <form class="filter-form" action="#" method="POST">
                <label for="filter-select">Trier par : </label>
                <select name="filter-select" id="filter-select">
                    <option value="">Aucun filtre</option>
                    <option value="likes">Popularity</option>
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