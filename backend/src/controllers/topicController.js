import Topic from '../models/Topic.js';
import { StatusCodes } from 'http-status-codes';

    const createTopic = async (req, res) => {
        const {name} = req.body;
        const topic = await Topic.findOne({name});
        if (topic) {
            res.status(StatusCodes.CONFLICT).json({message: 'The name is unique' });
        }
        const data = await Topic.create(req.body);
        res.status(StatusCodes.CREATED).json({ data, message: 'Create new topic successful' });
    };

    const getTopics = async (req, res) => {

        let filter = {};
        const { status, search } = req.query;
        if(status){
            filter.status = status;
        }
        if (search) {
            filter.title = {
              $regex: search,
              $options: 'iu',
            };
        }
        const result = Topic.find(filter).sort({ name: 1 });

        // Pagination
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const values = await result.skip(skip).limit(limit).exec();

        const totalValues = await Topic.countDocuments(filter);
        const numOfPages = Math.ceil(totalValues / limit);

        res.status(StatusCodes.OK).json({ values, totalValues, numOfPages});
    };
    
    // const deleteCategory = async (req, res) => {
    //     const { id: categoryID } = req.params;
    //     await Category.findOneAndRemove({ _id: categoryID });
    //     res.status(StatusCodes.OK).json({ message: 'Success! Category removed' });
    // }
    
export { createTopic, getTopics};