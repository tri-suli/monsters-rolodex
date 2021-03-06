import { getMonstersAvatar } from '../../api/monsters';
import User from '../../entities/User';
import './card.styles.css';

type CardProps = {
  monster: User
};

export default function Card ({ monster }: CardProps): JSX.Element {
  return (
    <div className="card-container">
      <img src={getMonstersAvatar(monster.id)} alt="monsters-avatar"/>
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  )
}
