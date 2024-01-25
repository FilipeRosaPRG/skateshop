import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@emotion/react'
import theme from './theme.ts'
import { RouterProvider } from 'react-router-dom'
import router from './routes.tsx'
import { CartProvider } from './Context/CartContext.tsx'
import { ProductFilterProvider } from './Context/ProductFilterContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ProductFilterProvider >
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ProductFilterProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
