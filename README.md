# Pakt-Book-management
Book management

Step 1-->  Create a Database with the name of pakt <br />
Step 2--> In the above code pakt folder represents Backend in Laravel and pakt-website for Front end in angular. <br />
Step 3--> run php artisan serve inside pakt folder to run Backend <br />
Step 4--> run migrations (php artisan migrate) and seeders (php artisan db:seed <br />
)
Step 5--> Open terminal and run ng serve inside pakt-website folder to run front end. <br />
URLs:   <br />

1 --> Admin Login Page <br />
    URL : http://localhost:4200/admin-login <br />
    user name : admin <br />
    Password : Test1234! <br />

2 --> Book Listing with pagination <br />
    URL : http://localhost:4200/dashboard <br />
     Method : GET <br />
3--> Add book <br />
    URL : http://localhost:4200/books/add <br />
    Method : POST <br />
4--> Edit Book <br />
    URL : http://localhost:4200/books/edit/4 <br />
    Method : PUT <br />

5--> Delete Book <br />
    URL : http://127.0.0.1:8000/api/books/4 <br />
    Method : DELETE <br />
    
6--> List all Books and apply filter <br />
   URL : http://localhost:4200/ <br />

API and details <br />

1--> API for admin Login <br /> 

 url : http://127.0.0.1:8000/api/login-user <br />

 Request: <br />
 Body : <br />
 {"username":"admin", "password" : "Test1234!"} <br />

Rsponse: <br />

{
    "status": true,
    "message": null,
    "details": {
        "user": {
            "id": 2,
            "username": "admin",
            "name": "admin",
            "email": "admin@gmail.com",
            "email_verified_at": null,
            "created_at": null,
            "updated_at": null,
            "role": 1,
            "avatar": null
        },
        "token": "92|tKu36h8WWjKBMWpYJGnadS3mX5sli0ypSxKMkLUD"
    }
}

2 --> API for fetching a book <br />
    Url : http://127.0.0.1:8000/api/books/1 <br />
    Method : GET <br />
    Respose :
{
    "status": true,
    "message": null,
    "details": {
        "book": {
            "id": 10,
            "title": "Sint saepe dolorem quia ut laborum rerum.",
            "author": "Raphael Schimmel I",
            "isbn": "9790674985390",
            "genre": "illum",
            "publication_date": "1972-10-30",
            "created_at": null,
            "updated_at": null,
            "description": "Doloremque qui ratione omnis et quas voluptatem ducimus ipsum. Neque aliquam omnis aperiam excepturi. Voluptates facilis consectetur veniam quos aut.",
            "image": "https://via.placeholder.com/640x480.png/0099ff?text=sequi",
            "publisher": "Hill-Maggio"
        }
    }
}

