import TopBarComponent from '../components/TopBarComponent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import bannerImage1 from '../assets/images/banner-1.png'
import productShapeImage from '../assets/images/shape_element.png'
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom'

const productData = [
    { id: 1, title: 'Shape Element', price: 100, image: productShapeImage },
    { id: 2, title: 'Shape Element', price: 100, image: productShapeImage },
    { id: 3, title: 'Shape Element', price: 100, image: productShapeImage }
]

export default function HomePage() {

    return (
        <Box >
            <section className='section-topbar'>
                <TopBarComponent />
            </section>

            <section className='section-banner-introducao'>
                <Box sx={{ bgcolor: '#262626', height: '342px', marginTop: '20px', alignContent: 'center', textAlign: 'center', justifyContent: 'center', paddingTop: '60px' }}>
                    <Typography style={{ color: '#fff', textAlign: 'center', fontSize: '40px', fontStyle: 'normal', fontWeight: 400, fontFamily: "Ink Free", marginTop: '60px' }}>
                        Viva o Skateboarding aqui!
                    </Typography>

                    <Typography style={{ color: '#979797', textAlign: 'center', fontSize: '18px', fontStyle: 'normal', fontWeight: 400 }}>
                        Aqui você encontra as melhores peças para seu rolê!
                    </Typography>
                    <Button style={{
                        width: '180px',
                        height: '48px',
                        backgroundColor: '#979797',
                        color: "#fff",
                        marginTop: "20px",
                        flexShrink: 0,
                        borderRadius: 'none'
                    }}>
                        Descubra
                    </Button>
                </Box>
            </section>

            <section className='section-banner-image-1'>
                <Box >
                    <img src={bannerImage1} width={'100%'} />
                </Box>
            </section>

            <section className='section-newsproduct'>
                <Grid container spacing={0} marginTop={6}>
                    <Grid item xs={10}>
                        <Typography variant='h4' style={{ fontStyle: 'normal', fontWeight: 400, marginLeft: '40px'}}>Lançamentos</Typography>
                    </Grid>
                    <Grid item xs={2}>

                        <Button
                            style={{
                                border: '1px solid #979797',
                                color: '#979797',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                            }}
                        >
                            <Link
                                to={'/products'}
                                style={{
                                    textDecoration: 'none',
                                    color: "#979797"
                                }}
                            >
                                Ver coleção
                            </Link>
                        </Button>
                    </Grid>
                    <Grid container >
                        {productData.map((product) => (
                            <ProductCard key={product.id} title={product.title} price={product.price} image={product.image} id={product.id} />
                        ))}
                    </Grid>
                </Grid>
            </section>
        </Box >
    )
}

