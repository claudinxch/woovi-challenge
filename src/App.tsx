
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PaymentMethod } from './pages/PaymentMethod/payment-method'
import { PixPayment } from './pages/PixPayment/pix-payment'
import { CreditCardPayment } from './pages/CreditcardPayment/creditcard-payment'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PaymentMethod />,
    },
    {
      path: "/pix-payment",
      element: <PixPayment />,
    },
    {
      path: "/creditcard-payment",
      element: <CreditCardPayment />,
    },
])

  return <RouterProvider router={router} />
}

export default App
