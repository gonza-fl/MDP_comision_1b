const PokemonCard = ({ sprite, id, name, weight }) => {
  return (
    <div className='card'>
      <img src={sprite} alt='' />
      <div className='card-body'>
        <span>{id}</span>
        <span>{name}</span>
        <span>{weight}</span>
      </div>
    </div>
  );
};

export default PokemonCard;
