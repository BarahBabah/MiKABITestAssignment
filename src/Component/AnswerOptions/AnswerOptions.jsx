import './AnswerOptions.css';
import PropTypes from 'prop-types';

const AnswerOptions = ({
    options,
    handleAnswerSelection,
    selectedAnswer,
    handleCheckAnswer,
}) => {
    const isAnswerSelected =
        selectedAnswer !== undefined && selectedAnswer !== null;
    return (
        <div className="answer-buttons">
            {options &&
                options.map((value, index) => {
                    return (
                        <label key={index} className="answer-label">
                            <input
                                type="radio"
                                name="answer"
                                value={value}
                                checked={selectedAnswer === value}
                                onChange={() => handleAnswerSelection(value)}
                                className="answer-radio"
                            />
                            <span className="answer-custom-radio">{value}</span>
                        </label>
                    );
                })}
            <button
                disabled={!isAnswerSelected}
                onClick={handleCheckAnswer}
                className="answer-button answer-button_check"
            >
                Check
            </button>
        </div>
    );
};

AnswerOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleAnswerSelection: PropTypes.func.isRequired,
    selectedAnswer: PropTypes.string,
    handleCheckAnswer: PropTypes.func.isRequired,
};

export default AnswerOptions;
