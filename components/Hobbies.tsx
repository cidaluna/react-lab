const hobbies = ["Fotografia", "Natureza", "Costura", "Passarinhar"];

export const Hobbies = () => {
  const [hobbyPlus, ...othersHobbies] = hobbies;

  const newsHobbies = ["Festas", "Leituras"];

  const myHobbies = [
    ...othersHobbies,
    ...newsHobbies
  ]

  return (
    <div>
      <p>Estes são os meus hobbies:</p>
      <ul className="list-disc pl-6">
        <li className="font-bold">{hobbyPlus}</li>
        {myHobbies.map((myHobby, i) => (
          <li key={`hobby-${i}`}>{myHobby}</li>
        ))}
      </ul>
    </div>
  );
};
