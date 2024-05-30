import { IsNumber, IsString, Max, MaxLength, Min, MinLength, max } from "class-validator"

export class CreateProductDto {
    @IsString()
    @MinLength(1)
    @MaxLength(40)
    name: string;

    @IsNumber()
    @Min(1)
    @Max(9999)
    price: number;

    @IsString()
    @MinLength(1)
    @MaxLength(30)
    marca: string;

    @IsNumber()
    @Min(0)
    @Max(200)
    quant: number;
    
}