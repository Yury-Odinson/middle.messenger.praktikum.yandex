Аргументы компонента ChatItem: 
* {{appointment}} - передаваемые классы <br>
* {{imgLink}} - изображение пользователя <br>
* {{nameUser}} - имя пользователя <br>
* {{sender}} - отправитель сообщения (Вы или пользователь) <br>
* {{messageUser}} - предварительный показ сообщения пользователя <br>
* {{dateMessage}} - дата последнего сообщения <br>
* {{unreadValue}} - количество непрочитанных сообщений <br>

Пример использования: <br>
```
{{>ChatItem
    appointment="chat__active"
    imgLink="/src/assets/img/_mockData/user1.jpg"
    nameUser="Андрей"
    sender="Вы:"
    messageUser="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
    dateMessage="10:49"
    unreadValue="2"
}}
```
