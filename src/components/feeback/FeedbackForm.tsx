import { useState } from "react";
import { MAX_CHARACTERS } from "../../lib/constants";

type FeedbackFormProps = {
    onAddTolist: (text: string) => void;
};

export default function FeedbackForm({ onAddTolist }: FeedbackFormProps) {
    const [text, setText] = useState("");
    const [showValidIndicator, setShowValidIndicator] = useState(false);
    const [showInvalidIndicator, setShowInvalidIndicator] = useState(false);

    const charCount = MAX_CHARACTERS - text.length;

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = event.target.value;
        if (newText.length > MAX_CHARACTERS) {
            return;
        }
        setText(newText);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // basic validation
        if (text.includes("#") && text.length >= 5) {
            setShowValidIndicator(true);
            setTimeout(() => setShowValidIndicator(false), 2000);
        } else {
            setShowInvalidIndicator(true);
            setTimeout(() => setShowInvalidIndicator(false), 2000);
            return;
        }

        onAddTolist(text);
        setText("");
    };

    return (
        <form
            className={`form ${showValidIndicator ? "form--valid" : ""} ${
                showInvalidIndicator ? "form--invalid" : ""
            }`}
            onSubmit={handleSubmit}
        >
            <textarea
                value={text}
                onChange={handleChange}
                id="feedback-textarea"
                placeholder="Enter your feedback here remember to #hashtag the company."
                spellCheck={false}
            />
            <label htmlFor="feedback-textarea">
                Enter your feedback here remember to #hashtag the company.
            </label>
            <div>
                <p className="u-italic">{charCount}</p>
                <button>
                    <span>Submit</span>
                </button>
            </div>
        </form>
    );
}
