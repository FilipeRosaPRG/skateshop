import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { styled } from '@mui/system';

const ResponsiveDiv = styled('div')({
    '@media (max-width: 600px)': {
        textAlign: 'center',
    },
});

const LogoText = styled(Typography)({
    '@media (max-width: 600px)': {
        display: 'none',
    },
});

export default function TopBarComponent() {
    const { cart } = useCart();

    return (
        <AppBar style={{ boxShadow: 'none', backgroundColor: '#fff' }} position="relative">
            <Toolbar>
                <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <ResponsiveDiv sx={{ flexGrow: 1, width: '60px', marginTop: '20px' }}>
                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <LogoText
                            style={{ color: '#000', fontSize: '24px', fontStyle: 'italic', fontWeight: 700, letterSpacing: '-2.4px' }}
                        >
                            SkateShop
                        </LogoText>
                    </Link>
                </ResponsiveDiv>
                <IconButton color="inherit" component={Link} to="/profile">
                    <PersonIcon style={{ color: '#000', fontSize: '18px' }} />
                    <Typography variant="body1" style={{ color: '#000', fontFamily: 'Inter', fontSize: '18px', fontStyle: 'normal', fontWeight: 300 }}>
                        Perfil
                    </Typography>
                </IconButton>
                <IconButton color="inherit" component={Link} to="/cart">
                    <Badge badgeContent={cart.length} color="secondary">
                        <ShoppingCartIcon style={{ color: '#000', fontSize: '18px' }} />
                    </Badge>
                    <Typography variant="body1" style={{ color: '#000', fontFamily: 'Inter', fontSize: '18px', fontStyle: 'normal', fontWeight: 300 }}>
                        Carrinho
                    </Typography>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
