import { Picture } from '../Models/MediaModel'
import { Video } from '../Models/MediaModel'

export default class MediasFactory {
	constructor(data) {
    if (data.image) {
      // console.log(data.image)
        return new Picture(data)
    } else if (data.video) {
      // console.log(data.video)
        return new Video(data)
    } else {
      throw 'Unknown format type'
    }
  }
}
