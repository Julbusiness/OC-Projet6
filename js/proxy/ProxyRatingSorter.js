// eslint-disable-next-line no-unused-vars
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

    // eslint-disable-next-line no-undef
    const data = await RatingSorterApi.sorter(medias, sortBy)

    this.cache.push(data)
    return data
  }
}