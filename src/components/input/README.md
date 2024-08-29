Аргументы компонента Input: 
* {{name}} - передаваемый атрибут name <br>
* {{id}} - передаваемый id <br>
* {{className}} - передаваемые классы <br>
* placeholder="" - placeholder при необходимости
* {{type}} - тип инпута (text, password и т.д. https://www.w3schools.com/html/html_form_input_types.asp)
* {{defaultValue}} - текст инпута по умолчанию <br>
* {{label}} - текст инпута, своего рода placeholder <br>
* {{error}} - текст ошибки
* {{maxlength}} - атрибут, устанавливающий максимальную длину 


Пример использования: <br>
```
<input
    name="{{name}}"
    id="{{id}}"
    class="input__element {{className}}"
    placeholder=""
    type="{{type}}"
    value="{{defaultValue}}"
    maxlength="{{maxLength}}"
    required
/>
```
