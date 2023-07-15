let CART = '';
let PATH = '/mockdata/products.json';
const swiper_wraper = document.querySelector('.swiper .swiper-wrapper')
const verticalSwiper__top__wrapper = document.querySelector('.vertical-swiper-top .swiper-wrapper')
const vertialSwiper__bottom__wrapper = document.querySelector('.vertical-swiper-bottom .swiper-wrapper')
const locationUser = document.querySelector('#location-user')
var language = document.querySelector('#flag');
console.log(language);


const url = 'http://127.0.0.1:5501/mockdata/products.json';

function getUser() {
  if (sessionStorage.getItem('isAuthenticated')) {
    let count = 0;
    let currentUserId = sessionStorage.getItem('currentUserId');
    let currentUserCartKey = 'cart_' + currentUserId;
    count = JSON.parse(localStorage.getItem(currentUserCartKey || '[]')).length;
    document.getElementById('basket').innerHTML = count;
    document.getElementById('loginButton').style.display = 'none';
    document.getElementById('cartName').innerHTML = sessionStorage.getItem('currentUserName') + '\'s Cart';
  }
}


fetch(url)
  .then(response => response.json())
  .then((data) => {
    const filteredMainData = data.filter(data => data.rating > 3)
    const addedData = filteredMainData.map(item => {
      const swiper_slide = document.createElement('div')
      const swiper_slide_img = document.createElement('img')

      swiper_slide.className = 'swiper-slide'
      swiper_slide_img.src = item.imageURL

      swiper_slide.appendChild(swiper_slide_img)
      swiper_wraper.append(swiper_slide)
    })

    const filteredVerticalTopData = data.filter(data => data.top === true)
    const addedVerticalTopData = filteredMainData.map(item => {
      const swiper_slide = document.createElement('div')
      const swiper_slide_img = document.createElement('img')

      swiper_slide.className = 'swiper-slide'
      swiper_slide_img.src = item.imageURL

      swiper_slide.appendChild(swiper_slide_img)
      verticalSwiper__top__wrapper.append(swiper_slide)
    })


    const filteredVerticalBottomData = data.filter(data => data.new === true)
    const addedVerticalBottomData = filteredMainData.map(item => {
      const swiper_slide = document.createElement('div')
      const swiper_slide_img = document.createElement('img')

      swiper_slide.className = 'swiper-slide'
      swiper_slide_img.src = item.imageURL

      swiper_slide.appendChild(swiper_slide_img)
      vertialSwiper__bottom__wrapper.append(swiper_slide)
    })
  })
// get user location
const resGeolocation = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=b1195a0d717b4bb88763fce48faf455a`)
  .then(res => res.json())
  .then(data => {
    locationUser.textContent = data.city
  })


var countryCode = 'uz'; // Replace with the desired country code
var apiUrl = `https://flagcdn.com/${countryCode.toLowerCase()}.svg`;

