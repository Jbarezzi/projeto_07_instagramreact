import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";

export default function MainContent() {
    return(
        <div class="main-content">
            <div class="left">
                <Stories />
                <Posts />
            </div>
            <Sidebar />
        </div>
    );
}