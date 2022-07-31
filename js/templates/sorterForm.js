class SorterForm {
  constructor(Medias) {
      this.Medias = Medias

      this.$wrapper = document.createElement('div')
      this.$sorterFormWrapper = document.querySelector('.sorter-form-wrapper')
      this.$mediasWrapper = document.querySelector('.portfolio')

      this.ProxyRatingSorter = new ProxyRatingSorter()
  }

  async sorterMedias(sorter) {
      this.clearMediasWrapper()

      if (!!sorter) {
          // Vous pourrez supprimer cette ligne
          // const sortedData = await RatingSorterApi.sorter(this.Medias, sorter)

          const sortedData = await this.ProxyRatingSorter.sorter(this.Medias, sorter)

          const SortedMedias = sortedData.data 

          SortedMedias.forEach(Media => {
              const Template = new MediaCardContent(Media)
              this.$mediasWrapper.appendChild(Template.createMediaCardContent())
          })
      } else {
          this.Medias.forEach(Media => {
              const Template = new MediaCardContent(Media)
              this.$mediasWrapper.appendChild(Template.createMediaCardContent())
          })
      }
  }

  onChangeSorter() {
      this.$wrapper
          .querySelector('form')
          .addEventListener('change', e => {
              const sorter = e.target.value
              console.log(sorter);
              this.sorterMedias(sorter)
          })
  }

  clearMediasWrapper() {
      this.$mediasWrapper.innerHTML = ""
  }

  render() {
      const sorterForm = `
          <form action="#" method="POST" class="sorter-form">
              <label for="sorter-select">Triez par : </label>
              <select name="sorter-select" id="sorter-select">
                  <option value="">Aucun tri</option>
                  <option value="likes">Popularity</option>
                  <option value="date">Date</option>
                  <option value="title">Title</option>
              </select>
          </form>
      `

      this.$wrapper.innerHTML = sorterForm
      this.onChangeSorter()

      this.$sorterFormWrapper.appendChild(this.$wrapper)
  }
}