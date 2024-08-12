Аргументы компонента Input: 
* {{name}} - передаваемый атрибут name <br>
* {{id}} - передаваемый id <br>
* {{appointment}} - передаваемые классы <br>
* {{type}} - тип инпута (text, password и т.д. https://www.w3schools.com/html/html_form_input_types.asp)
* {{defaultValue}} - текст инпута по умолчанию <br>
* {{label}} - текст инпута, своего рода placeholder <br>
* {{error}} - текст ошибки


Пример использования: <br>
```
{{>Input
    name="input__photo"
    id="input__photo"
    appointment="input__load-file"
    type="file"
}}
```
