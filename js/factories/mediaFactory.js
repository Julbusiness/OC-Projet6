function photographerBanner(data){
	const picture = `assets/photographers/${data.portrait}`

	function getBanner(){

		const article = document.createElement('div')

		const name = document.createElement('h1')
		name.textContent = `${data.name}`

		const infos = document.createElement('div')
		infos.classList.add('infos-banner')

		const localisation = document.createElement('p')
    localisation.classList.add('localisation-banner')
    localisation.textContent = `${data.city},${data.country}`

		const tagline = document.createElement('p')
    tagline.classList.add('tagline')
    tagline.textContent = `${data.tagline}`
		
    article.appendChild(name)
    article.appendChild(infos)
    infos.appendChild(localisation)
    infos.appendChild(tagline)
    return article
	}

	function getImageBanner(){
		const img = document.createElement('img')
		img.setAttribute('src', picture)
		img.setAttribute('alt', `${data.description}`)
		return img
	}
	return { picture, data, getBanner, getImageBanner }
}

