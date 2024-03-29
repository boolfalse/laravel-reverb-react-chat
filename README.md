
## Laravel Reverb: Real-Time Chat App

How to build real-time chat app using Laravel Reverb.

Reverb is a first-party WebSocket server for Laravel applications, bringing real-time communication between client and server.

In this [freeCodeCamp article](https://www.freecodecamp.org/news/laravel-reverb-realtime-chat-app/) you will learn how to build real-time chat application using Laravel Reverb. With that you can easily implement WebSocket communications between your backend and frontend. As a frontend technology, you  can use anything you want, but in this case we'll use React.js with the Vite.js build tool.

<img src="https://i.imgur.com/kIRE69i.gif" style="width: 100%;">



#### Installation:

- **Pre-requisites**:
    - PHP >= 8.2
    - Composer
    - MySQL >= 5.7
    - Node.js >= 20

- Clone the repository, or download the zip file and extract it.
```shell
git clone git@github.com:boolfalse/laravel-reverb-react-chat.git && cd laravel-reverb-react-chat/
```

- Copy the `.env.example` file to `.env`:
```shell
cp .env.example .env
```

- Install the dependencies.
```shell
composer install
```

- Generate the application key.
```shell
php artisan key:generate
```

- Create a MySQL database and set the database credentials in the `.env` file:
```shell
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE="<database_name>"
DB_USERNAME="<username>"
DB_PASSWORD="<password>"
```

- Setup Reverb credentials in the `.env` file:
```shell
BROADCAST_CONNECTION=reverb

###

REVERB_APP_ID=
REVERB_APP_KEY=
REVERB_APP_SECRET=
REVERB_HOST="localhost"
REVERB_PORT=8080
REVERB_SCHEME=http

VITE_REVERB_APP_KEY="${REVERB_APP_KEY}"
VITE_REVERB_HOST="${REVERB_HOST}"
VITE_REVERB_PORT="${REVERB_PORT}"
VITE_REVERB_SCHEME="${REVERB_SCHEME}"
```

- Optimize the application cache.
```shell
php artisan optimize
```

- Run the migrations.
```shell
php artisan migrate:fresh
```

- Install the NPM dependencies.
```shell
npm install
```

- Build the assets.
```shell
npm run build
```

- **_[Optional]_** For development, run below command to watch the assets for changes.
```shell
npm run dev
```

- Start WebSocket server.
```shell
php artisan reverb:start
```

- Start listening to Queue jobs.
```shell
php artisan queue:listen
```

- Start the development server using below command or configure a virtual host.
```shell
php artisan serve
```

<img src="https://i.imgur.com/TN0jtAM.png" style="width: 100%;">

- Open the application in a browser at [http://127.0.0.1:8000](http://127.0.0.1:8000).



#### Author:

- [BoolFalse](https://boolfalse.com/)
