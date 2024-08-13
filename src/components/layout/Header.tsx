import { MenuIcon, SquareStackIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <SquareStackIcon className="h-6 w-6" />
          <span className="sr-only">StackOverflow</span>
        </Link>
        <NavigationMenu className="ml-auto hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Home
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Questions
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Tags
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Users
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link href="#" className="flex items-center justify-center" prefetch={false}>
              <SquareStackIcon className="h-6 w-6" />
              <span className="sr-only">StackOverflow</span>
            </Link>
            <div className="grid gap-2 py-6">
              <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                Home
              </Link>
              <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                Questions
              </Link>
              <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                Tags
              </Link>
              <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                Users
              </Link>
              <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </header>
  )
}

export default Header