3 -->  Fetch all books with filter <br />

  URL : http://127.0.0.1:8000/api/search?page=1&perpage=10&author=Annamarie <br />
  Method :GET <br />
  Response : <br />
  {
    "status": true,
    "message": null,
    "details": {
        "current_page": 1,
        "data": [
            {
                "id": 5,
                "title": "Aut maxime necessitatibus id ut.",
                "author": "Dr. Annamarie Considine Sr.",
                "isbn": "9787085803474",
                "genre": "fugit",
                "publication_date": "2021-03-21",
                "created_at": null,
                "updated_at": null,
                "description": "Error deserunt et ab corrupti perspiciatis sapiente consequatur voluptas. Inventore minima aliquam modi id. Fugiat accusamus sit voluptate fugit sed et minus. Corrupti dolores rem ut debitis quia mollitia quae occaecati.",
                "image": "https://via.placeholder.com/640x480.png/008877?text=nisi",
                "publisher": "Feil LLC"
            }
        ],
        "first_page_url": "http://127.0.0.1:8000/api/search?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://127.0.0.1:8000/api/search?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://127.0.0.1:8000/api/search?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": null,
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "next_page_url": null,
        "path": "http://127.0.0.1:8000/api/search",
        "per_page": 10,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
} <br />

4 -->  <br />
Fetch all books <br />
URL : http://127.0.0.1:8000/api/search?page=1 <br />
METHOD : GET <br />
Response : <br />
{
    "status": true,
    "message": null,
    "details": {
        "current_page": 1,
        "data": [
            {
                "id": 12,
                "title": "Possimus error pariatur nulla qui.",
                "author": "Dr. Maynard Leuschke",
                "isbn": "9795144262896",
                "genre": "saepe",
                "publication_date": "2001-10-27",
                "created_at": null,
                "updated_at": null,
                "description": "Facere consequatur maxime quia provident natus consequatur. Ut magni maxime soluta aut. Ducimus autem et et ut et alias.",
                "image": "https://via.placeholder.com/640x480.png/0055dd?text=dolor",
                "publisher": "Heathcote, Kuvalis and Turner"
            }
        ],
        "first_page_url": "http://127.0.0.1:8000/api/search?page=1",
        "from": 1,
        "last_page": 14,
        "last_page_url": "http://127.0.0.1:8000/api/search?page=14",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://127.0.0.1:8000/api/search?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": "http://127.0.0.1:8000/api/search?page=2",
                "label": "2",
                "active": false
            },
            {
                "url": "http://127.0.0.1:8000/api/search?page=3",
                "label": "3",
                "active": false
            },
            {
                "url": "http://127.0.0.1:8000/api/search?page=4",
                "label": "4",
                "active": false
            },
            {
                "url": "http://127.0.0.1:8000/api/search?page=5",
                "label": "5",
                "active": false
            },
            {
                "url": "http://127.0.0.1:8000/api/search?page=6",
                "label": "6",
                "active": false
            },
            {
                "url": "http://127.0.0.1:8000/api/search?page=7",
                "label": "7",
                "active": false
            },
            {
                "url": "http://127.0.0.1:8000/api/search?page=8",
                "label": "8",
                "active": false
            },
            {
                "url": "http://127.0.0.1:8000/api/search?page=9",
                "label": "9",
                "active": false
            },
            {
                "url": "http://127.0.0.1:8000/api/search?page=10",
                "label": "10",
                "active": false
            },
            {
                "url": null,
                "label": "...",
                "active": false
            },
            {
                "url": "http://127.0.0.1:8000/api/search?page=13",
                "label": "13",
                "active": false
            },
            {
                "url": "http://127.0.0.1:8000/api/search?page=14",
                "label": "14",
                "active": false
            },
            {
                "url": "http://127.0.0.1:8000/api/search?page=2",
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "next_page_url": "http://127.0.0.1:8000/api/search?page=2",
        "path": "http://127.0.0.1:8000/api/search",
        "per_page": 8,
        "prev_page_url": null,
        "to": 8,
        "total": 107
    }
}

<br />
5-->  Create new book <br />

Authorization : Bearer token gettingng from Login API <br />
Url : http://127.0.0.1:8000/api/books <br />
Method : POST <br />
Request :  <br />

{
"title":"newlyadded",
"author":"author",
"publication_date":"2021-03-07",
"isbn":"2342341",
"description":"description",
"genre":"genre"
}
<br />
Response : <br />
{
    "status": true,
    "message": "Book added successfully",
    "details": {
        "title": "newlyadded",
        "author": "author",
        "publication_date": "2021-03-07",
        "isbn": "2342322241",
        "description": "description",
        "genre": "genre",
        "image": "",
        "publisher": "",
        "updated_at": "2023-11-20T18:38:21.000000Z",
        "created_at": "2023-11-20T18:38:21.000000Z",
        "id": 122
    }
}
<br />
6 --> Update a book <br />

Authorization : Bearer token gettingng from Login API<br />

Url : http://127.0.0.1:8000/api/books/1 <br />
Method :PUT <br />
Request : <br />
{
  "title": "alchemest",
  "author": "author",
  "publication_date": "2021-03-07",
  "isbn": "979850814891",
  "description": "description",
  "image": "https://via.placeholder.com/640x480.png/008822?text=qui",
  "genre": "genre"
}
<br />
7 ---> Delete book <br />

Authorization : Bearer token gettingng from Login API <br />

 Url : http://127.0.0.1:8000/api/books/118 <br />
 Method : DELETE <br />

 
