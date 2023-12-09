import { ApiProperty } from "@nestjs/swagger";

export class SignupInput {
    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;
}