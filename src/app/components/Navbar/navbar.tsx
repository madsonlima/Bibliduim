export default function Navbar() {
  return <nav
    className="bg-primary-600 text-white flex justify-between items-center space-x-4 p-4"
  >
    <a
      className="text-4xl ml-4"
      href="/"
    >
      BIBLIDUIM
    </a>
    
    <ul
      className="flex gap-4"
    >
      <li>
        <a
          className="p-2.5 rounded transition hover:bg-primary-800"
          href="/signin"
        >
          Entrar
        </a>
      </li>
      <li>
        <a
          className="border-2 p-2 rounded transition hover:text-primary-600 hover:bg-white mr-4"
          href="/signup"
        >
          Cadastrar
        </a>
      </li>
    </ul>
  </nav>
}