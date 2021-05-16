<h1>
  <a href="http://films.nomoredomains.icu" target="_blank">
    Movies Explorer API
  </a>
</h1>

<p align="center"><img width=100 src="./src/images/logo.svg" align="center" alt="logo"></p>

## О проекте
Сервис поиска фильмов и сохранения понравившихся в своем профиле.

### Стек технологий:
- HTML5, CSS3, ES6+
- React

## Команды:
```bash
# Запуск локального сервера
npm run start

# Сборка в папку build
npm run build
```

## Запросы
```bash
POST   /signin      # авторизоваться { email, password }

POST   /signup      # регистрация { email, password, name }

GET    /users/me    # информация о текущем пользователе

PATCH  /users/me    # обновить профиль { email, name }

GET    /movies      # получить массив всех сохраненных фильмов

POST   /movies      # сохранить фильм

DELETE /movies/:id  # удалить фильм по его mongo _id

# объект фильма
{
  country,     # строка
  director,    # строка
  duration,    # число
  year,        # строка
  description, # строка
  image,       # URL
  trailer,     # URL
  thumbnail,   # URL
  owner,       # MongoDB _id
  movieId,     # число
  nameRU,      # строка
  nameEN,      # строка
}

# Поиск
Поиск фильмов:
- мин. длина запроса 2 символа

Поиск фильмов в профиле:
- пустой поисковый запрос загрузит все фильмы профиля

```

## Пример .env файла
```bash
# Домен для запросов
REACT_APP_API_URL=//api.website.com
```

## Ссылки:
| Описание | URL |
| :-- | :-- |
| Домен:     | [films.nomoredomains.icu](https://films.nomoredomains.icu) |
| Домен API: | [api.films.nomoredomains.icu](https://api.films.nomoredomains.icu) |
| Альтернативный адрес API: | [films.nomoredomains.icu/api](https://films.nomoredomains.icu/api) |
| Репозиторий бэкенда: | [github.com/script-ninja/movies-explorer-api](https://github.com/script-ninja/movies-explorer-api) |
