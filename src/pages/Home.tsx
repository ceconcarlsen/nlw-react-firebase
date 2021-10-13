import { useHistory } from "react-router-dom";

import illustationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import "../styles/auth.scss";

import { Button } from "../components/Button";

import { useAuth } from "../hooks/useAuth";

export function Home() {
  const history = useHistory();
  const {user, signInWithGoogle} = useAuth(); //meu custom hook

  async function handleCreateRoom() {
    if(!user){ //se o user não estiver logado ao tentar criar um sala
        await signInWithGoogle()
    }
    history.push("/rooms/new");
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustationImg} alt="illustationImg" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas de sua audiência em tempo-real.</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="logoImg" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="googleIconImg" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Dígite o código da sala" />
            <Button>Entre na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
