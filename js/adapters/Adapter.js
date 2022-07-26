class Adapter{
  constructor(medias) {
    this.medias = medias
    console.log(medias)

}

async filterByPopularity() {
    return await FilterV2.filterByPopularity(this.medias.likes
      , this.medias)
}

async filterByDate() {
    return await FilterV2.filterByDate(this.medias.date
      , this.medias)
}

async filterByTitle() {
    return await FilterV2.filterByTitle(this.medias.title
      , this.medias)
}
}