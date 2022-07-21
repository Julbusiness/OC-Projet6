class App {
    constructor() {
        this.$photographersWrapper = document.querySelector('.photographers-wrapper')
        this.photographersApi = new Api('/data/photographers.json')
    }

    async main() {
        const photographersData = await this.photographersApi.getPhotographers()

        photographersData
        .map(photographer => new Photographer(photographer))
        .forEach(photographer => {
            const Template = new PhotographerCard(photographer)
            this.$photographersWrapper.appendChild(Template.createPhotographerCard())
        })
    }
}

const app = new App()
app.main()
    