# Frontend https://stalkomplect.ru/ 2.0

Приложение находится в стадии разработки, в связи с чем возможны мелкие ошибки.

## Развёртывание DEV версии:

<code>cd /frontend</code>
<code>yarn dev</code>

После, приложение будет доступно по адресу https://localhost:3000/

## Развёртывание PROD версии:

> Для prod версии обязательны сертификаты и nginx конфиг

<code>cd /frontend</code>
<code>docker-compose -f ./compose.yml -f ./compose.prod.yml --verbose up --build</code>
<code>docker save -o images.tar frontend</code>

Переносим файлы проекта и images.tar на хостинг, где выполняем команду:
<code>docker-compose -f ./compose.yml -f ./compose.prod.yml --verbose up</code>
