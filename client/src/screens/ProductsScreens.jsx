import { Box, Center, Wrap, WrapItem } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../redux/actions/productActions";

const ProductScreen = () => {
  const dispatch = useDispatch();
  const { loading, error, products, pagination } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {products.length > 1 && (
        <Box>
          <Wrap
            spacing="30px"
            justify="center"
            minHeight="80vh"
            mx={{ base: "12", md: "20", lg: "32" }}
          >
            {products.map((product) => (
              <WrapItem key={product._id}>
                <Center w="250px" h="450px">
                  <ProductCard product={product} loading={loading} />
                </Center>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      )}
    </>
  );
};

export default ProductScreen;
