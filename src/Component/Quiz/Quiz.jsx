import { useState } from 'react';
import Header from './../Header/Header';
import questions from './../../utils/questions.json';
import './Quiz.css';
import Modal from './../Modal/Modal';
import AnswerOptions from '../AnswerOptions/AnswerOptions';
import QuestionSection from '../QuestionSection/QuestionSection';
// Так и не понял, почему бы не поместить image в JSON.
import image from './../../assets/task_img.png';
const Quiz = () => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const { text, correct_answer, options } = questions[0];

    const handleAnswerSelection = (option) => {
        setSelectedAnswer(option);
    };

    const handleCheckAnswer = () => {
        if (selectedAnswer === correct_answer) {
            setModalContent(`You answered correctly!`);
        } else {
            setModalContent(`You didn't answer correctly!`);
        }
        setSelectedAnswer(null);
        setOpenModal(true);
    };

    const onHint = () => {
        setOpenModal(true);
        setModalContent(`Correct answer: ${correct_answer}`);
    };
    const onClose = () => {
        setOpenModal(false);
    };

    return (
        <main className="main">
            <div className="quiz">
                <div className="quiz__container">
                    <Header />
                    <QuestionSection
                        onHint={onHint}
                        text={text}
                        image={image}
                    />
                    <AnswerOptions
                        options={options}
                        handleAnswerSelection={handleAnswerSelection}
                        handleCheckAnswer={handleCheckAnswer}
                        selectedAnswer={selectedAnswer}
                    ></AnswerOptions>
                </div>
            </div>
            {openModal && (
                <Modal onClose={onClose} openModal={openModal}>
                    <p className="hint__paragraph">{modalContent}</p>
                </Modal>
            )}
        </main>
    );
};

export default Quiz;
