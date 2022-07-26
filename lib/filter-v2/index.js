class FilterV2 {

  static async filterByPopularity(popularity, medias) {
      await new Promise(resolve => setTimeout(resolve, 200))


      if (!popularity) {
          return medias
      }

      return medias.filter(media => media.popularity === popularity)
  }
}
