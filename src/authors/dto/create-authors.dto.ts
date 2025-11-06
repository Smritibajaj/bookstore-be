import { IsNotEmpty } from "class-validator";

export class CreateAuthorDto {
    @IsNotEmpty()
    firstName: string;
    @IsNotEmpty()
    lastName: string;
    @IsNotEmpty()
    biography: string;
}