import {
  Controller,
  Get,
  Post,
  Query,
  Headers,
  HttpCode,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOkResponse, ApiParam } from '@nestjs/swagger';
import { LoginInput } from './dto/login-input';
import { SignupInput } from './dto/signup-input';
import { UserInput } from './dto/user-input';
import { RouteInput } from './dto/route-input';
import { ReviewInput } from './dto/review-input';

@ApiTags('Login - Signup')
@Controller('/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOkResponse({
    description: 'Return the user token',
    isArray: true,
  })
  @Post('login')
  @HttpCode(200)
  postLogin(@Query() req: LoginInput) {
    return { success: { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' } };
  }

  @ApiOkResponse({
    description: 'User successfully signup',
    isArray: true,
  })
  @Post('signup')
  @HttpCode(200)
  postSignup(@Query() req: SignupInput) {
    return { success: req };
  }
}

@ApiTags('User')
@Controller('/v1/users')
export class UserController {
  @ApiOkResponse({
    description: 'Return the user information',
    isArray: true,
  })
  @Get('/')
  @HttpCode(200)
  getInfo(@Headers() req: UserInput) {
    return {
      success: {
        id: 1,
        name: 'John Doe',
        email: 'test@gmail.com',
        phone: '0909293432',
        address: 'ABC Street, CDE city',
        image: 'test.com/images/1',
        citizen: '24312123',
      },
    };
  }

  @ApiOkResponse({
    description: 'Return the user notifications',
    isArray: true,
  })
  @Get('/notification')
  @HttpCode(200)
  getNotification(@Headers() req: UserInput) {
    return {
      success: [
        {
          id: 1,
          title: 'TEST NOTIFICATION',
          content: 'lorem ipsum dolor sit amet',
          send_date: '8/22/2011',
          sender: {
            name: 'John Doe',
            image: 'test.com/images/1',
          },
        },
        {
          id: 2,
          title: 'TEST NOTIFICATION',
          content: 'lorem ipsum dolor sit amet',
          send_date: '8/22/2011',
          sender: {
            name: 'John Doe',
            image: 'test.com/images/2',
          },
        },
        {
          id: 3,
          title: 'TEST NOTIFICATION',
          content: 'lorem ipsum dolor sit amet',
          send_date: '8/22/2011',
          sender: {
            name: 'John Doe',
            image: 'test.com/images/3',
          },
        },
      ],
    };
  }

  @ApiOkResponse({
    description: 'Return the detail notification',
    isArray: true,
  })
  @Get('/notification/:id')
  @HttpCode(200)
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'Notification ID',
    required: true,
  })
  getDetailNoti(@Headers() header: UserInput) {
    return {
      success: {
        id: 1,
        title: 'TEST NOTIFICATION',
        content: 'lorem ipsum dolor sit amet',
        send_date: '8/22/2011',
        sender: {
          name: 'John Doe',
          image: 'test.com/images/1',
        },
      },
    };
  }
}

@ApiTags('Route')
@Controller('/v1/routes')
export class RouteController {
  @ApiOkResponse({
    description: 'Return the route information',
    isArray: true,
  })
  @Get('/')
  getInfo(@Query() req: RouteInput, @Headers() header: UserInput) {
    return {
      success: {
        start: req.departurePoint,
        end: req.destination,
        direction: 'lorem ipsum dolor sit amet',
        distance: 100,
        time_walk: 100,
        time_drive: 100,
        route: 'test.com/images/1'
      },
    };
  }
}
