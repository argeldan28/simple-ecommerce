export default function Footer(){
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left">&copy; {new Date().getFullYear()} DevShop. Tutti i diritti riservati.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="/" className="text-sm hover:underline">Privacy</a>
          <a href="/" className="text-sm hover:underline">Termini</a>
          <a href="/" className="text-sm hover:underline">Contattaci</a>
        </div>
      </div>
    </footer>
  )
}