/**
 * Метод сохраняет файл локально и сохраняет в базе mongo
 * function arguments: express-fileupload file and creator user id
 * returns {status, created_doc, message}
 * */

const fs = require('fs');
const mongoose = require('mongoose');
const { File } = require('../models/models-manager');
const ApiError = require('../exceptions/ApiError');
const logger = require('../log/logger')('file-service');

class FileService {

    async getFile(id, user){
        if(!mongoose.isValidObjectId(id)){
            throw ApiError.BadRequest("Invalid request parameter")
        }
        const file = await File.findById(id);
        logger.log("file:", file);
        if(!file) {
            // return res.status(404).json({error: 'File not found'});
            throw ApiError.NotFound('File not found')
        }

        if(file.accessType === 'private'){
            if(!user){
                // res.status(401).json({message: 'Unauthorized'});
                throw ApiError.UnauthorizedError();
            }

            if(user.role === 'client' && file.owner != user.id){
                if(!file.accessHolders.includes(user.id)){
                    // return res.status(403).json({ error: 'Permission denied' });
                    throw ApiError.Forbidden('Permission denied')
                }
            }
        }

        return file;
    }

    /**
     * delete by Id
     * returns deleted doc
     * */
    async deleteFile(id){
        const file = await File.findByIdAndDelete(id);

        if(!file){
            // ничего страшного, если не найден
            // throw new Error(`Not found file with id ${id}`);
            return;
        }

        // Нужно найти используется ли где-нибудь этот файл еще
        const same = await File.find({ path: file.path });
        // И если не используется удаляем файл
        if(same.length === 0){
            // local storage
            await fs.promises.unlink(file.path);
        }

        return file;

    }

}


module.exports = new FileService();