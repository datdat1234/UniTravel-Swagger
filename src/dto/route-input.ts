import { ApiProperty } from "@nestjs/swagger";

export class RouteInput {
    @ApiProperty()
    departurePoint: string;

    @ApiProperty()
    destination: string;
}