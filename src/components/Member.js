import sumit from '../assets/avatars/sumit.png';

export default function Member() {
  return (
    <div className="checkbox-container">
      <img src={sumit} className="team-avater" alt="avatar" />
      <p className="label">Sumit Saha</p>
    </div>
  );
}
