import { ReactElement, useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoriteBorder } from '@mui/icons-material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { useCart } from '../Context/CartContext';

interface ProductCardProps {
    id: number;
    title: string;
    price: number;
    image: string;
}

export default function ProductCard({ id, title, price, image }: ProductCardProps): ReactElement {

    const [isFavorite, setIsFavorite] = useState(false);
    const { addToCart, cart } = useCart();

    const handleToggleFavorite = () => {
        setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    };

    const isProductInCart = cart.some((product) => product.id === id);

    return (
        <Card sx={{ position: 'relative', maxWidth: 345, margin: 'auto', marginTop: '20px' }}>
            <CardMedia
                component="img"
                height="40px"
                image={image}
                alt="Product Image"
                sx={{ objectFit: 'cover', width: '100%', height: '100%', position: 'relative' }}
            />
            <Button
                variant="text"
                color="secondary"
                sx={{ position: 'absolute', top: 0, right: 0 }}
                onClick={handleToggleFavorite}
            >
                {isFavorite ? <FavoriteIcon /> : <FavoriteBorder />}
            </Button>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5" component="div" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    R$ {price}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button
                    size="small"
                    startIcon={isProductInCart ? <ShoppingCart /> : <AddShoppingCartIcon />}
                    onClick={() => addToCart({ id, title, price, image })}
                    disabled={isProductInCart}
                >
                    {isProductInCart ? 'In Cart' : 'Add to Cart'}
                </Button>
                <Button size="medium" variant="contained">
                    Compra agora
                </Button>
            </CardActions>
        </Card>
    );
}
