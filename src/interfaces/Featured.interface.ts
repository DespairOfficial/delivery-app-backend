import { ApiProperty } from '@nestjs/swagger';

export class Featured {
    /**
     * Featured's unique id
     */
    @ApiProperty({
        example: '1',
        description: 'Id of featured',
    })
    readonly id: number;

    /**
     * Title of featured
     */
    @ApiProperty({
        example: 'Discounts',
        description: 'The title of featured, will be shown on main page',
    })
    readonly name: string;

    /**
     * Short description of featured
     */
    @ApiProperty({
        example: 'Very nice discounts',
        description: 'Small description, needs to be shown on main page either',
    })
    readonly description: string;
}
