import Container from "./layout/Container";
import Footer from "./layout/Footer";
import HashtagList from "./hashtag/HashtagList";
import { useFeedBackItemsStore } from "../stores/feedbackItemsStore";
import { useEffect } from "react";

function App() {
    const fetchFeedbackItems = useFeedBackItemsStore(
        (state) => state.fetchFeedbackItems
    );
    useEffect(() => {
        fetchFeedbackItems();
    }, []);
    return (
        <div className="app">
            <Footer />
            <Container />
            <HashtagList />
        </div>
    );
}

export default App;
