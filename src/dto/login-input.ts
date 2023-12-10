import { ApiProperty } from "@nestjs/swagger";

export class LoginInput {
    @ApiProperty()
    emailOrPhone: string;

    @ApiProperty()
    password: string;
}