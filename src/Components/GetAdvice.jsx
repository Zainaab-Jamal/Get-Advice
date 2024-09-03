export default function GetAdvice({ advice, setAdvice, setCount }) {
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">{advice || "Click the button to get advice!"}</h1>
      <button
        onClick={getAdvice}
        className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700 transition duration-300"
      >
        Get Advice
      </button>
    </>
  );
}
