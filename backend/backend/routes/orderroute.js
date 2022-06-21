const express=require('express');
const Order = require('../modles/ordermodel')
const expressAsyncHandler =require("express-async-handler")

const {isAuth} =require("../utils")

const orderRouter = express.Router();

orderRouter.post('/', isAuth, expressAsyncHandler(async (req, res) => {
    
  const newOrder = new Order({
      orderItems: req.body.order.orderItems.map((x) => ({ ...x, product: x._id })),
      shippingAddress: req.body.order.shippingAddress,
      paymentMethod: req.body.order.paymentMethod,
      itemsPrice: req.body.order.itemsPrice,
      shippingPrice: req.body.order.shippingPrice,
      taxPrice: req.body.order.taxPrice,
      totalPrice: req.body.order.totalPrice,
      user: req.user._id,
    });
    const order = await newOrder.save();
    res.status(201).send({ message: 'New Order Created', order });
  })
);

orderRouter.get('/mine', isAuth, expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.send(orders);
  })
);

orderRouter.get('/:id', isAuth, expressAsyncHandler(async (req, res) => {
    
  const order = await Order.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  })
);

module.exports=orderRouter;