import { IsNotEmpty } from "class-validator";

export class UpdateBooksDto {
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    isbn: string;
    @IsNotEmpty()
    year: number;
    @IsNotEmpty()
    published: string;
}