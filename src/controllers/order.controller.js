const { Order } = require("../models/order.model");

exports.createOrder = async (req, res, next) => {
  try {
    const { userId, items } = req.body;
    const order = await Order.create({ userId, items });
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};

exports.getOrders = async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

exports.getOrderById = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findByPk(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

exports.updateOrder = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const { userId, items } = req.body;
    const order = await Order.findByPk(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    await order.update({ userId, items });
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

exports.deleteOrder = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findByPk(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    await order.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
