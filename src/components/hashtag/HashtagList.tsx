import { useFeedBackItemsStore } from "../../stores/feedbackItemsStore";
import HashtagItem from "./HashtagItem";

export default function HashtagList() {
    const companyList = useFeedBackItemsStore((state) =>
        state.getCompanyList()
    );
    const handleSelectCompany = useFeedBackItemsStore(
        (state) => state.selectCompany
    );

    return (
        <ul className="hashtags">
            {companyList.map((company: string) => (
                <HashtagItem
                    company={company}
                    onSelectCompany={handleSelectCompany}
                    key={company}
                />
            ))}
        </ul>
    );
}
