import { ApiProperty } from "@nestjs/swagger";

export class ReviewInput {
    @ApiProperty()
    star: number;

    @ApiProperty()
    desc: string;
}