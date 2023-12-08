
//@ts-nocheck

import slide1 from '../assets/her-slider/slide-1.jpg'
import slide2 from '../assets/her-slider/slide-2.jpg'
import slide3 from '../assets/her-slider/slide-3.jpg'
import slide4 from '../assets/her-slider/slide-4.jpg'
import slide5 from '../assets/her-slider/slide-5.jpg'


import mainCategory1 from '../assets/categories/kids.png'
import mainCategory2 from '../assets/categories/mens.png'
import mainCategory3 from '../assets/categories/womens.png'


import arival1 from '../assets/arrivals/arrival1.png'
import arival2 from '../assets/arrivals/arrival2.png'
import arival3 from '../assets/arrivals/arrival3.png'
import arival4 from '../assets/arrivals/arrival4.png'
import arival5 from '../assets/arrivals/arrival5.png'
import arival6 from '../assets/arrivals/arrival6.png'


import gallery1 from '../assets/banners/banner.png'
import gallery2 from '../assets/banners/banner 2.png'
import gallery3 from '../assets/banners/banner 3.png'
import gallery4 from '../assets/banners/banner 4.png'

import PopularCat1 from '../assets/papular-categories/category1.png'
import PopularCat2 from '../assets/papular-categories/category2.png'
import PopularCat3 from '../assets/papular-categories/category3.png'
import PopularCat4 from '../assets/papular-categories/category4.png'
import PopularCat5 from '../assets/papular-categories/category5.png'
import PopularCat6 from '../assets/papular-categories/category6.png'


import advCallCenter from '../assets/adv-icons/ic-call-center.png'
import advCreditCard from '../assets/adv-icons/ic-credit-card.png'
import advDelivery from '../assets/adv-icons/ic-delivery.png'
import advShield from '../assets/adv-icons/ic-shield.png'


import blog1 from '../assets/blog/blog1.png'
import blog2 from '../assets/blog/blog2.png'



const navarItems = [
  {
    id:1,
    title_ru:"",
    title_uz:"",
    title_en:"Home",
    path:'/'
  },
  {
    id:2,
    title_ru:"",
    title_uz:"",
    title_en:"Pages",
    path:'/pages'
  },
  {
    id:3,
    title_ru:"",
    title_uz:"",
    title_en:"Shop",
    path:'/shop'
  },
  {
    id:4,
    title_ru:"",
    title_uz:"",
    title_en:"Element",
    path:'/element'
  },
  {
    id:5,
    title_ru:"",
    title_uz:"",
    title_en:"Blog",
    path:'/blog'
  }
]


const heroSliderItem = [
  {
    id: 1,
    image:slide1
  },
  {
    id: 2,
    image:slide2
  },
  {
    id: 3,
    image:slide3
  },
  {
    id: 4,
    image:slide4
  },
  {
    id: 5,
    image:slide5
  },

]


const mainCategoryItem = [
  {
    id:1,
    image:mainCategory3,
    title:'Women`s',
  },
  {
    id:2,
    image:mainCategory2,
    title:'Men`s',
  },
  {
    id:3,
    image:mainCategory1,
    title:'Kid`s',
  }
]


const arrivals = [
  {
    id:1,
    image:arival1,
    title:'nimadr',
    price:'79',
  },
  
  {
    id:2,
    image:arival2,
    title:'nimadr',
    price:'79',
  },

  {
    id:3,
    image:arival3,
    title:'nimadr',
    price:'79',
  },

  {
    id:4,
    image:arival4,
    title:'nimadr',
    price:'79',
  },

  {
    id:5,
    image:arival5,
    title:'nimadr',
    price:'79',
  },

  {
    id:6,
    image:arival6,
    title:'nimadr',
    price:'79',
  },

]


const bannersItem = [
  {
    id:1,
    image:gallery1
  },
  {
    id:2,
    image:gallery2
  },
  {
    id:3,
    image:gallery3
  },
  {
    id:4,
    image:gallery4
  }
]


const popularCategories = [
  {
    id:1,
    image:PopularCat1,
    title:'Tops'
  },
  {
    id:2,
    image:PopularCat2,
    title:'T-Shirts'
  },
  
  {
    id:3,
    image:PopularCat3,
    title:'Caps'
  },
  
  {
    id:4,
    image:PopularCat4,
    title:'Sandals'
  },
  
  {
    id:5,
    image:PopularCat5,
    title:'Jackets'
  },
  {
    id:6,
    image:PopularCat6,
    title:'Coats'
  },
  
]


const advantagesItems = [
  {
    id:1,
    title: 'Fast Worldwide Shipping',
    subtitle: 'Get free shipping over $250',
    icon: advDelivery
  },
  {
    id:2,
    title: '24/7 Customer Support',
    subtitle: 'Friendly 24/7 customer support',
    icon: advCallCenter
  },
  {
    id:3,
    title: 'Money Back Guarantee',
    subtitle: 'We return money within 30 days',
    icon: advShield
  },
  {
    id:4,
    title: 'Secure Online Payment',
    subtitle: 'Accept all major credit cards',
    icon: advCreditCard
  }
]


const blogItems = [
  {
    id:1,
    title: 'Bag Trends for Summer 2020',
    tag:'Fashion',
    date:'August 24, 2020',
    comments: [],
    image:blog1,
    description:'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...'
  },
  {
    id:1,
    title: 'Top 10 of This Season’s Hottest Sneakers',
    tag:'LifeStyle',
    date:'July 16, 2020',
    comments: [1,2,3,4],
    image:blog2,
    description:"Porta habitant vitae quam interdum. Leo viverra non volutpat rhoncus placerat vitae scelerisque. Rhoncus augue faucibus maecenas lacus..."
  },

]

export {
  navarItems,
  heroSliderItem,
  mainCategoryItem,
  arrivals,
  bannersItem,
  popularCategories,
  advantagesItems,
  blogItems
  
}