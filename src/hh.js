import readlineSync from 'readline-sync';

const getNumberExplanation = (browser) => {
 
const a = () => {

    console.log('test1')
}


const b = () => {

    console.log('test2')
}


  switch (browser) {
    case 'yes':
     a();

      break;

    case 'no':
      b();
      break;

    default:
      console.log('It\'s wrong answer ;(. Correct answer was \'yes\' or \'no\'.\nLet\'s try again,!');
  }
}
getNumberExplanation();

