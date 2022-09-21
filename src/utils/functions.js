const GAS = 100000000000000;

export async function Add_Quiz(quiz, money) {
  await window.contract.createQuiz(quiz, GAS, money);
}

export function submitAnswer() {
  return window.contract.submitAnswer();
}

export function getQuizzes() {
  return window.contract.viewQuizzes();
}

export function getQuizByID(id) {
  return window.contract.getQuizByID(id);
}
