import { ApiProperty } from "@nestjs/swagger";

export class SignupInput {
    @ApiProperty()
    emailOrPhone: string;

    @ApiProperty()
    password: string;
}