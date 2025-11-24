import { Facebook, Instagram, Linkedin, Send } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-green-950 h-fit w-screen">
        <div className="p-4 mx-auto container divide-y divide-gray-500">
            <form className="pt-4 pb-8 flex flex-col items-center justify-center">
                <label className="text-white mb-4 md:w-120" id="sign">Stay In The Loop Special Officers, plant paremnting Tips & More.</label>
                <div className="relative gap-2 items-center w-full md:w-120">
                    <input className="bg-green-900 h-10 rounded-full ps-4 pe-10 w-full focus-visible:outline focus-visible:outline-orange-500 placeholder:text-gray-300" type="email" id="sign" placeholder="enter your email"></input>
                    <button className="absolute -right-1 -top-1 border-4 border-green-950 rounded-full bg-orange-500 text-white font-semibold p-2 w-fit flex gap-2 transition duration-300 hover:bg-orange-600 hover:shadow-none shadow-lg cursor-pointer">
                        <Send className="text-white size-6"/>
                    </button>
                </div>
            </form>
            <div className="px-16 divide-y divide-gray-500 md:flex md:divide-y-0 md:divide-x md:p-4">
                <div className="py-4 flex flex-col items-center gap-1 text-white text-sm md:py-0 md:px-8 md:items-start md:justify-center md:basis-1/6">
                    <p>123 Hello Street, GH, IL</p>
                    <p>+68937824567</p>
                    <p>plants.ave@gmail.com</p>
                </div>
                <div className="py-4 flex flex-col items-center gap-1 text-center text-white text-sm md:py-0 md:px-8 md:flex-1 md:justify-center">
                    <p className="font-black text-xl">Plants Avenue</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nemo, magni, repellendus ab voluptates possimus, ut quam minus quia consequatur eum. Iste, earum quam modi omnis et magni culpa eum?</p>
                    <div className="flex gap-4 items-center justify-center text-green-950">
                        <a href="/" className="p-2 flex items-center justify-center group">
                            <Facebook className="fill-white size-6 transition duration-300 group-hover:fill-orange-600"/>
                        </a>
                        <a href="/" className="p-2 flex items-center justify-center group">
                            <Linkedin className="fill-white size-6 transition duration-300 group-hover:fill-orange-600"/>
                        </a>
                        <a href="/" className="p-2 flex items-center justify-center group">
                            <Instagram className="fill-white size-6 transition duration-300 group-hover:fill-orange-600"/>
                        </a>
                    </div>
                </div>
                <ul className="py-4 flex items-center justify-between gap-2 text-center text-white md:py-0 md:px-8 md:flex-col md:basis-1/6 md:justify-center md:items-start">
                    <li className="text-white transition duration-300 hover:text-orange-600">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-white transition duration-300 hover:text-orange-600">
                        <Link to="/">Shop</Link>
                    </li>
                    <li className="text-white transition duration-300 hover:text-orange-600">
                        <Link to="/">Sale</Link>
                    </li>
                    <li className="text-white transition duration-300 hover:text-orange-600">
                        <Link to="/">Blog</Link>
                    </li>
                    <li className="text-white transition duration-300 hover:text-orange-600">
                        <Link to="/">About</Link>
                    </li>
                </ul>
            </div>
            <p className="text-center pt-4 px-16 text-gray-300 text-xs">
               2025 | Plants Avenue | Coding By Arshia
            </p>
        </div>
    </footer>
    )
}