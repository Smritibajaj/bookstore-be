import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsController {
    constructor(private booksService: AuthorsService) {
    
        }
        @Get('authors')
        getBooks() {
    
        }
        @Get('author/:id')
        getBookById() {
        }
    
        @Post('author')
        createBook() {
    
        }
        @Patch('author/:id')
        updateBook() {
    
        }
        @Delete('author/:id')
        deleteBook() {
    
        }
}
