export const fetch_details = async () => {
    try {
        const fetch_data = await fetch('https://fakestoreapi.com/products')
        const product_data = await fetch_data.json();
        return product_data
    }
    catch (err) {
        return err;
    }
}
