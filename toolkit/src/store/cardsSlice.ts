import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CardsState {
  url: string,
  filmTitle: string,
  filmsList: Array<films> | undefined | null | boolean | Error | Array<films> | films,
  search: number,
  cardView: filmsArray,
  favouriteCards: Array<filmsArray>,
  favourite: boolean,
  films: Array<filmsArray>
}

export interface films {
  Search?: Array<filmsArray>
}

export interface filmsArray {
  Title?: string,
  imdbID?: number,
  Search?: filmsArray,
  Poster?: string,
  Actors?: string,
  Genre?: string,
  Released?:string,
  Runtime?:string,
  Director?:string;
  imdbRating?: number
}

export interface filmsCards {
  Title: string
}


const initialState: CardsState = {
  url: '',
  filmTitle: '',
  filmsList: [],
  search: 0,
  films: [],
  cardView: {},
  favouriteCards: [],
  favourite: false,
}

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    changeUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload
    },
    changeTitle: (state, action: PayloadAction<string>) => {
      state.filmTitle = action.payload
    },
    changeFilms: (state, action: PayloadAction<films | undefined | null | boolean | Error | Array<films>>) => {
      state.filmsList = action.payload
    },
    StartSearch: (state, action: PayloadAction<number>) => {
      state.search = action.payload
    },
    FilmsAdd: (state, action: PayloadAction<filmsArray>) => {
      state.films.push(action.payload)
    },
    FilmsClean: (state) => {
      state.films = []
    },
    CardsViewAdd: (state, action: PayloadAction<filmsArray>) => {
      state.cardView = action.payload
    },
    FavouriteAdd: (state, action: PayloadAction<filmsArray>) => {
      state.favouriteCards.push(action.payload)
    },
    favouriteState: (state, action: PayloadAction<boolean>) => {
      state.favourite = action.payload
    },
    favouriteDelete: (state, action: PayloadAction<number>) => {
      state.favouriteCards = state.favouriteCards.filter((card) => card.imdbID !== action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const {  changeUrl, changeTitle, 
                changeFilms, StartSearch, 
                FilmsAdd, FilmsClean, 
                CardsViewAdd, FavouriteAdd, 
                favouriteState, favouriteDelete } = cardsSlice.actions

export default cardsSlice.reducer