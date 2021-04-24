install: # установить зависимости         
	npm ci 

brain-games: # Набирать эту команду руками довольно долго, а make brain-games быстро и просто  
	node ./bin/brain-games.js

publish: 
	npm publish --dry-run
	
lint: # Создайте задачу make lint, которая должна запускать npx eslint ..
	 npx eslint .

brain-even: # запуск игры "Проверка на чётность"
	node ./bin/brain-even.js
	
brain-calc: # запуск игры "Калькулятор"
	node ./bin/brain-calc.js

rec: # записать игру 
	asciinema rec
	