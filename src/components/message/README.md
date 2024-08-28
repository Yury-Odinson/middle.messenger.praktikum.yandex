Аргументы компонента ChatItem:
* {{className}} - передаваемые классы: "message-user" || message-user-with-attach || "message-you" <br>
* {{content}} - Содержимое сообщения <br>
* {{attachments}} - Вложения сообщения <br>
* {{date}} - дата отправки/получения сообщения <br>

Пример использования: <br>
```
{{>Message
    className="message-you"
    content="Круто!"
    attachments=""
    date="15:23"
}}
```
