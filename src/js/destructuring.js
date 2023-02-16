export default function specialAttack({ special }) {
  const resultArr = special.map(
    ({ id, name, icon, description = 'Описание недоступно' }) => ({
      id,
      name,
      icon,
      description,
    })
  );

  return resultArr;
}
