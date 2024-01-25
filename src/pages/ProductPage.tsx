import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import productShapeImage from '../assets/images/shape_element.png';
import TopBarComponent from '../components/TopBarComponent';
import { useCart } from '../Context/CartContext';

const productData = [
    { id: 1, title: 'Product 1', price: 100, image: productShapeImage, date: '2022-01-01' },
    { id: 2, title: 'Product 2', price: 200, image: productShapeImage, date: '2022-01-02' },
    { id: 3, title: 'Product 3', price: 150, image: productShapeImage, date: '2022-01-03' },
];

const ProductPage: React.FC = () => {
    const [filteredProducts, setFilteredProducts] = useState(productData);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState<'priceAsc' | 'priceDesc' | 'dateAsc' | 'dateDesc'>('priceAsc');
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(1000);

    const handleSearch = () => {
        const filtered = productData.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    const handleSort = () => {
        const sortedProducts = [...filteredProducts].sort((a, b) => {
            switch (sortOption) {
                case 'priceAsc':
                    return a.price - b.price;
                case 'priceDesc':
                    return b.price - a.price;
                case 'dateAsc':
                    return new Date(a.date).getTime() - new Date(b.date).getTime();
                case 'dateDesc':
                    return new Date(b.date).getTime() - new Date(a.date).getTime();
                default:
                    return 0;
            }
        });

        setFilteredProducts(sortedProducts);
    };

    const handleFilterPrice = () => {
        const filtered = productData.filter(
            (product) => product.price >= minPrice && product.price <= maxPrice
        );
        setFilteredProducts(filtered);
    };

    const { cart } = useCart();

    useEffect(() => {
        // Salvar carrinho no localStorage sempre que ele for atualizado
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        // Reordenar produtos sempre que a opção de ordenação mudar
        handleSort();
    }, [sortOption, filteredProducts]); // Adicionamos filteredProducts aqui para evitar loop infinito

    useEffect(() => {
        // Filtrar produtos por preço sempre que minPrice ou maxPrice mudar
        handleFilterPrice();
    }, [minPrice, maxPrice]);

    return (
        <div >
            <TopBarComponent />
            <Typography style={{ marginLeft: '40px' }} variant="h4">Produtos</Typography>
            <Box m={2}>
                <div>
                    <TextField
                        label="Search"
                        variant="outlined"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button style={{ marginLeft: '20px', marginRight: '20px', height: '60px' }} variant="contained" onClick={handleSearch}>
                        Search
                    </Button>
                    <br />
                    <br />
                    <FormControl style={{ marginRight: '20px' }}>
                        <InputLabel>Ordenar por</InputLabel>
                        <Select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value as 'priceAsc' | 'priceDesc' | 'dateAsc' | 'dateDesc')}
                        >
                            <MenuItem value="priceAsc">Preço - Crescente</MenuItem>
                            <MenuItem value="priceDesc">Preço - Decrescente</MenuItem>
                            <MenuItem value="dateAsc">Data - Crescente</MenuItem>
                            <MenuItem value="dateDesc">Data - Decrescente</MenuItem>
                        </Select>
                    </FormControl>
                    <br />
                    <br />
                    <TextField
                        label="Preço Mínimo"
                        type="number"
                        value={minPrice}
                        onChange={(e) => setMinPrice(parseFloat(e.target.value))}
                        style={{ marginRight: '20px' }}
                    />
                    <TextField
                        label="Preço Máximo"
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(parseFloat(e.target.value))}
                    />
                </div>
            </Box>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} image={product.image} />
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
