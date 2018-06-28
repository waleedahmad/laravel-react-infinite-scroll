<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>


### [Laravel React Infinite Scrolling](https://quantizd.com/implementing-infinite-scroll-in-laravel-and-react/)

#### Instructions
```
$ git clone https://github.com/waleedahmad/laravel-react-infinite-scroll.git
$ composer install

# populate .env with your database credentials
$ cp .env.example .env 

# install npm dependencies and build your frontend code
$ npm install && npm run watch

# migrate database tables
# php artisan migrate

# populate photos table with fake records
$ php artisan db:seed
```