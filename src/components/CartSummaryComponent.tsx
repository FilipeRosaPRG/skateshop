import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useCart } from '../Context/CartContext';

const CartSummary: React.FC = () => {
    const { cart } = useCart();

    const subtotal = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
    const total = subtotal; // Você pode adicionar cálculos adicionais aqui, se necessário

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h4' style={{ marginBottom: '20px' }}>Resumo do Carrinho</Typography>
            {cart.length > 0 ? (
                <>
                    {cart.map((product) => (
                        <div key={product.id}>
                            {/* Renderizar resumo para cada item no carrinho, se necessário */}
                        </div>
                    ))}
                    <Typography >Tem algum cupom de desconto?</Typography>
                    <TextField></TextField>
                    <div style={{ borderBottom: '1px solid #ccc', marginBottom: '20px', marginTop: '20px', width: '100%' }}></div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div>
                            <Typography style={{ marginBottom: '20px' }}>Subtotal:</Typography>
                            <Typography style={{ marginBottom: '20px' }}>Frete:</Typography>
                            <Typography >Total:</Typography>
                        </div>
                        <div>
                            <Typography style={{ marginBottom: '20px' }} variant="h6">R${subtotal.toFixed(2)}</Typography>
                            <Typography >Free</Typography>
                            <Typography style={{ marginTop: '10px', marginBottom: '20px' }} variant="h6">R${total.toFixed(2)}</Typography>
                        </div>
                    </div>

                    <Button variant="contained" color="primary">
                        Finalizar Compra
                    </Button>
                </>
            ) : (
                <Typography variant="body1">Seu carrinho está vazio.</Typography>
            )}
        </div>
    );
};

export default CartSummary;
