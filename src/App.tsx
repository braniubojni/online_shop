import { useState } from "react";
import { useQuery } from "react-query";
// Components
import { Drawer } from "@mui/material";
import Cart from "./components/cart/Cart";
import LinearProgress from "@mui/material/LinearProgress";
import Grid from "@mui/material/Grid";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Badge } from "@mui/material";
import Item from "./components/item/Item";
// Styles
import { Wrapper, StyledButton } from "./App.styles";
// Types
export type CartItemType = {
  id: number;
  desc: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((accum: number, item) => accum + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) =>
    setCartItems((prev) => {
      const isItemCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });

  const handleRemoveFromCart = (id: number) =>
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) {
            return ack;
          }
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          removeFromCart={handleRemoveFromCart}
          addToCart={handleAddToCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>

      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
