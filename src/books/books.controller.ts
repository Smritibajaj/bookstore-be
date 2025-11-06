import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBooksDto } from './dto/create-books.dto';
import { UpdateBooksDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) {

    }
    @Get('books')
    getBooks() {

    }
    @Get('book/:id')
    getBookById() {
    }

    @Post('book')
    createBook(@Body() createBookDto: CreateBooksDto) {
        return this.booksService.createBooks(createBookDto);
    }
    @Patch('book/:id')
    updateBook(@Param('id') id: string, @Body() updateBookDto: UpdateBooksDto) {
        return this.booksService.updateBook(id, updateBookDto);
    }
}
