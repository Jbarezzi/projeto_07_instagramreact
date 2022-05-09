import HeartIcon from "./HeartIcon"
import PersonIcon from "./PersonIcon";

export default function BottomBarMobile() {
    return (
        <div class="bottom-bar">
            <ion-icon name="home"></ion-icon>
            <ion-icon name="search-outline"></ion-icon>
            <ion-icon name="add-circle-outline"></ion-icon>
            <HeartIcon name="heart-outline" />
            <PersonIcon />
        </div>
    );
}