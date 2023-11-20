# Pakt-Book-management
Book management

Step 1-->  Create a Database with the name of pakt
Step 2--> In the above code pakt folder represents Backend in Laravel and pakt-website for Front end in angular.
Step 3--> run php artisan serve inside pakt folder to run Backend 
Step 4--> run migrations (php artisan migrate) and seeders (php artisan db:seed
)
Step 5--> Open terminal and run ng serve inside pakt-website folder to run front end.
APIs:   

1 --> Admin Login Page
    URL : http://localhost:4200/admin-login
    user name : admin
    Password : Test1234!

2 --> Book Listing with pagination
    URL : http://localhost:4200/dashboard
    Method : GET
3--> Add book
    URL : http://localhost:4200/books/add
    Method : POST
4--> Edit Book 
    URL : http://localhost:4200/books/edit/4
    Method : PUT

5--> Delete Book 
    URL : http://127.0.0.1:8000/api/books/4
    Method : DELETE
    
6--> List all Books and apply filter
   URL : http://localhost:4200/
   
  
