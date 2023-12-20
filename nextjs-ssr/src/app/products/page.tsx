import { PaginationProduct, Product } from "@/models"
import Image from "next/image"
import Link from "next/link";

async function getProducts({ name, page }: {name?: string, page?: number}): Promise<PaginationProduct> {
    const searchParams = new URLSearchParams();

    if(name) searchParams.append("name", name);

    if(page) searchParams.append("page", page.toString())

    const response = await fetch(`http://localhost:8000/products?${searchParams}`, {
        next: {
            revalidate: 10,
        }
    })
    return await response.json()
}

function makeSearchLink({ name, page }: { name?: string, page?: number }) {
    let searchLink = `/products`;
    const searchParams = new URLSearchParams();

    if (name) searchParams.append("name", name);

    if(page && page > 1) searchParams.append("page", page.toString());

    searchLink = searchParams.toString() ? 
        `${searchLink}?${searchParams}` :
        searchLink

    return searchLink;
}

async function ProductsPage({ searchParams }:  {searchParams: { name?: string, page?: string}}){
    const { name } = searchParams;
    const page = searchParams.page ? parseInt(searchParams.page) : 1
    const products = await getProducts({ name, page });
    const totalPages = Math.ceil(products.total / 15)

    return (
        <div className="m-2">
            <form action={makeSearchLink({page: 1})} method="get">
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
                <nav className="flex justify-center mb-2">
                    <ul className=" pagination flex flex-row gap-3">
                        <li className="pagination-item">
                            <Link href={makeSearchLink({ name, page: page - 1 })}>
                                &laquo; Anterior
                            </Link>
                        </li>
                        {new Array(totalPages).fill(0).map((_, index) => (
                            <li className="pagination-item" key={index}>
                                <Link href={makeSearchLink({ name, page: index + 1 })}>
                                    {index + 1}
                                </Link>
                            </li>
                        ))}
                        <li className="pagination-item">
                            <Link href={makeSearchLink({ name, page: page + 1 })}>
                                Próximo &raquo;
                            </Link>
                        </li>
                    </ul>
                </nav>
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