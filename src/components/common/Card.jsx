export default function Card({ title, icon, children, className = "" }) {
  return (
    <section className={`bg-white rounded-2xl shadow-lg p-6 mb-8 ${className}`}>
      {title && (
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
          {icon && <span className="material-icons text-blue-600">{icon}</span>}
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
