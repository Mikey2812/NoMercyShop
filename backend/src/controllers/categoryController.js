import Category from "../models/Category.js";
import { StatusCodes } from 'http-status-codes';

    const createCategory = async (req, res) => {
        const data = await Category.create(req.body);
        res.status(StatusCodes.CREATED).json({ data, message: 'Success' });
    };

    const getAllCategories = async (req, res) => {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        // const search = req.query.search || '';
        const skip = (page - 1) * limit;
        const categories = await Category.find({}).skip(skip).limit(limit);
        // const categories = await Category.find({name: { $regex: search, $options: 'i' }}).skip(skip).limit(limit);
        const totalCategories = await Category.countDocuments({});
        const numOfPages = Math.ceil( totalCategories / limit);
        res.status(StatusCodes.OK).json({ categories, totalCategories, numOfPages});
    };
    
    const deleteCategory = async (req, res) => {
        const { id: categoryID } = req.params;
        await Category.findOneAndRemove({ _id: categoryID });
        res.status(StatusCodes.OK).json({ message: 'Success! Category removed' });
    }
    
export { createCategory, getAllCategories, deleteCategory };