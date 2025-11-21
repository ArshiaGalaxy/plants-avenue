
import { Menu } from "lucide-react"
import Logo from "./logo"
import { Link } from "react-router-dom"

export default function Nav() {
  return (
      <nav className="fixed z-10 inset-0 backdrop-blur-lg h-fit w-screen">
        <div className="flex items-center p-4 mx-auto container">
          <Link to="/">
            <div className="flex items-center gap-2 cursor-pointer">
                <Logo size="size-6" color="fill-gray-100"/>
                <span className="font-bold text-lg text-gray-50">Plants Avenue</span>
            </div>
          </Link>
          <div className="cursor-pointer ms-auto">
            <Menu className="size-6 text-gray-50"/>
          </div>
        </div>
      </nav>
    )
}