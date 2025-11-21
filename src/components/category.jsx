export default function Category({
    image,
    h1, h2
}){
    return (
        <div className="flex-1 aspect-square flex flex-col rounded-2xl bg-gray-200">
            <span className="p-2 pb-0 text-green-600 font-semibold text-sm italic">{h1}</span>
            <div className="relative flex h-full">
                <div className="p-2 pt-0 flex flex-col justify-between h-full py-4">
                <span className="text-gray-800">{h2}</span>
                <span className="text-gray-700 text-xs underline decoration-gray-700">SHOP NOW</span>
                </div>
                <img className="absolute bottom-0 right-1/3 translate-x-1/2 object-contain mt-auto h-36" src={image}></img>
            </div>
        </div>
    )
}