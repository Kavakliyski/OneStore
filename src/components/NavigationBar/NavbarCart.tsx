
// types
import { CartItemType } from '../types/CartItemType';

// react
import { useState } from 'react';
import { useQuery } from 'react-query';


// mui
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import { Badge, Button, Drawer, Grid, IconButton, LinearProgress } from '@mui/material';
import CartItem from '../ShoppingCart/cartItem/CartItem';
import styled from 'styled-components';
import Cart from '../ShoppingCart/cart/Cart';


const StyledButton = styled(IconButton)``;


export const NavbarCart = () => {




    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([] as CartItemType[]);
    {/* const {data, isLoading, error} = useQuery<CartItemType[]>( */ }
    {/* 'products', */ }
    {/* getProducts */ }
    {/* ); */ }
    {/* console.log(data); */ }

    const getTotalItems = (items: CartItemType[]) =>
        items.reduce((ack: number, item) => ack + item.amount, 0);

    const handleAddToCart = (clickedItem: CartItemType) => {
        setCartItems(prev => {

            const isItemInCart = prev.find(item => item.id === clickedItem.id);

            if (isItemInCart) {
                return prev.map(item =>
                    item.id === clickedItem.id
                        ? { ...item, amount: item.amount + 1 }
                        : item
                );
            }

            return [...prev, { ...clickedItem, amount: 1 }];
        });
    };

    const handleRemoveFromCart = (id: number) => {
        setCartItems(prev =>
            prev.reduce((ack, item) => {
                if (item.id === id) {
                    if (item.amount === 1) return ack;
                    return [...ack, { ...item, amount: item.amount - 1 }];
                } else {
                    return [...ack, item];
                }
            }, [] as CartItemType[])
        );
    };

    // if (isLoading) return <LinearProgress />;
    // if (error) return <div>Something went wrong ...</div>;

    return (
        <>
            <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
                <Button
                    style={{
                        padding: '10px',
                        margin: '10px',
                        color: 'red',

                    }}
                    onClick={() => setCartOpen(false)}
                    variant="outlined"
                    size="medium"
                >
                    Close
                </Button>
                <Cart
                    cartItems={cartItems}
                    addToCart={handleAddToCart}
                    removeFromCart={handleRemoveFromCart}
                />
            </Drawer>
            <StyledButton onClick={() => setCartOpen(true)} >
                <Badge overlap="rectangular" badgeContent={getTotalItems(cartItems)} color='error' >
                    <AddShoppingCart />
                </Badge>
            </StyledButton>
            <Grid container spacing={3}>
                {/* {data?.map(item => (
            <Grid item key={item.id} xs={12} sm={4}>
                <item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
        ))} */}
            </Grid>
        </>

    )
}