import React from 'react';

import { AnswerObject } from '../App';
//styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
  question: String;
  answers: String[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: Number;
  totalQuestion: Number;
};

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNumber, totalQuestion }) => (
  <Wrapper>
    <p className='number'>
      Question: {questionNumber} / {totalQuestion}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <ButtonWrapper
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
          key={answer}
        >
          <button disabled={!!userAnswer} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);

export default QuestionCard;
