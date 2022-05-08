function Sugestion(props) {
    return(
        <div class="sugestion">
            <div class="user">
                <img src={`assets/img/${props.image}`} alt={`Foto de perfil de ${props.user}`}/>
                <div class="text">
                  <div class="name">{props.user}</div>
                  <div class="motive">{props.motive}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}

export default function Sugestions() {
    const sugestions = [
        { image: "bad.vibes.memes.svg", user: "bad.vibes.memes", motive: "Segue você" },
        { image: "chibirdart.svg", user: "chibirdart", motive: "Segue você" },
        { image: "razoesparaacreditar.svg", user: "razoesparaacreditar", motive: "Novo no Instagram" },
        { image: "adorable_animals.svg", user: "adorable_animals", motive: "Segue você" },
        { image: "smallcutecats.svg", user: "smallcutecats", motive: "Segue você" },
      ];

      return (
        <div class="sugestions">
            <div class="title">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestions.map((sugestion) => <Sugestion image={sugestion.image} user={sugestion.user} motive={sugestion.motive}/>)}
        </div>
      );
}