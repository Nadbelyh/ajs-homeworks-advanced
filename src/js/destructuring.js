export default function specialAttack(character) {
  const resultArr = [];
  const { special } = character;

  special.forEach((item) => {
    const { id, name, icon, description = 'Описание недоступно' } = item;
    resultArr.push({
      id,
      name,
      icon,
      description,
    });
  });

  return resultArr;
}
