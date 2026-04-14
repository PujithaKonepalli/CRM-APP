export default function DeleteModal({ open, onClose, onDelete }: any) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white
        p-6 rounded-xl w-96 shadow-xl border border-gray-200 dark:border-gray-700">
        <p className="text-sm text-black dark:text-white mb-4">
          Are you sure you want to delete this person?
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <button onClick={onClose}>Cancel</button>
          <button
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}