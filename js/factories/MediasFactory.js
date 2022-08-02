// eslint-disable-next-line no-unused-vars
class MediasFactory {
	constructor(data) {
    if (data.image) {
        // eslint-disable-next-line no-undef
        return new Picture(data)
    } else if (data.video) {
        // eslint-disable-next-line no-undef
        return new Video(data)
    } else {
      throw 'Unknown format type'
    }
  }
}
