### Hexlet tests and linter status:

[![Actions Status](https://github.com/drkalach/frontend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/drkalach/frontend-project-lvl1/actions)

### CodeClimate link

[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/codeclimate/codeclimate/maintainability)

[![Lint](https://github.com/drkalach/frontend-project-lvl1/actions/workflows/blank.yml/badge.svg?branch=main)](https://github.com/drkalach/frontend-project-lvl1/actions/workflows/blank.yml)

## Что это 

Это приложение, реализованное в рамках изучения профессии Javascript-разработчика на https://ru.hexlet.io   Ссылка на проект  https://ru.hexlet.io/projects/44/members/14124/reviews

## Цель 

Познакомиться с экосистемой JavaScript:

 - научиться пользоваться пакетным менеджером `npm`;
 - опубликовать свой пакет в `npm`;
 - подключить и настроить в своем проекте:
	 - линтер [eslint](http://eslint.org/);
 - научиться создавать исполняемые файлы для `nodejs`.
 - научиться подключать системы для автоматического отслеживания качества кода Codeclimate
 - научиться использовать в проекте системы для непрерывной интеграции 

 ## Описание 

 В рамках проекта необходимо реализовать набор мини-игр, запускаемых из консоли. Эти игры похожи на то, что обычно называют "Brain Games".

Пример игры:

```
$ brain-progression

Welcome to the Brain Game!
What number is missing in this progression?

May I have your name? Kolia
Hello, Kolia!

Question: 14 .. 18 20 22 24 26 28
Your answer: 16
Correct!
Question: 5 6 7 8 9 .. 11 12
Your answer: 10
Correct!
Question: 12 15 18 21 .. 27 30 33
Your answer: 24
Correct!
Congratulations, Kolia!
```
## Установка
`npm i -g project-brain-games` (локальная установка и запуск не предусмотрены)

## Запуск
**`brain-even`** -- Игра "Проверка на чётность". Суть игры в следующем: пользователю показывается случайное число. И ему нужно ответить `yes`, если число четное, или `no` - если нечетное.

**`brain-calc`** -- Игра "Калькулятор". Пользователю показывается случайное математическое выражение, например `35 + 16`, которое нужно вычислить и записать правильный ответ.

**`brain-gcd`** -- Игра "НОД" (наибольший общий делитель). Суть игры в следующем: пользователю показывается два случайных числа, например, `25` `50`. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

**`brain-progression`** -- Игра "Арифметическая прогрессия". Показываем игроку ряд чисел, образующий арифметическую прогрессию, заменив любое из чисел двумя точками. Игрок должен определить это число.

**`brain-prime`** -- Игра "Простое ли число?". Определить, является ли число простым.

## Примеры запуска 

### Игра "Простое ли число?"

[![asciicast](https://asciinema.org/a/429726.svg)](https://asciinema.org/a/429726)

### Игра: "Калькулятор"

[![asciicast](https://asciinema.org/a/429723.svg)](https://asciinema.org/a/429723)

### Игра "НОД"

[![asciicast](https://asciinema.org/a/429724.svg)](https://asciinema.org/a/429724)

### Игра "Арифметическая прогрессия"

[![asciicast](https://asciinema.org/a/429725.svg)](https://asciinema.org/a/429725)

### Игра: "Проверка на чётность"

[![asciicast](https://asciinema.org/a/429722.svg)](https://asciinema.org/a/429722)
