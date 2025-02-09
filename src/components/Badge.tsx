import { differenceInDays } from "date-fns"
export const RemainingDays = () => {
  const today = new Date()
  const weddingDate = new Date(2025, 5, 6);
  today.setHours(0, 0, 0, 0)
  const remainingDays = differenceInDays(weddingDate, today)
  return (
    <span className="backdrop-blur-sm bg-white/30 rounded-md px-5 py-3 text-center text-white text-3xl">
      {remainingDays} dies
    </span>
  )
}