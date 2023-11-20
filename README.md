## Bitrix-site

#### Запуск с использованием встроенного в php веб-сервера IDE PhpStorm
#### Для запуска в PhpStorm укажите следующие параметры в конфигурации запускаемого приложения:
* для пользователей Линукс Убунту этот вариант самый удобный.
-d
short_open_tag=on
-d
display_errors=on
-d
mbstring.internal_encoding=utf-8
-d
opcache.revalidate_freq=0
-d
memory_limit=128M
-d
max_input_vars=10000
-d
date.timezone="Europe/Moscow"
-d
sendmail_path="/usr/sbin/sendmail -t -i -f noreply@noserver.ru"
Если вы не используете PhpStorm, то выполните подобную такую команду просто из консоли

/bin/php8.0 -c /bin/php8.0 -S bitrix.local:8081 -t /home/dev/Documents/mydomains/bitrix -d short_open_tag=on -d display_errors=on -d mbstring.internal_encoding=utf-8 -d opcache.revalidate_freq=0 -d memory_limit=128M -d max_input_vars=10000 -d date.timezone=Europe/Moscow -d "sendmail_path=/usr/sbin/sendmail -t -i -f noreply@noserver.ru"
* Я использую в уроках доменное имя  bitrix и порт 8081 вы можете выбрать другие значение. Но в любом случае их нужно указать в файле hosts

* Добавьте туда подобную строку, тем самым вы подскажете вашему компьютеру, что все запросы к этому доменному имени нужно перебрасывать на адрес локального компьютера, а не искать где-то в вебе:

* 127.0.0.1    bitrix