
const Order = require('../../models/index').orders;

// CREAR NUEVA ORDEN
const createOrder = async (req, res) => {
    try {
        const orderData = req.body;
        
        const order = await Order.create(orderData);
        res.status(201).json({ message: 'Orden creada exitosamente', order });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la orden' });
    }
};

// OBTENER UNA ORDEN POR ID
const getOrder = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ message: 'Orden no encontrada' });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la orden' });
    }
};

// ACTUALIZAR UNA ORDEN
const updateOrder = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const orderData = req.body;
        
        const updatedOrder = await Order.findByIdAndUpdate(orderId, orderData, { new: true });
        if (!updatedOrder) {
            return res.status(404).json({ message: 'Orden no encontrada' });
        }
        res.status(200).json({ message: 'Orden actualizada exitosamente', updatedOrder });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la orden' });
    }
};

// ELIMINAR UNA ORDEN
const deleteOrder = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const deletedOrder = await Order.findByIdAndRemove(orderId);
        if (!deletedOrder) {
            return res.status(404).json({ message: 'Orden no encontrada' });
        }
        res.status(200).json({ message: 'Orden eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la orden' });
    }
};

// OBTENER TODAS LAS ORDENES
const listOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Error al listar las órdenes' });
    }
};

module.exports = { createOrder, getOrder, updateOrder, deleteOrder, listOrders }
