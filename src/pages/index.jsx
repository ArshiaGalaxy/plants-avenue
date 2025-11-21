import { ArrowRight, CreditCard, HandHeart, Truck } from "lucide-react"
import HeroImage from "../assets/hero.png"
import CategoryOneImage from "../assets/cat-1.png"
import CategoryTwoImage from "../assets/cat-2.png"
import Category from "../components/category"

export default function Home(){
    return (
      <div>
        <div className="w-screen flex flex-col">
            <div className="relative bg-green-900">
            <span className="bg-green-700 size-96 absolute rounded-full blur-3xl"></span>
            <div className="relative container h-full flex mx-auto pt-16 px-4">
                <div className="flex flex-col gap-2 justify-center">
                <h1 className="font-black text-xl text-gray-50 ">Bring The Nature Close To You</h1>
                <p className="text-sm text-gray-100">Ipsa debitis fugit, placeat quasi beatae id dolor at iste eum assumenda laboriosam tempore magnam sunt omnis quia a quibusdam mollitia aliquam!</p>
                <div className="rounded-full bg-orange-500 text-gray-50 font-semibold py-2 px-4 w-fit flex gap-2 transition duration-300 hover:bg-orange-600 hover:shadow-none shadow-lg cursor-pointer mt-2">
                    Discover now
                    <ArrowRight className="text-gray-50 size-6"/>
                </div>
                </div>
                <div className="relative flex">
                <div className="relative overflow-hidden w-48 h-80 flex rounded-t-full bg-gray-50">
                    <img className="w-full m-auto mb-0" src={HeroImage} alt="Plant"/>
                </div>
                </div>
            </div>
            </div>
            <div className="relative w-screen bg-green-950">
            <div className="container mx-auto p-4 flex items-center h-full divide-x divide-gray-500">
                <div className="flex flex-col items-center gap-2 px-4 flex-1">
                <Truck className="text-gray-50 size-6"/>
                <span className="text-nowrap text-gray-50 text-sm">Free Delivery</span>
                </div>
                <div className="flex flex-col items-center gap-2 px-4 flex-1">
                <CreditCard className="text-gray-50 size-6"/>
                <span className="text-nowrap text-gray-50 text-sm">Safe Payment</span>
                </div>
                <div className="flex flex-col items-center gap-2 px-4 flex-1">
                <HandHeart className="text-gray-50 size-6"/>
                <span className="text-nowrap text-gray-50 text-sm">Frendly Services</span>
                </div>
            </div>
            </div>
        </div>

        <div className="relative bg-linear-to-bl from-green-200  py-8 overflow-hidden">
            <div className="container mx-auto px-4">
            <div className="flex gap-4">
                <Category image={CategoryOneImage} h1="Top Products" h2="Herbal Plants"/>
                <Category image={CategoryTwoImage} h1="Big Sale Products" h2="Indoor Plants"/>
            </div>
            </div>
      </div>
    </div>
    )
}