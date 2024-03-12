
import Countup from 'react-countup';

import { Typography, Box, Stack } from '@mui/material';
import { WidthFull } from '@mui/icons-material';
import { getOrdersCount } from '../../backend/orders';
import { getProductCount } from '../../backend/product';

function Dashboard() {

    const orderCount = getOrdersCount();
    const productCount = getProductCount();
    return (
        <div>
            <Typography variant='h4' textAlign={'center'}>Dashboard</Typography>


            <Stack direction={'row'} sx={{
                justifyContent: 'space-evenly'
            }}>
                <Box sx={{
                    width: '30%',
                    aspectRatio: 1.5,
                    border: '1px solid black',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Typography variant='h4' textAlign={'center'}>Total Orders</Typography>

                    <Countup
                        end={orderCount}
                        style={{
                            fontSize: '5rem',
                            color: 'orange',
                        }}
                    />

                </Box>

                <Box sx={{
                    width: '30%',
                    aspectRatio: 1.5,
                    border: '1px solid black',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Typography variant='h4' textAlign={'center'}>Products</Typography>
                    <Countup
                        end={productCount}
                        style={{
                            fontSize: '5rem',
                            color: 'teal'
                        }}
                    />

                </Box>
            </Stack>

        </div>
    );
}

export default Dashboard;