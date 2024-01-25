import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useCart } from '../Context/CartContext';

interface CartItemProps {
    product: {
        id: number;
        title: string;
        price: number;
        image: string;
        quantity?: number;
    };
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {
    const { removeFromCart, updateCartItemQuantity } = useCart();
    const [quantity, setQuantity] = useState(product.quantity);

    const handleIncrement = () => {
        const newQuantity = quantity as number + 1;
        setQuantity(newQuantity);
        updateCartItemQuantity(product.id, newQuantity);
    };

    const handleDecrement = () => {
        const newQuantity = Math.max(quantity as number - 1, 0); // Certifica-se de que a quantidade não seja menor que zero
        setQuantity(newQuantity);

        if (newQuantity === 0) {
            removeFromCart(product.id); // Remove o produto se a quantidade for zero
        } else {
            updateCartItemQuantity(product.id, newQuantity);
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
            <img src={product.image} alt={product.title} style={{ width: '100px', marginRight: '20px' }} />
            <div style={{ flex: 1 }}>
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="body1">${product.price.toFixed(2)}</Typography>
            </div>
            <div>
                <Button variant="outlined" onClick={handleDecrement}>
                    -
                </Button>
                <TextField
                    type="number"
                    variant="outlined"
                    value={quantity}
                    InputProps={{ inputProps: { min: 1 } }}
                    onChange={() => { }} // Manter onChange para evitar um aviso de console
                    style={{  width: '40px' }}
                />
                <Button variant="outlined" onClick={handleIncrement}>
                    +
                </Button>

            </div>
        </div >
    );
};

export default CartItem;