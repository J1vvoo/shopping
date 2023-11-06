import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'

export default function Header() {
  const { loading, cartItems } = useSelector((state) => state.cart)
  const pathname = usePathname()

  return (
    <header>
      <nav className="flex justify-between items-center h-12 px-4 shadow-md bg-sky-200 text-white">
        <Link href="/" className="text-lg font-bold">
          DAPARA Shopping
        </Link>
        <div>
          <span className="cart-badge">
            {loading ? '' : cartItems.reduce((a, c) => a + c.qty, 0)}
          </span>
          <Link href="/cart">Cart</Link>
        </div>
      </nav>
    </header>
  )
}
