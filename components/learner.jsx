import Score from './Score';

const Learner = ({ learner }) => {
    return (
        <div>
            <p>{learner.name}</p>
            <p>{learner.bio}</p>
            <div>
                {learner.scores.map((score) => (
                <Score score={score} />
                ))}
            </div>
            <hr></hr>
        </div>
    );
};

export default Learner;