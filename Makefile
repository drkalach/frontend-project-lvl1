install: # установить зависимости    /     ////
	npm ci 

brain-games: # Набирать эту команду руками довольно долго, а make brain-games быстро и просто  //
	node ./bin/brain-games.js

publish: 
	npm publish --dry-run
	
lint: # Создайте задачу make lint, которая должна запускать npx eslint ..
	 npx eslint .

brain-even: # запуск игры "Проверка на чётность"
	node ./bin/brain-even.js
	
brain-calc: # запуск игры "Калькулятор"
	node ./bin/brain-calc.js

brain-gcd: # запус игры "НОД"
	node ./bin/brain-gcd.js	
brain-progression: # запуск игры  "Арифметическая прогрессия"
	node ./bin/brain-progression.js	

brain-prime: # запуск игры "Простое ли число?"
	node ./bin/brain-prime.js

rec: # записать игру 
	asciinema rec
	
