import React from 'react';
import { useCart } from '../Context/CartContext';
import CartItem from '../components/CartItemComponent';
import CartSummary from '../components/CartSummaryComponent';
import { Typography } from '@mui/material';
import TopBarComponent from '../components/TopBarComponent';

const CartPage: React.FC = () => {
    const { cart } = useCart();

    return (
        <div>
            <TopBarComponent />

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {/* Coluna de Produtos no Carrinho */}
                <div style={{ padding: '20px' }}>
                    <Typography variant='h4' style={{ marginBottom: '20px' }}>Seu Carrinho</Typography>
                    {cart.map((product) => (
                        <CartItem key={product.id} product={product} />
                    ))}
                </div>

                {/* Coluna de Resumo do Carrinho */}
                <div style={{ padding: '20px' }}>
                    <CartSummary />
                </div>
            </div>
        </div>
    );
};

export default CartPage;
