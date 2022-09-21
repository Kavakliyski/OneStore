
// styles
import { OutletContainer } from "../styles/Outles.styles"

// react
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

// types
import { CartItemType } from "../components/types/CartItemType";

// components
import Item from "../components/item/Item";

// mui
import Grid from '@material-ui/core/Grid';


export const Outlet = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([] as CartItemType[]);
    const [items, setItems] = useState([] as CartItemType[]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(json => {
                // console.table(json),
                setItems(json);
            });

    }, [])

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
    }

    return (
        <OutletContainer>

            <div className="OutletInnerWrapper">
                <h1>Outlet</h1>
                <hr />
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae consectetur adipisci sint nihil non quia beatae minus ea temporibus fugit soluta eos in eaque quasi eligendi accusamus, deserunt, eveniet totam? Voluptatem incidunt accusantium accusamus consequatur, quidem autem veniam corrupti asperiores minus molestias nemo modi illo repudiandae eum quibusdam repellat doloribus.</h3>
                <hr />
                <Grid container spacing={2}>
                    {items?.map(item => (
                        <Grid item key={item.id} xs={12} sm={3}>
                            <Item item={item} handleAddToCart={handleAddToCart} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </OutletContainer>
    )

}
