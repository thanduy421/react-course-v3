export  const getTotals = (cart) => {
    let totalCost = 0;
	let totalAmount = 0;

	for (let { price, amount } of cart.values()) {
		totalCost += price * amount;
		totalAmount += 1;
	}
	
	return {totalCost, totalAmount};
};

export async function fetchData() {
	const url = 'https://www.course-api.com/react-useReducer-cart-project';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}