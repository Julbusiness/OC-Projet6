/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class MediasFactory {
	constructor(data) {
    if (data.image) {
        return new Picture(data)
    } else if (data.video) {
        return new Video(data)
    } else {
      throw 'Unknown format type'
    }
  }
}
