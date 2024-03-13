import { useFeedBackItemsStore } from "../../stores/feedbackItemsStore";
import FeedbackForm from "../feeback/FeedbackForm";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import Pattern from "../Pattern";

export default function Header() {
    const addItemToList = useFeedBackItemsStore((state) => state.addItemToList);
    return (
        <header>
            <Pattern />
            <Logo />
            <PageHeading />
            <FeedbackForm onAddTolist={addItemToList} />
        </header>
    );
}
