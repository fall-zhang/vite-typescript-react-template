import { useHistory } from 'react-router-dom'
import { $http } from '@/utils/reuqest'

async function isSignIn():Promise<boolean> {
  const history = useHistory()
  const logged = await $http.post('')
  if (!logged){
    history.push('/login')
  }
  return logged
}

export { isSignIn }