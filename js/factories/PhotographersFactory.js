class PhotographersFactory {
  constructor(data, type) {
    if(type === 'newApi'){
      return new Photographer(data)
    } else {
      throw ' type non trouvée, erreur de photographer factory'
    }
  }
}