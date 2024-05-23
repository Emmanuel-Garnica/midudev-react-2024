import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

  const users = [
    {
      userName: 'midudev',
      name: 'Miguel Angel Duran',
      isFollowing: false 
    },
    {
      userName: 'daavidgk',
      name: 'Emmanuel Garnica',
      isFollowing: true 
    },
    {
      userName: 'PacoHdezs',
      name: 'Paco Hernandez',
      isFollowing: true 
    },
    {
      userName: 'TMChein',
      name: 'Tomas',
      isFollowing: false 
    }
  ]
  
  return (
    <section className='App'>
      {
        users.map(user => {
          const { userName, name, isFollowing } = user

          return (
            <TwitterFollowCard 
              key={userName}
              userName={userName} 
              initialIsFollowing={isFollowing}
            >
              { name }
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}