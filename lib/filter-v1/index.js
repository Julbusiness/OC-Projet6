class FilterV1 {
  constructor(medias) {
    this.medias = medias
  }

  async filterByPopularity() {
    await new Promise(resolve => setTimeout(resolve, 1000))

    if (!this.medias.likes) {
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