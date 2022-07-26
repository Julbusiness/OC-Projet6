class FilterV1 {
  constructor(medias, popularity, date, title) {
    this.medias = medias
    this.popularity = popularity
    this.date = date
    this.title = title
  }

  async filterByPopularity() {
    await new Promise(resolve => setTimeout(resolve, 1000))

    if (!this.popularity) {
        return this.medias
    }

    const FilteredMedias = []

    for (let i = 0; i < this.medias.length; i++) {
        if (this.medias[i].likes === this.likes) {
            FilteredMedias.push(this.medias[i])
        }
    }

    return FilteredMedias
}
}