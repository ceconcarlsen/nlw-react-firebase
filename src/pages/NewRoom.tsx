import { Link, useHistory } from 'react-router-dom'

import { FormEvent, useState } from 'react'

import illustationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth'

import { database } from '../services/firebase'

export function NewRoom(){
    const {user} = useAuth();
    const history = useHistory();
    const [newRoom, setNewRoom] = useState('');

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        if(newRoom.trim() === ''){
            return;
        }

        const roomRef = database.ref('rooms'); //criando uma sessão no banco
        const firebaseRoom = await roomRef.push({ //push das informações para o realtime database
            title: newRoom,
            authorId: user?.id,
        })

        history.push(`/roms/${firebaseRoom.key}`)
    }
    
    return(
       <div id="page-auth">
           <aside>
               <img src={illustationImg} alt="illustationImg" />
               <strong>Crie salas de Q&amp;A ao-vivo</strong>
               <p>Tire as dúvidas de sua audiência em tempo-real.</p>
           </aside>
           <main>
               <div className="main-content">
                   <img src={logoImg} alt="logoImg" />
                   <h2>Criar uma nova sala</h2>
                   <form onSubmit={handleCreateRoom}>
                       <input 
                       onChange={event => setNewRoom(event.target.value)}
                       value={newRoom}
                       type="text"
                       placeholder="Nome da sala" 
                       />
                       <Button>
                           Criar sala
                       </Button>
                   </form>
                   <p>Quer entrar em uma sala existente? <Link to="/">clique aqui</Link></p>
               </div>
           </main>
       </div>
    )
}