import { Link } from "react-router-dom";

export default function CategoryCard({
    image,
    h1, h2
}){
    return (
        <Link to="/" className="flex-1 aspect-square rounded-3xl bg-gray-200 md:aspect-auto transition duration-300 hover:ring-2 ring-green-300">
            <div className="flex flex-col h-full">
                <div className="relative flex h-full">
                    <div className="p-2 flex flex-col justify-between h-full md:justify-center md:p-4">
                        <span className="text-green-900 font-semibold text-sm italic">{h1}</span>
                        <span className="text-gray-800 text-lg mb-auto md:my-4 md:text-2xl">{h2}</span>
                        <span className="text-gray-700 p-2 text-xs underline decoration-gray-700 md:p-0">SHOP NOW</span>
                    </div>
                    <img className="absolute bottom-0 right-1/3 translate-x-1/2 object-contain mt-auto h-3/4 md:h-36 md:static" src={image}></img>
                </div>
            </div>
        </Link>
    )
}