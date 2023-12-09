import { ApiProperty } from "@nestjs/swagger";

export class UserInput {
    @ApiProperty()
    token: string;
}