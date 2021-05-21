import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles'

const products = [
    { id:1, name: 'Shoes', description: 'Running shoes.' , price: '100$', image: 'https://freepngimg.com/thumb/shoes/28530-3-nike-shoes-transparent.png',},
    { id:2, name: 'Macbook', description: 'Apple macbook.', price: '1000$', image: 'https://www.notebookcheck-ru.com/fileadmin/Notebooks/Apple/MacBook_Air_Late_2020_M1_8_Core_GPU_2C_8_GB_RAM_256_GB/macbook_air_m1.png',},
];

const Products = () => {
    const classes = useStyles()
    return(  
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
);
}

export default Products;