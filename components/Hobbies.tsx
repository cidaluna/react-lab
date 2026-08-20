const hobbies = ["Fotografia", "Natureza", "Costura"];

export const Hobbies = () => (
  <>
    <p>Estes são os meus hobbies:</p>
    <ul className="list-disc pl-6">
      {hobbies.map((hobby, i) => (
        <li key={`hobby-${i}`}>{hobby}</li>
      ))}
    </ul>
  </>
);
