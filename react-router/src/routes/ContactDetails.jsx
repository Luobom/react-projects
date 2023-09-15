import { useNavigate, useParams } from "react-router-dom";

export const ContactDetails = () => {
    const { id } = useParams();

    // 6 - redirect
    const navigate = useNavigate();
    const handleContact = () => {
        console.log("Contato Enviado!");
        return navigate("/");
    }
    return (
    <div>
        <h1>Exibindo mais informações do contato : {id}</h1>
        <button onClick={handleContact}>Enviar mensagem</button>
    </div>
  )
}

export default ContactDetails;