export default function specialAttack({ special }) {
  const resultArr = [];

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
