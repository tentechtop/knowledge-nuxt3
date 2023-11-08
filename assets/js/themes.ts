const themes = {
  black: {
    logo: 'https://file.kwunphi.com/kwunphi4/images/icon/logo1.png?x-oss-process=image/resize,m_mfit,w_300,h_50',
    logoEn:"https://file.kwunphi.com/kwunphi4/images/logo/KwunPhi-Logo-en-white.png?x-oss-process=image/resize,m_mfit,w_300,h_50",
    color: '#fff'
  },
  white: {
    logo: 'https://file.kwunphi.com/kwunphi4/images/icon/logo2.png?x-oss-process=image/resize,m_mfit,w_300,h_50',
    logoEn:"https://file.kwunphi.com/kwunphi4/images/logo/KwunPhi-Logo-en.png?x-oss-process=image/resize,m_mfit,w_300,h_50",
    color: '#000'
  }
}
export default {
  themes,
  getTheme(theme: string){
    return themes[theme] || themes.black
  }
}
