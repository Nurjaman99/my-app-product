import ProductList from "./product2";

function CopyProduct() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8 px-32">
                <ProductList />
                <ProductList />
                <ProductList />
                <ProductList />
                <ProductList />
                <ProductList />
                <ProductList />
                <ProductList />
            </div>

        </>

    )
}
export default CopyProduct;