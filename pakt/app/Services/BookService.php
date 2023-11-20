<?php

namespace App\Services;
use App\Models\Book;
use Exception;

class BookService
{
    private $bookModel;

    public function __construct(Book $bookModel)
    {
        $this->bookModel = $bookModel;
    }

    public function create(array $request)
    {
        try{
            
            $newBook = new Book();
            $newBook->title             = $request['title'] ?? '';
            $newBook->author            = $request['author'] ?? '';
            $newBook->publication_date  = $request['publication_date'] ?? '';
            $newBook->isbn              = $request['isbn'] ?? '';
            $newBook->description       = $request['description'] ?? '';
            $newBook->genre             =  $request['genre'] ?? '';
            $newBook->image             =  $request['image'] ?? '';
            $newBook->publisher         =  $request['publisher'] ?? '';
            $newBook->save();
            return $newBook;

        }catch(Exception $e) {
            dd($e->getMessage());
        }
    }

    public function search(array $request)
    {
        try{
            $page    = $request['page'];
            $perpage = $request['perpage']??8;

            $query = Book::query();
            if (isset($request['title'])) {
                $query->where('title', 'like', '%' . $request['title'] . '%');
            }
    
            if (isset($request['author'])) {
                $query->where('author', 'like', '%' . $request['author'] . '%');
            }

            if (isset($request['publication_date'])) {
                $query->where('publication_date', 'like', '%' . $request['publication_date'] . '%');
            }
    
            if (isset($request['isbn'])) {
                $query->where('isbn', 'like', '%' . $request['isbn'] . '%');
            }

            if (isset($request['genre'])) {
                $query->where('genre', 'like', '%' . $request['genre'] . '%');
            }
            // $sql = $query->toSql();
            // dd($sql); 
        
            return  $query->paginate($perpage, ['*'], 'page', $page);
        }catch(Exception $e) {
            dd($e->getMessage());
        }
    }
}
