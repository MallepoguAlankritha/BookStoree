/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import {
  bookRoute,
  ascendingOrderRouter,
  descendingOrderRouter,
  alphabeticalOrderRouter,
  bookPriceAscendSortRouter,
  bookPriceDescendSortRouter
} from './BookRoute';
// import bookRoute from './BookRoute';
import cartRoute from './cart.route';

/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);
  router.use('/book', bookRoute);
   router.use('/ascending', ascendingOrderRouter);
  router.use('/descending', descendingOrderRouter);
  router.use('/alphabetical', alphabeticalOrderRouter);
  router.use('/priceLowToHigh', bookPriceAscendSortRouter);
  router.use('/priceHighToLow', bookPriceDescendSortRouter);
  router.use('/cart', cartRoute);

  return router;
};

export default routes;
