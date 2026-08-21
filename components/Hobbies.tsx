const hobbies = ["Fotografia", "Natureza", "Costura", "Passarinhar"];

export const Hobbies = () => {
  const [hobbyPlus, ...othersHobbies] = hobbies;

  return (
    <>
      <p>Estes são os meus hobbies:</p>
      <ul className="list-disc pl-6">
        <li className="font-bold">{hobbyPlus}</li>
        {othersHobbies.map((other, i) => (
          <li key={`hobby-${i}`}>{other}</li>
        ))}
      </ul>
    </>
  );
};
