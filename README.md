# Додаток управління користувачами

## Вступ

Є три сторінки:

1. **Users – path** (`/`)
2. **User – path** (`/:id`)
3. **CreateUser – path** (`/createuser`)

## На сторінці Users вивести:

 1. список користувачів:
 - li містить властивість name, кнопки редагування та видалення користувача.
 - При натисканні на кнопку Edit відбувається редірект на сторінку /user/:id
 - При натисканні на кнопку Delete відбувається видалення користувача з бази.
 2. посилання на сторінку CreateUser

## Сторінка Редагування Користувача

Форма редагування оформлена окремою сторінкою User, на яку ми можемо перейти
за прямим посиланням (`/:id`) або натисканням на кнопку Edit користувача на сторінці Users.

У формі редагування виводяться наступні властивості користувача:
 - name
 - username
 - email
 - city
 - street
Кожна властивість виводиться у вигляді input.

У формі мають бути кнопки Save and Cancel.
 - При натисканні на Save – збереження змін даних користувача.
 - При натисканні на Cancel – просто редірект на сторінку Users ('/')

## Сторінка Створення Користувача

На сторінці Users має бути посилання на сторінку CreateUser, що відкриває нову сторінку
за адресою"/createuser". На цій сторінці показуємо форму з полями name, username, email,
city, street і кнопкою Save. При submit форми – додаємо нового користувача в базу.