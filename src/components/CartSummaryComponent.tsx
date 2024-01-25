import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useCart } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartSummary: React.FC = () => {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();

    const subtotal = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
    const total = subtotal;

    const handleCheckout = async () => {
        try {
            // Lógica de checkout (simulação com um atraso)
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Limpar o carrinho após o checkout
            clearCart();

            // Exibir mensagem de sucesso
            alert('Compra finalizada com sucesso! Carrinho limpo.');

            // Redirecionar para a página inicial após o checkout
            navigate('/');
        } catch (error) {
            // Tratar erros durante o checkout
            console.error('Erro durante o checkout:', error);
            alert('Erro durante o checkout. Por favor, tente novamente.');
        }
    };

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

                    <Button variant="contained" color="primary" onClick={handleCheckout}>
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
