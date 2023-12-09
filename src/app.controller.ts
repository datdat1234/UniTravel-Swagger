import { Controller, Get, Post, Query, Headers } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger'
import { LoginInput } from './dto/login-input'
import { SignupInput } from './dto/signup-input'
import { UserInput } from './dto/user-input'
import { RouteInput } from './dto/route-input'
import { ReviewInput } from './dto/review-input'

@ApiTags('Login - Logout')
@Controller('/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOkResponse({
    description: 'Return the user token',
    isArray: true
  })
  @Post('login')
  postLogin(@Query() req: LoginInput) {
    return {success: req}
  }

  @ApiOkResponse({
    description: 'User successfully signup',
    isArray: true
  })
  @Post('signup')
  postSignup(@Query() req: SignupInput) {
    return {success: req}
  }
}

@ApiTags('User')
@Controller('/v1/user')
export class UserController {

  @ApiOkResponse({
    description: 'Return the user information',
    isArray: true
  })
  @Get('/')
  getInfo(@Headers() req: UserInput) {
    return {success: req}
  }

  @ApiOkResponse({
    description: 'Return the user notifications',
    isArray: true
  })
  @Get('/notification')
  getNotification(@Headers() req: UserInput) {
    return {success: req}
  }

  @ApiOkResponse({
    description: 'Return the detail notification',
    isArray: true
  })
  @Get('/notification/{id}')
  getDetailNoti(@Headers() header: UserInput) {
    return {success: header}
  }

}

@ApiTags('Route')
@Controller('/v1/route')
export class RouteController {

  @ApiOkResponse({
    description: 'Return the route information',
    isArray: true
  })
  @Get('/')
  getInfo(@Query() req: RouteInput, @Headers() header: UserInput) {
    return {success: req}
  }

}
