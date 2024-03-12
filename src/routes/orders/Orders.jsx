import { useEffect, useState } from "react";
import { getOrderDetails, getOrders, updateOrder } from "../../backend/orders";
import './orders.css'

import Typography from '@mui/material/Typography';
import { Container, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, IconButton, Pagination } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DoneIcon from '@mui/icons-material/Done';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';

import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';


function Orders() {

    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [order, setOrder] = useState();
    const [viewOrder, setViewOrder] = useState(false);

    useEffect(() => {
        const orders = getOrders(page);
        setData(orders);
    }, [page])

    return (
        <Box sx={{
            maxHeight: '100vh'
        }}>
            <Typography variant="h3" sx={
                {
                    textAlign: 'center'
                }
            }>Orders</Typography>

            <Container maxWidth='xl' sx={{
                overflow: 'hidden'
            }}>
                <TableContainer sx={{
                    height: "65vh",
                    overflow: 'scroll',
                }} component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Order ID</TableCell>
                                <TableCell>Customer Name</TableCell>
                                <TableCell>Order Date</TableCell>
                                <TableCell>Order Status</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                data.map((order, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            {order.orderID}
                                        </TableCell>
                                        <TableCell>
                                            {order.customerName}
                                        </TableCell>
                                        <TableCell>
                                            {order.orderDate}
                                        </TableCell>
                                        <TableCell sx={{
                                            textTransform: 'capitalize'
                                        }}>
                                            {order.status}
                                        </TableCell>
                                        <TableCell>
                                            <Tooltip title="View Order Details">
                                                <IconButton onClick={() => {
                                                    setOrder(order.orderID);
                                                    setViewOrder(true);
                                                }}>
                                                    <VisibilityIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title={"Edit Order Details"} >
                                                <IconButton>
                                                    <EditIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title={"Mark Order as Delivered"}>
                                                <IconButton onClick={() => {
                                                    updateOrder(order.orderID);
                                                }}>
                                                    <DoneIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Delete Order">
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
                <Pagination sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex'
                }} count={2} siblingCount={2} page={page} onChange={(e, number) => { setPage(number) }}></Pagination>
            </Container>
            <Dialog open={viewOrder} onClose={() => { setViewOrder(false) }} sx={{

            }} >
                <DialogTitle>Order Details</DialogTitle>
                <DialogContent sx={{

                }}>
                    <ViewOrderDetail id={order} />
                </DialogContent>
            </Dialog>
        </Box>

    );
}


const ViewOrderDetail = (props) => {

    const data = getOrderDetails(props.id);

    return (
        <Box sx={{

        }}>
            <Typography>
                Order ID : {data.orderID};
            </Typography>

            <Typography>
                Customer Name : {data.customerName};
            </Typography>
            <Typography>
                Order Date : {data.orderDate};
            </Typography>

            <Typography variant="h5" textAlign={"center"}>Order Details</Typography>
            <Box sx={{
                border: '1px solid black',
            }}>
                {
                    data.details.map((product, index) => (<Box key={index}>
                        <Typography variant="h5" textAlign={"center"}>Product {index + 1}</Typography>
                        <Box sx={{
                            border: '1px solid black',
                        }}>
                            <Typography>
                                Product Name : {product.productName};
                            </Typography>
                            <Typography>
                                Quantity : {product.qty};
                            </Typography>
                            <Typography>
                                Amount : {product.amount};
                            </Typography>
                        </Box>

                    </Box>))
                }

            </Box>

        </Box>
    )
}
ViewOrderDetail.propTypes = {
    id: PropTypes.number,
}

export default Orders;