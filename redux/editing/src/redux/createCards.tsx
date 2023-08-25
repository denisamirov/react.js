const createCard = (cardId, title, price) => ({
    type: "CREATE_CARD",
    payload: {
        cardId,
        title,
        price
    }
});

export default createCard