import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle'

const swiper = new Swiper('.swiper', {
	modules: [Navigation, Pagination],
	slidesPerView: 4,
	spaceBetween: 26,

	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
});

// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

import action from "./modules/action";
action()

const newDate = new Date('Feb 22, 2024, 23:59:59')

const daysElement = document.querySelector('#days')
const minutesElement = document.querySelector('#minutes')
const hoursElement = document.querySelector('#hours')
const secondsElement = document.querySelector('#seconds')

function updateTimer() {
	const now = new Date()
	const timeDifference = newDate - now

	if (timeDifference <= 0) {
		daysElement.innerText = '0'
	}

	const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
	const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
	const seconds = Math.floor((timeDifference % (1000 * 60)) / (1000))

	daysElement.innerText = days
	hoursElement.innerText = hours
	minutesElement.innerText = minutes
	secondsElement.innerText = seconds
}

setInterval(() => {
	updateTimer()
}, 1000)
