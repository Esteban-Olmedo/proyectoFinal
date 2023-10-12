const express = require('express');
const router = express.Router();


const { createOrder, getOrder, updateOrder, deleteOrder, listOrders } = require ("../controllers/orderControllers");
const { validateCreateOrder, validateUpdateOrder } = require ("../middlewares/orderValidations");

router.post('/', validateCreateOrder, createOrder); 
router.get('/:orderId', getOrder); 
router.put('/:orderId', validateUpdateOrder, updateOrder); 
router.delete('/:orderId', deleteOrder); 
router.get('/', listOrders); 

module.exports = router;
