import { StatusCodes } from 'http-status-codes';
import CustomAPIError from './custom-api.js';

export default class UnauthorizedError extends CustomAPIError {
    constructor(message) {
        super(message);
        tthis.statusCode = StatusCodes.FORBIDDEN;
    }
}