export default function Card({ children, className }) {
  return <div className={`bg-white max-md:max-w-[324px] mx-auto px-6 py-6 mb-4 rounded-lg ${className}`}>{children}</div>
}
