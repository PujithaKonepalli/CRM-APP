export default function EditModal({ open, onClose, person, onSave }: any) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white
        p-6 rounded-xl w-96 shadow-xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold mb-6 leading-none">Edit Person</h2>

        <input
          className="w-full border p-2 mb-4 mt-2 rounded bg-gray-100 dark:bg-gray-700"
          defaultValue={person.name}
          onChange={(e) => (person.name = e.target.value)}
        />

        <input
          className="w-full border p-2 mb-4 rounded bg-gray-100 dark:bg-gray-700"
          defaultValue={person.email}
          onChange={(e) => (person.email = e.target.value)}
        />

        <input
          className="w-full border p-2 mb-4 rounded bg-gray-100 dark:bg-gray-700"
          defaultValue={person.phone}
          onChange={(e) => (person.phone = e.target.value)}
        />

        <div className="flex justify-end gap-4">
          <button className="text-gray-500 dark:text-gray-400" onClick={onClose}>Cancel</button>
          <button
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            onClick={() => onSave(person)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}