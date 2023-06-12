import Product from '../models/Product.js';
import { StatusCodes } from 'http-status-codes';

    const createProduct = async (req, res) => {
        const data = await Product.create(req.body);
        res.status(StatusCodes.CREATED).json({ data, message: 'Success' });
    };

    const getAllProducts = async (req, res) => {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        // const search = req.query.search || '';
        const skip = (page - 1) * limit;
        const values = await Product.find({}).skip(skip).limit(limit);
        // const values = await Product.find({name: { $regex: search, $options: 'i' }}).skip(skip).limit(limit);
        const totalValues = await Product.countDocuments({});
        const numOfPages = Math.ceil( totalValues / limit);
        res.status(StatusCodes.OK).json({ values, totalValues, numOfPages});
    };
    
    const deleteProduct = async (req, res) => {
        const { id: categoryID } = req.params;
        await Product.findOneAndRemove({ _id: categoryID });
        res.status(StatusCodes.OK).json({ message: 'Success! Category removed' });
    }
    
export { createProduct, getAllProducts, deleteProduct };