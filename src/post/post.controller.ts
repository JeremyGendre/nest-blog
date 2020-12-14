import {Body, Controller, Delete, Get, Post, Put} from '@nestjs/common';
import MyResponse from '../services/response/Response';
import SuccessResponse from '../services/response/SuccessResponse';

@Controller('post')
export class PostController {

    @Get('/')
    getPost(): MyResponse {
        return new SuccessResponse({
            message : '',
            author: '',
            createdAt: new Date()
        });
    }

    @Post('/send')
    postPost(@Body() body): MyResponse {
        console.log(body);
        return new SuccessResponse({ message : 'creation ok'});
    }

    @Put('/')
    putPost(): MyResponse {
        return new SuccessResponse({ message : 'update ok'});
    }

    @Delete('/')
    deletePost(): MyResponse {
        return new SuccessResponse({ message : 'deletion ok'});
    }
}
