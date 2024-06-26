import axios from 'axios'

export const alcoholApi= axios.create({
	baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
})
export const nonAlcoholApi= axios.create({
	baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
})
export const originalDrinkApi= axios.create({
	baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink'
})

export const cocktailApi= axios.create({
	baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
})
export const cocktailGlassApi= axios.create({
	baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass'
})
export const champagneFluteApi= axios.create({
	baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute'
})

//===================

export const searchApi = axios.create({
	baseURL: 'http://www.thecocktaildb.com/api/json/v1/1'
})