install: # установить зависимости    /     ////
	npm ci 

brain-games: # Набирать эту команду руками довольно долго, а make brain-games быстро и просто  //
	node ./bin/brain-games.js

publish: 
	npm publish --dry-run

prettier: # запуск проверки утилиты.
	npx prettier --write .	
	
lint: # Создайте задачу make lint, которая должна запускать npx eslint ..
	 npx eslint .

brain-even: # Игра: "Проверка на чётность"
	node ./bin/brain-even.js
	
brain-calc: # Игра: "Калькулятор".
	node ./bin/brain-calc.js

brain-gcd: # Игра "НОД"
	node ./bin/brain-gcd.js	
brain-progression: # Игра "Арифметическая прогрессия"
	node ./bin/brain-progression.js	

brain-prime: # Игра "Простое ли число?"
	node ./bin/brain-prime.js

rec: # записать игру .
	asciinema rec
	
