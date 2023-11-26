import { embedHomeRandomCountry }  from './components/home-random.js'
import { actionBar, createDetailInfoBoard} from './components/home-action-buttons.js'

embedHomeRandomCountry()

document.querySelector('#btn-reload_country').addEventListener('click', () => {
    embedHomeRandomCountry()
  })


document.querySelector('#btn-more_info').addEventListener('click', () => {
  actionBar.hide()
})
document.querySelector('.back-button_section').addEventListener('animationend', () => {
  if(!actionBar.detailInfoStatus){
    createDetailInfoBoard()
  }
  actionBar.detailInfoStatus = !actionBar.detailInfoStatus
  console.log(actionBar.detailInfoStatus)
})

document.querySelector('.back-button_section img').addEventListener('click', () => {
  actionBar.show()
})