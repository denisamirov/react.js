import { createSlice } from '@reduxjs/toolkit'

  
const initialState = {
  isLoading: true,
  errorReload: '',
  cards: [],
  isLoadingDetails: false,
  detail: {},
  link: ''
}
  
export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
      getCardsFetch: (state) => {
        state.isLoading = true
      },
      getCardsSuccess: (state, action) => {
        state.isLoading = false
        state.cards = action.payload
      },
      setCardsFailure: (state, action) => {
        state.errorReload = action.payload
        state.isLoading = false
      },
      setDetailLink: (state, action) => {
        state.link = action.payload
      },
      getDetailFetch: (state) => {
        state.isLoadingDetails = true
      },
      setDetailFetch: (state) => {
        state.isLoadingDetails = false
      },
      getDetailSuccess: (state, action) => {
        state.isLoadingDetails = false
        state.detail = action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { getCardsFetch, getCardsSuccess, 
                 setCardsFailure, setDetailLink,
                 getDetailFetch, getDetailSuccess,
                 setDetailFetch } = cardsSlice.actions
  
  export default cardsSlice.reducer