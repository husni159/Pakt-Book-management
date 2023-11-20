<?php

namespace App\Http\Controllers;
use App\Models\Book;
use App\Traits\HttpResponses;
use App\Http\Requests\BookSearch;
use App\Http\Requests\BookRequest;
use App\Http\Requests\UpdateBookRequest;
use App\Services\BookService;
use Exception;

class BookController extends Controller
{
    use HttpResponses;
    private $bookService;

    public function __construct(BookService $bookService)
    {
        $this->bookService = $bookService;
    }
    public function show($id) {
        try{
            $book = Book::find($id);

            if (!$book) {
                return $this->error(
                    [],
                    'Book not found',
                     404
                );
            }
            return $this->success([
                'book' => $book
            ]);
        }catch(Exception $e) {
            return $this->error(
                [],
                $e->getMessage(),
                 500
            );
        }        
    }

    public function search(BookSearch $request) {
        try{   
            $result     = $this->bookService->search($request->validated());
            return $this->success($result);
        }catch(Exception $e) {
            return $this->error(
                [],
                $e->getMessage(),
                 500
            );
        }
    }

    // Create new book
    public function store(BookRequest $request) {
        try{
            // Create a new Book 
            $newBook     = $this->bookService->create($request->validated());
            return $this->success($newBook,"Book added successfully", 201);
        } catch (Exception $e) {
            return $this->error(
                [],
                $e->getMessage(),
                 500
            );
        }
    }
    
    // Update book
    public function update(UpdateBookRequest $request, $id) {
        try{
            $data = $request->validated();
            $book = Book::findOrFail($id);
            $book->update($data);
    
            return $this->success($book, "Books updated successfully",201);
        }catch( Exception $e) {
            return $this->error(
                [],
                $e->getMessage(),
                 500
            );
        }
      
    }

    // delete book
    public function destroy($id) {
        try{
            $book = Book::findOrFail($id);
            $book->delete();
            return $this->success([],"Book deleted successfully", 201);
        }catch( Exception $e) {
            return $this->error(
                [],
                $e->getMessage(),
                500
            );
        }
    }
   
}
