Аргументы компонента ChatItem:
* {{appointment}} - передаваемые классы: "message-user" || "message-you" <br>
* {{content}} - Содержимое сообщения <br>
* {{attachments}} - Вложения сообщения <br>
* {{date}} - дата отправки/получения сообщения <br>

Пример использования: <br>
```
{{>Message
    appointment="message-you"
    content="Круто!"
    attachments=""
    date="15:23"
}}
```
