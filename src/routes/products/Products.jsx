import { Table, TableHead, Typography, Container, IconButton, TableContainer, Paper, TableBody, TableCell, TableRow } from '@mui/material';
import { useState, useEffect } from 'react';
import { getProducts } from '../../backend/product';
import Pagination from '@mui/material/Pagination';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';

// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
function Products() {

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        const data = getProducts(page);
        setProducts(data);
    }, [page]);

    return (
        <Box sx={{
            maxHeight: '100vh'
        }}>
            <Typography variant='h3' sx={{
                textAlign: 'center'
            }}>Products</Typography>
            {/* <Stack>
                <Button>
                    Add Product
                </Button>
            </Stack> */}
            <Container maxWidth='xl' sx={{
                overflow: 'hidden',
            }}>
                <TableContainer component={Paper} sx={{
                    height: '65vh',
                    overflow: 'scroll'
                }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Product ID
                                </TableCell>
                                <TableCell>
                                    Product Name
                                </TableCell>
                                <TableCell>
                                    Product Category
                                </TableCell>
                                <TableCell>
                                    Price
                                </TableCell>
                                <TableCell>
                                    Quantity
                                </TableCell>
                                <TableCell>
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                products.map(product => (
                                    <TableRow key={product.id}>
                                        <TableCell>
                                            {product.id}
                                        </TableCell>
                                        <TableCell>
                                            {
                                                product.name
                                            }
                                        </TableCell>
                                        <TableCell>
                                            {product.category}
                                        </TableCell>
                                        <TableCell>
                                            {product.price}
                                        </TableCell>
                                        <TableCell>
                                            {product.quantity}
                                        </TableCell>
                                        <TableCell>
                                            <Tooltip title="Edit Product">
                                                <IconButton
                                                    sx={{
                                                        ":hover": {
                                                            color: 'black'
                                                        }
                                                    }}>
                                                    <EditIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Delete Product">
                                                <IconButton sx={{
                                                    ":hover": {
                                                        color: 'red',
                                                    }
                                                }}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <Pagination page={page}
                    onChange={(e, page) => {
                        setPage(page)
                    }} count={2} siblingCount={2}
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex'
                    }}
                />
            </Container>
        </Box>
    );
}

export default Products;