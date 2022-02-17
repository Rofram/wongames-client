import bannersMock from 'components/BannerSlider/mock'
import gameCardSliderMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const sectionMock = {
  title: 'Games',
  highlight: highlightMock,
  games: gameCardSliderMock
}

const sectionNewGamesMock = {
  title: 'Games',
  games: gameCardSliderMock
}

export default {
  banners: bannersMock,
  sectionNewsGames: sectionNewGamesMock,
  sectionMostPopular: sectionMock,
  sectionUpcoming: sectionMock,
  sectionFreeGames: sectionMock
}
