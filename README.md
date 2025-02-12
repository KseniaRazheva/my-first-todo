# my-first-todo

## как создать новый проект

создала на [гитхабе](https://github.com/KseniaRazheva?tab=repositories) новый репозиторий (new, Repository name, Add a README file)<br>
открываю на компьютере общую папку гитхаба через вскод (терминал code .), надо стянуть изменения

```
git clone https://github.com/KseniaRazheva/my-first-todo.git
```

в моей папке гитхаб на компьютере появилась папка которую я создала на гитхабе и теперь туда можно писать код, а потом комитить

## как комитить
```
git status 
git add . 
git status 
git commit -m "add/update/return files sass l.61" 
git push -u origin main
// в случае неудачи git checkout .
```

## как установить vite 
1) открыть пустую папку проекта который будет собираться витом
2) в терминал написать из документации https://vite.dev/guide/ раздел Getting Started 

```
npm create vite@latest
```

3) выбрать:
Ok to proceed? yes
project name: vite-project (можно менять)
select a framework? React
select a variant: JavaScript

4) внутри пустой папки создается новая папка vite-project, создается все автоматически (package.json, eslint.config.js, src с рыбой проекта на jsx) вручную создавать не нужно 

```
cd vite-project
npm i
```

5) после npm i все правила которые записаны в package.json начинают устанавливаться на проект и создается файл package-lock.json и папка node_modules

```
npm run dev
```

6) проект открывается в браузере по адресу http://localhost:5173/

## как стилизировать ридми файлы

```
[link](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
~~зачеркнуть~~
[ ] checkbox
[x] done
```

// как поменять язык в вскоде открыть палитру команд ctrl+shift+p ввесли Configure Display Language нажать ентер и выбрать русский язык перезапустить приложение
// как сделать курсор в нескольких местах alt+левый клик по местам
// как поменять строки местами alt+стрелка вверх/стрелка вниз
// как закомментировать ctrl+/
// как вставить в терминале контрол-шифт-V 
// как копировать из терминала контрол-шифт-C
