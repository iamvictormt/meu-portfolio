export default function ContactWindow() {
  return (
    <div className="text-center space-y-4 sm:space-y-6 lg:space-y-12 min-h-[150px] sm:min-h-[200px] lg:min-h-[300px] flex flex-col justify-center px-4">
      <div className="text-xl sm:text-2xl lg:text-5xl font-bold text-orange-500 mb-2 sm:mb-4 lg:mb-8 break-words">
        {"let's get in touch"}
      </div>

      <div className="space-y-3 sm:space-y-4 lg:space-y-8">
        <div className="text-sm sm:text-lg lg:text-3xl text-gray-700 font-mono break-all">+55 (11) 99999-9999</div>

        <div className="text-sm sm:text-lg lg:text-3xl text-gray-700 font-mono break-all">victor.torres@gmail.com</div>
      </div>
    </div>
  )
}
