export default {
  getAqiInfo (aqi) {
    if (!aqi) {
      return {}
    }
    if (aqi <= 50) {
      return {
        color: '#00E400',
        level: 1,
        grade: '优'
      }
    } else if (aqi <= 100) {
      return {color: '#FFFF00', level: 2, grade: '良'}
    } else if (aqi <= 150) {
      return {color: '#FF7E00', level: 3, grade: '轻度污染'}
    } else if (aqi <= 200) {
      return {color: '#FF0000', level: 4, grade: '中度污染'}
    } else if (aqi <= 300) {
      return {color: '#99004C', level: 5, grade: '重度污染'}
    } else if (aqi > 300) {
      return {color: '#7E0023', level: 6, grade: '严重污染'}
    } else {
      return {}
    }
  }
}
