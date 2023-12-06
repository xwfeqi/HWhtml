import {useRef, useState} from 'react';
import './style.css';
import * as uuid from 'uuid';

const isArrayEqual = (selected, correct) => {

 if (selected.length !== correct.length) {
  return false;
 }
 return correct.filter(e => !selected.includes(e)).length === 0;
};

/**
 * 
 * @param {Object} props 
 * @param {string} props.question
 * @param {string[]} props.answers
 * @param {number[]} props.correctAnswer
 * @returns 
 */
const MultiAnswerComponent = (props) => {
 const [error, setError] = useState(0);
 let selectedAnswerIndex = [];
 const checkboxClick = (index, status) => {
  if (status) {
   selectedAnswerIndex.push(index);
  } else {
   selectedAnswerIndex = selectedAnswerIndex.filter(e => e === index);
  }
  wrongRef.current.classList.remove('selected');
  correctRef.current.classList.remove('selected');
 };

 const correctRef = useRef();
 const wrongRef = useRef();

 const checkOnClick = () => {
  if (isArrayEqual(selectedAnswerIndex, props.correctAnswer)) {
   correctRef.current.classList.add('selected');
   wrongRef.current.classList.remove('selected');
   setError(error + 1);
  } else {
   wrongRef.current.classList.add('selected');
   correctRef.current.classList.remove('selected');
   setError(error + 1);
  }
 };
 const [style, setStyle] = useState();
 const checkCorrect = () => {
  if (error > 2) {
   setStyle("correct-answer");
  }
 };

 function CorrectAnswer() {
  if (error > 2) {
   return (
       <div onClick={checkCorrect} className="show-correct">
        Show me correct answer
       </div>
   )
  }
 }

 return (
  <div className='question single-answer'>
   <div><h3>{props.question}</h3></div>
   <div className='answers'>
    {props.answers.map((answer, i) => {
     const id = uuid.v1();
     if (props.correctAnswer.includes(i)) {
      return (<div>
       <input
           id={id}
           type='checkbox'
           onClick={(e) => checkboxClick(i, e.currentTarget.checked)}
       />
       <label className={style} for={id}>{answer}</label>
      </div>);
     } else {
      return (<div>
       <input
           id={id}
           type='checkbox'
           onClick={(e) => checkboxClick(i, e.currentTarget.checked)}
       />
       <label for={id}>{answer}</label>
      </div>);
     }
    })}
   </div>
   <div className='check'>
    <div className='button' onClick={checkOnClick}>
     check my answer
     <div ref={correctRef} className='correct'>correct</div>
     <div ref={wrongRef} className='wrong'>wrong</div>
    </div>
   </div>
   <CorrectAnswer/>
  </div>
 );
};

export default MultiAnswerComponent;