export default function ProductsPage(){
    return (
        <div className="m-2">
            <form>
                <input 
                    type="search"
                    placeholder="Pesquisar..."
                    name="name"
                />
                <button
                    type="submit"
                >
                    Pesquisar
                </button>
            </form>
            <div className="container mt-8">
                <h1 className="text-2xl font-bold">Lista de produtos</h1>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className=" bg-white p-4 rounded shadow">
                        <img/>
                        <h2 className=" text-lg text-black font-semibold">
                            nome produto
                        </h2>
                        <div className=" font-bold text-blue-600 font-bold">
                            R$ 10,00
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}