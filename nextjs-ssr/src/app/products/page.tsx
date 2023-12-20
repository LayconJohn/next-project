import { PaginationProduct, Product } from "@/models"
import Image from "next/image"

async function getProducts({ name }: {name?: string}): Promise<PaginationProduct> {
    const searchParams = new URLSearchParams();

    if(name) {
        searchParams.append("name", name);
    }

    const response = await fetch(`http://localhost:8000/products?${searchParams}`, {
        next: {
            revalidate: 10,
        }
    })
    return await response.json()
}

async function ProductsPage({ searchParams }:  {searchParams: { name?: string}}){
    const { name } = searchParams;
    const products = await getProducts({ name })

    return (
        <div className="m-2">
            <form action="/products" method="get">
                <input 
                    className=" text-black"
                    type="search"
                    placeholder="Pesquisar..."
                    name="name"
                    defaultValue={name}
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
                    {products.products.map((product, index) => (
                        <div className=" bg-white p-4 rounded shadow" key={index}>
                            <img src={product.image_url} alt={product.name} width={150} height={150}/>
                            <h2 className=" text-lg text-black font-semibold">
                                {product.name}
                            </h2>
                            <div className=" font-bold text-blue-600">
                                {
                                    Intl.NumberFormat("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    }).format(product.price)
                                }
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default ProductsPage;