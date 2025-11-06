import { IsNotEmpty } from "class-validator";

export class CreateBooksDto {
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    isbn: string;
    @IsNotEmpty()
    year: number;
    @IsNotEmpty()
    published: string;
}