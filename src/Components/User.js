export default function User(props) {
    return(
        <div class="user">
            <img src={`assets/img/${props.image}`} alt={`Foto de perfil de ${props.user}`}/>
            <div class="text">
                <strong>{props.user}</strong>
                {props.name}
            </div>
        </div>
    );
}