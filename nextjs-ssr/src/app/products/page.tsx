import { ProductList } from "@/components/ProductList";
import { PaginationProduct, Product } from "@/models"
import { makeSearchLink } from "@/utils";
import Image from "next/image"
import Link from "next/link";





async function ProductsPage({ searchParams }:  {searchParams: { name?: string, page?: string}}){
    const { name } = searchParams;
    const page = searchParams.page ? parseInt(searchParams.page) : 1

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

                <ProductList name={name} page={page}/>
            </div>
        </div>
    )
}

export default ProductsPage;