class MediasFactory {
  constructor(data, type) {
    if(type === 'image'){
      return new Media(data)
    } else if (type === 'video'){
      return new Media(data)
    } else {
      throw 'type non trouvée, erreur de medias factory'
    }
  }
}