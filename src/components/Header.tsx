import { Menu } from "./Menu"
// import { MenuLink } from "./MenuLink"

export const Header = () => {
  return (
    <header className="flex justify-evenly gap-5 md:gap-10 md:justify-center absolute top-0 w-full text-xl font-bold">
      {/* <MenuLink href="/" title="Inici" />
      <MenuLink href="/where" title="El lloc" />
      <MenuLink href="/chronology" title="Cronograma" />
      <MenuLink href="/confirm" title="Confirmar assistència" /> */}
      <Menu/>
    </header>
  )
}