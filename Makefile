install: # установить зависимости         
	npm ci 

brain-games: # Набирать эту команду руками довольно долго, а make brain-games быстро и просто  
	node bin/brain-games.js

publish: 
	npm publish --dry-run
	
make lint: # 	Создайте задачу make lint, которая должна запускать npx eslint ..
	 npx eslint .
	