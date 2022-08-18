/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class ProxyRatingSorter {
  constructor() {
      this.cache = []
  }

  async sorter(medias, sortBy) {
    const cachedResult = await this.cache.find(elt => elt.key === sortBy)

    if (cachedResult) {
      console.log('get from cache')
      return cachedResult
    }

    const data = await RatingSorterApi.sorter(medias, sortBy)

    this.cache.push(data)
    return data
  }
}