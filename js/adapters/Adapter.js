class Adapter{
  constructor(medias, popularity, date, title) {
    this.medias = medias
    this.popularity = popularity
    this.date = date
    this.title = title
}

async filterByPopularity() {
    return await FilterV2.filterByPopularity(this.popularity
      , this.medias)
}

async filterByDate() {
    return await FilterV2.filterByDate(this.date
      , this.medias)
}

async filterByTitle() {
    return await FilterV2.filterByTitle(this.title
      , this.medias)
}
}