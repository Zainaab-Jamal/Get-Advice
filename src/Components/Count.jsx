export default function Count({ count }) {
  return (
    <p className="mt-6 text-gray-600">
      You have read <strong className="text-blue-600">{count}</strong> pieces of advice.
    </p>
  );
}
