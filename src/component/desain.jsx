const template = ({ produk }) => {
    return (
        <div className="w-full max-w-sm bg-white border border-sky-900 rounded-lg shadow">
            <img className="p-8 rounded-t-lg" src={produk.image} alt="product image" />
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-sky-900">{produk.title}</h5>
                <span className="text-2xl font-bold text-sky-900 text-center">{produk.price}</span>
            </div>
            <div class="p-2 grid justify-items-end">
                <button className="bg-sky-900 text-white hover:bg-sky-950 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</button>

            </div>
        </div>
    )
}
export default template;