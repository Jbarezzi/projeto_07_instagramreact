import React from "react";
import PlaneIcon from "./PlaneIcon";
import HeartIcon from "./HeartIcon";

function Post(props) {
    const [likeState, setlikeState] = React.useState("heart-outline");
    return (
        <div class="post">
            <div class="post-top">
                <div class="user">
                  <img src={`./assets/img/${props.user.image}`} alt={`Foto de perfil de ${props.user.name}`} />
                  {props.user.name}
                </div>
                <div class="actions">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="content" onClick={ImageLike}>
                <img src={`./assets/img/${props.content}`} alt={`Foto de ${props.user.name}`} />
            </div>

            <div class="post-bottom">
                <div class="actions">
                  <div>
                    <HeartIcon name={likeState} onClick={Like}/>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <PlaneIcon />
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="likes">
                  <img src={`./assets/img/${props.likes.friendImage}`} alt={`Foto de perfil de ${props.likes.friend}`}/>
                  <div class="texto">
                    Curtido por <strong>{props.likes.friend}</strong> e <strong>outras {props.likes.quantity} pessoas</strong>
                  </div>
                </div>
            </div>
        </div>
    );

    function ImageLike() {
      setlikeState("heart");
    }

    function Like() {
      if(likeState === "heart-outline") {
        setlikeState("heart");
      } else if (likeState === "heart") {
        setlikeState("heart-outline");
      }
    }

    
}

export default function Posts() {
    const posts = [
        {
            user: {
                name: "meowed",
                image: "meowed.svg",
            },
            content: "gato-telefone.svg",
            likes: {
                friend: "respondeai",
                friendImage: "respondeai.svg",
                quantity: "101.523"
            }
        },
        {
            user: {
              name: "barked",
              image: "barked.svg",
            },
            content: "dog.svg",
            likes: {
              friend: "adorable_animals",
              friendImage: "adorable_animals.svg",
              quantity: "99.159"
            }
        }];

    return (
        <div class="posts">
            {posts.map((post) => <Post user={post.user} content={post.content} likes={post.likes}/>)}
        </div>
    );
}
