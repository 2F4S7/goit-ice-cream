## TeamWork 2020

### ⚙️🛠️Development Tools

- v.1.0.1
- update 20.04.2021

<p align="center">
<img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="100" height="100"/> </a> <a href="https://git-scm.com/" target="_blank">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="100" height="100"/> </a> <a href="https://www.figma.com/" target="_blank">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="100" height="100"/>
   <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="100" height="100"/>
  <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt="sass" width="100" height="100"/>
   </p>
 
 ## [Life Page](https://2f4s7.github.io/goit-ice-cream/")

![alt text](https://i.ibb.co/VpSMsM5/prew.jpg?raw=true)

## Developing 
- [parcel-project-template](https://github.com/goitacademy/parcel-project-template) 

### Prerequisites

На компьютере должен быть установлен [Node.js](https://nodejs.org/en/).

Для корректной работы SASS-компилятора и других инструментов, необходимо один
раз глобально поставить дополнительные пакеты, выполнив в терминале следующие
команды. Пользователям MacOS ничего делать не нужно.

Пользователям **Windows**, в режиме администратора.
[Как запусттить Powershell](https://youtu.be/p2tFnxcymwk) в режиме
администратора.

```shell
npm install --global --production windows-build-tools
```

Вот как выглядит процесс успешной установки для пользователей **Windows**.

![Установка windows-build-tools](https://user-images.githubusercontent.com/1426799/45007904-bde9f280-afb4-11e8-8a35-c77dffaffa2a.gif)

Пользователям **Linux**.

```shell
sudo apt-get install gcc g++ make
```

### Setting up Dev

Один раз на проект установить все зависимости.

```shell
npm install
```

И запустить режим разработки.

```shell
npm run dev
```

Во вкладке браузера перейти по адресу
[http://localhost:1234](http://localhost:1234).

### Building

Для того чтобы создать оптимизированные файлы для хостинга, необходимо выполнить
следующую команду. В корне проекта появится папка `build` со всеми
оптимизированными ресурсами.

```shell
npm run build
```

### Deploying / Publishing

Сборка может автоматически деплоить билд на GitHub Pages удаленного (remote)
репозитория. Для этого необходимо в файле `package.json` отредактировать поле
`homepage`, заменив имя пользователя и репозитория на свои.

```json
"homepage": "https://имя_пользователя.github.io/имя_репозитория"
```

Также необходимо отредактировать скрипт "predeploy".

```json
"predeploy": "npm run build -- --public-url /имя_репозитория/"
```

После чего в терминале выполнить следующую команду.

```shell
npm run deploy
```

Если нет ошибок в коде и свойство `homepage` указано верно, запустится сборка
проекта в продакшен, после чего содержимое папки `build` будет помещено в ветку
`gh-pages` на удаленном (remote) репозитории. Через какое-то время живую
страницу можно будет посмотреть по адресу указанному в отредактированном
свойстве `homepage`.

## Configuration

- Все паршалы файлов стилей должны лежать в папке `src/sass` и импортироваться в
  `src/sass/main.scss`
- Изображения добавляйте в папку `src/images`, заранее оптимизировав их. Сборщик
  просто копирует используемые изображения чтобы не нагружать вашу систему
  оптимизацией десятков картинок, так как на слабых компьютерах это повесит
  систему.
