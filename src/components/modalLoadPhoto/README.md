Аргументы компонента Input: 
* {{appointment}} - передаваемые классы
* {{labelTitle}} - заголовок модального окна
* {{error}} - текст ошибки
* {{loadedFile}} - название загруженного файла
* {{warning}} - текст предупреждения


Пример использования: <br>
```
{{>ModalLoadPhoto
    appointment="modal__loaded-photo"
    labelTitle="Файл загружен"
    loadedFile="new-avatar.png"
}}
```