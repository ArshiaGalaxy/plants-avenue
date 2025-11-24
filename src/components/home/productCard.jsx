import { Link } from "react-router-dom";

export default function ProductCard({
  image,
  name,
  price
}){
    return (
        <Link to="/" className="cursor-pointer group">
            <div className="flex-1 flex flex-col">
                <div className="w-full aspect-square rounded-3xl bg-gray-200 overflow-hidden flex items-center justify-center">
                    <img src={image} className="max-h-full max-w-full object-cover transition duration-300 group-hover:scale-150" />
                </div>
                <p className="m-2 mb-0 text-gray-800">{name}</p>
                <p className="m-2 my-0 text-orange-500">${price}</p>
            </div>
        </Link>
    )
}