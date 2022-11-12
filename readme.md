
# MyBackLog

A games backlog list API, using this you can log games in your wishlist, unplayed and played games you have. You can list them all in one place!

This application was created as a Proof of Concept for Typescript, as the author was learning about types and practicing.

## Installation
To run this application:

- Clone this repository;
- Install all dependencies:
```bash
    npm i 
```
- Set your .env file following the provided .env.example
```
    DATABASE_URL=postgres://USER:PASSWORD@HOST:PORT/DATABASE
```
- Create a postgres database and use the dump.sql file to get the tables and examples; 
- Use ts node to run app.ts:
```bash
    ts-node run src/app.ts
```

## API Documentation

### Get all games

```http
  GET /api/logs
```

| Parameter   | Type       | Description                           |
| :---------- | :--------- | :----------------------------------------- |
| `api` | `string` | **Required**. Your API address (or localhost port) |

### Get a specific game

```http
  GET /api/logs/${id}
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Required**. The ID of the game you want |

### Post a new game

```http
  POST /api/logs/
```

- Body JSON parameters:

| Parameter   | Type       | Description                                   |
| :---------- | :--------- |:------------------------------------------------------------------------------ |
| `name`      | `string` | **Required**. The name of the game |
| `platform`      | `string` | **Required**. The platform of the game |
| `genre`      | `string` | **Required**. The genre of the game |
| `status`      | `string` | **Required**. Here you can describe the status using "wishlist","backlog","playing","completed",etc... |
| `image`      | `string` | **Optional**. An image URL |
| `review`      | `string` | **Optional**. Your personal review and notes for this game |
| `rating`      | `integer` | **Optional**. A 1-10 rating for this game  |

### Delete a game

```http
  DELETE /api/logs/${id}
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Required**. The ID of the game you want to delete |

### Update a game

```http
  PUT /api/logs/${id}
```

- Send the new object via body, using the same parameters.

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Required**. The ID of the game you want to update |


### Get a query

```http
  GET /api/logs?platform=PS5&genre=RPG&status=wishlist
```

- You can mix and match these three queries.

## Authors

- [@Fekete-Bruno](https://www.github.com/Fekete-Bruno)

