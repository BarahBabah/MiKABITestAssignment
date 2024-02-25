import './QuestionSection.css';
import PropTypes from 'prop-types';
const QuestionSection = ({ text, image, onHint }) => {
    return (
        <>
            <button className="button__close" disabled></button>
            <button onClick={onHint} className="button__hint"></button>
            <div className="question-section">
                <h1 className="question-section__title">
                    Choose the right answer
                </h1>
                <p className="question-section__paragraph">{text}</p>
            </div>
            <img className="question-image" src={image} alt="Question"></img>
        </>
    );
};

export default QuestionSection;
QuestionSection.propTypes = {
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onHint: PropTypes.func.isRequired,
};
