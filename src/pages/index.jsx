import { ArrowRight, CreditCard, Droplet, HandHeart, Truck } from "lucide-react"
import HeroImage from "../assets/hero.png"
import CategoryOneImage from "../assets/cat-1.png"
import CategoryTwoImage from "../assets/cat-2.png"
import CategoryCard from "../components/home/categoryCard"
import ProductSlider from "../components/home/productSlider"
import ProductCard from "../components/home/productCard"
import ProductOneImage from "../assets/pro-1.png"
import ProductTwoImage from "../assets/pro-2.png"
import ProductThreeImage from "../assets/pro-3.png"
import ProductFourImage from "../assets/pro-4.png"
import ReadOneImage from "../assets/read-1.png"
import ReadTwoImage from "../assets/read-2.png"
import Texture from "../assets/texture.jpg"
import { Link } from "react-router-dom"
import Footer from "../components/footer"

export default function Home(){
    return (
    <div className="bg-gray-50">
        <div className="w-screen flex flex-col">
            <div className="relative bg-green-900">
                <span className="bg-green-800 size-48 absolute bottom-0 right-1/2 rounded-full blur-3xl"></span>
                <div className="relative container h-full flex justify-between gap-4 mx-auto pt-16 px-4">
                    <div className="flex flex-col gap-2 justify-center md:max-w-200">
                        <h1 className="font-black text-xl md:text-5xl text-white ">Bring The Nature Close To You</h1>
                        <p className="text-sm text-gray-100">Ipsa debitis fugit, placeat quasi beatae id dolor at iste eum assumenda laboriosam tempore magnam sunt omnis quia a quibusdam mollitia aliquam!</p>
                        <div className="rounded-full bg-orange-500 text-white font-semibold py-2 px-4 w-fit flex gap-2 transition duration-300 hover:bg-orange-600 hover:shadow-none shadow-lg cursor-pointer mt-2">
                            Discover now
                            <ArrowRight className="text-white size-6"/>
                        </div>
                    </div>
                    <div className="relative flex">
                        <div className="relative overflow-hidden w-48 h-80 flex rounded-t-full bg-gray-50 md:w-72 md:h-120">
                            <img className="w-full m-auto mb-0" src={HeroImage} alt="Plant"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-screen bg-green-950">
                <div className="container mx-auto p-4 flex items-center h-full divide-x divide-gray-500">
                    <div className="flex flex-col items-center gap-2 px-4 flex-1 text-white md:flex-row md:gap-4">
                        <Truck className="size-6 md:size-8"/>
                        <div className="flex-1">
                            <p className="text-nowrap text-sm">Free Delivery</p>
                            <p className="hidden md:block text-xs text-gray-100 mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elite.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 px-4 flex-1 text-white md:flex-row md:gap-4">
                        <CreditCard className="size-6 md:size-8"/>
                        <div className="flex-1">
                            <p className="text-nowrap text-sm">Safe Payment</p>
                            <p className="hidden md:block text-xs text-gray-100 mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elite.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 px-4 flex-1 text-white md:flex-row md:gap-4">
                        <HandHeart className="size-6 md:size-8"/>
                        <div className="flex-1">
                            <p className="text-nowrap text-sm">Frendly Services</p>
                            <p className="hidden md:block text-xs text-gray-100 mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elite.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="relative bg-linear-to-bl from-green-100 py-8 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex gap-4">
                    <CategoryCard image={CategoryOneImage} h1="Top Products" h2="Herbal Plants"/>
                    <CategoryCard image={CategoryTwoImage} h1="Big Sale Products" h2="Indoor Plants"/>
                </div>

                <div className="mt-8">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-2xl font-black text-green-950">Our Products</p>
                            <hr className="w-48 mt-2 mb-4 border border-green-300"/>    
                        </div>
                        <Link className="text-gray-600 text-sm flex gap-2 items-center transition duration-300 hover:text-orange-600">
                            see more
                            <ArrowRight className="size-4"/>
                        </Link>
                    </div>
                    <ProductSlider>
                        <ProductCard image={ProductOneImage} name={"LiculaGrandis"} price={12}/>
                        <ProductCard image={ProductTwoImage} name={"LiculaGrandis"} price={20.99}/>
                        <ProductCard image={ProductThreeImage} name={"LiculaGrandis"} price={23}/>
                        <ProductCard image={ProductFourImage} name={"LiculaGrandis"} price={10}/>
                        <ProductCard image={ProductOneImage} name={"LiculaGrandis"} price={12}/>
                        <ProductCard image={ProductOneImage} name={"LiculaGrandis"} price={12}/>
                    </ProductSlider>
                </div>
            </div>
        </div>

        <div className="bg-green-950">
            <div className="flex gap-4 container mx-auto p-4">
                <div className="flex-1 flex flex-col md:justify-center">
                    <p className="text-gray-100 font-black text-xl md:text-5xl">Grow Plant For Better Life</p>
                    <Link to="/" className="rounded-full bg-orange-500 text-gray-50 font-semibold py-2 px-4 w-fit flex items-center gap-2 transition duration-300 hover:bg-orange-600 hover:shadow-none shadow-lg cursor-pointer mt-6">
                        Read More
                        <ArrowRight className="text-gray-50 size-6"/>
                    </Link>
                </div>
                <div className="flex-1 flex">
                    <div className="bg-gray-50 mt-12 relative rounded-full size-32 m-auto md:size-48 lg:size-64">
                        <img src={ReadOneImage} className="size-full object-contain"/>
                        <div className="bg-gray-50 rounded-full size-16 m-auto absolute bottom-0 left-0 -translate-x-1/2 border-4 border-green-950 md:size-24 lg:size-32">
                            <img src={ReadTwoImage} className="size-full object-contain"/>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex md:flex-1">
                    <p className="text-sm text-gray-100 m-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam quidem neque doloremque perferendis provident, repellendus earum doloribus necessitatibus commodi, dolores, dolorum nihil dicta! Enim atque nisi dignissimos voluptates, eum adipisci?</p>
                </div>
            </div>
        </div>

        <div className="mt-4">
            <div className="container mx-auto p-4 flex flex-col items-center">
                <p className="text-green-950 font-bold text-xl">Steps to start tacking care of your plants</p>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <div className="w-full mt-4 flex flex-col gap-8 md:flex-row">
                    <div className="flex gap-4 items-center md:flex-col md:text-center">
                        <div className="bg-green-950 size-24 flex rounded-full">
                            <Droplet className="text-gray-100 size-16 m-auto"/>
                        </div>
                        <div className="flex-1">
                            <p className="font-bold text-lg text-gray-800">Humidity Control</p>
                            <p className="text-gray-700">Itaque amet sapiente officia vero voluptates quia praesentium ea fugiat maiores, ducimus nostrum numquam quod autem ab illum quos consequatur eligendi placeat.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center md:flex-col md:text-center">
                        <div className="bg-green-950 size-24 flex rounded-full">
                            <Droplet className="text-gray-100 size-16 m-auto"/>
                        </div>
                        <div className="flex-1">
                            <p className="font-bold text-lg text-gray-800">Humidity Control</p>
                            <p className="text-gray-700">Itaque amet sapiente officia vero voluptates quia praesentium ea fugiat maiores, ducimus nostrum numquam quod autem ab illum quos consequatur eligendi placeat.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center md:flex-col md:text-center">
                        <div className="bg-green-950 size-24 flex rounded-full">
                            <Droplet className="text-gray-100 size-16 m-auto"/>
                        </div>
                        <div className="flex-1">
                            <p className="font-bold text-lg text-gray-800">Humidity Control</p>
                            <p className="text-gray-700">Itaque amet sapiente officia vero voluptates quia praesentium ea fugiat maiores, ducimus nostrum numquam quod autem ab illum quos consequatur eligendi placeat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-4 container mx-auto p-4">
            <div className="bg-gray-200 rounded-3xl md:flex">
                <img src={Texture} className="rounded-t-3xl w-full object-cover md:rounded-none md:rounded-s-3xl md:max-w-1/2 lg:max-w-1/4"/>
                <div className="p-4 md:flex-1 md:my-auto">
                    <p className="font-bold text-green-900">Come with us how to grow plants to be better and healthier</p>
                    <p className="my-4 text-gray-700 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis amet nulla sequi, quod repudiandae, eaque assumenda eligendi veritatis dolores, praesentium sunt hic explicabo consectetur numquam. Sequi deserunt consequatur quisquam atque.</p>
                    <Link to="/" className="rounded-full bg-orange-500 text-gray-50 font-semibold py-2 px-4 w-fit flex gap-2 transition duration-300 hover:bg-orange-600 hover:shadow-none shadow-lg cursor-pointer mt-2">
                        Read More
                        <ArrowRight className="text-gray-50 size-6"/>
                    </Link>
                </div>
            </div>
        </div>

        <div className="container mx-auto px-4">
            <div className="mt-8">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-2xl font-black text-green-950">New Products</p>
                        <hr className="w-48 mt-2 mb-4 border border-green-300"/>    
                    </div>
                    <Link className="text-gray-600 text-sm flex gap-2 items-center">
                        see more
                        <ArrowRight className="size-4"/>
                    </Link>
                </div>
                <ProductSlider>
                    <ProductCard image={ProductOneImage} name={"LiculaGrandis"} price={12}/>
                    <ProductCard image={ProductTwoImage} name={"LiculaGrandis"} price={20.99}/>
                    <ProductCard image={ProductThreeImage} name={"LiculaGrandis"} price={23}/>
                    <ProductCard image={ProductFourImage} name={"LiculaGrandis"} price={10}/>
                    <ProductCard image={ProductOneImage} name={"LiculaGrandis"} price={12}/>
                    <ProductCard image={ProductOneImage} name={"LiculaGrandis"} price={12}/>
                </ProductSlider>
            </div>
        </div>

        <div className="mt-4 bg-gray-200">
            <div className="container mx-auto p-4">
                <p className="text-green-900 text-xl font-bold text-center mb-4">Follow us on Instagram</p>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    <a href="/" className="flex-1 aspect-square rounded-2xl bg-white cursor-pointer">
                        <img src={ProductOneImage} className="size-full object-contain"/>
                    </a>
                    <a href="/" className="flex-1 aspect-square rounded-2xl bg-white cursor-pointer">
                        <img src={ProductTwoImage} className="size-full object-contain"/>
                    </a>
                    <a href="/" className="flex-1 aspect-square rounded-2xl bg-white cursor-pointer">
                        <img src={ProductThreeImage} className="size-full object-contain"/>
                    </a>
                    <a href="/" className="flex-1 aspect-square rounded-2xl bg-white cursor-pointer">
                        <img src={ProductFourImage} className="size-full object-contain"/>
                    </a>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
    )
}