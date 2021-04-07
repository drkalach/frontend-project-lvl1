install: # установить зависимости         
	npm ci 

brain-games: # Набирать эту команду руками довольно долго, а make brain-games быстро и просто  
	node bin/brain-games.js

publish: 
	npm publish --dry-run

	