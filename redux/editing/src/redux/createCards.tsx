const createCard = (id, title, price) => ({
    type: "CREATE_CARD",
    payload: {
        id,
        title,
        price
    }
});

export default createCard