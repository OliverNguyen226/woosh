export default function Question({category, question, answers}) {
    return (
        <>
            <h1>Quiz - {category}</h1>
                   <h3>
                {question}
            </h3>
            <div>
                <ul>
                    {answers.map((answer) => (
                        <li>
                            <input type="radio" value={answer} />{answer}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

