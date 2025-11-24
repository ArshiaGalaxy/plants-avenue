
import { Menu, ShoppingBasket, X } from "lucide-react"
import Logo from "./logo"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Nav() {
  const [menu, setMenu] = useState(false)
  function openMenu(){
    setMenu(!menu);
  }
  return (
      <nav className="fixed z-10 inset-0 bg-green-900 h-fit w-screen">
        <div className="flex items-center p-4 mx-auto container">
          <Link to="/">
            <div className="flex items-center gap-2 cursor-pointer">
                <Logo size="size-6" color="fill-gray-50"/>
                <span className="font-bold text-lg text-white">Plants Avenue</span>
            </div>
          </Link>
          <div className={`transition-all duration-300 bg-gray-50 fixed inset-0 overflow-hidden md:ms-auto md:static md:overflow-visible md:bg-transparent ${(menu) ? 'h-screen' : 'h-0 md:h-fit'}`}>
            <div className="flex items-center p-4 mx-auto container md:hidden">
              <Link to="/">
                <div className="flex items-center gap-2 cursor-pointer">
                    <Logo size="size-6" color="fill-gray-800"/>
                    <span className="font-bold text-lg text-gray-800">Plants Avenue</span>
                </div>
              </Link>
              <div onClick={openMenu} className="cursor-pointer ms-auto">
                <X className="size-6 text-gray-800"/>
              </div>
            </div>
            <hr className="border-gray-300 md:hidden"/>
            <div className="container mx-auto p-4 pt-0 md:w-fit md:m-0 md:p-0">
              <ul className="flex flex-col items-center justify-between text-center divide-y divide-gray-300 md:divide-none md:flex-row md:gap-8">
                <li className="text-gray-800 w-full flex p-2 md:w-fit md:p-0 md:text-white transition duration-300 hover:text-orange-600">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-gray-800 w-full flex p-2 md:w-fit md:p-0 md:text-white transition duration-300 hover:text-orange-600">
                  <Link to="/">Shop</Link>
                </li>
                <li className="text-gray-800 w-full flex p-2 md:w-fit md:p-0 md:text-white transition duration-300 hover:text-orange-600">
                  <Link to="/">Sale</Link>
                </li>
                <li className="text-gray-800 w-full flex p-2 md:w-fit md:p-0 md:text-white transition duration-300 hover:text-orange-600">
                  <Link to="/">Blog</Link>
                </li>
                <li className="text-gray-800 w-full flex p-2 md:w-fit md:p-0 md:text-white transition duration-300 hover:text-orange-600">
                  <Link to="/">About</Link>
                </li>
              </ul>
            </div>
          </div>
          <Link to="/" className="cursor-pointer ms-auto transition duration-300 hover:text-orange-600 text-white">
            <ShoppingBasket className="size-6"/>
          </Link>
          <div onClick={openMenu} className="cursor-pointer ms-4 text-white md:hidden">
            <Menu className="size-6"/>
          </div>
        </div>
      </nav>
    )
}