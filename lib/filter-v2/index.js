class FilterV2 {

  static async filterByPopularity(likes, medias) {
      await new Promise(resolve => setTimeout(resolve, 200))


      if (!likes) {
          return medias
      }
      return medias.filter(media => media.likes === likes)
  }

}