"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavItem } from "@/types/nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Icons } from "@/components/icons";

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname();

  return (
    <div className="flex gap-3 duration-150 sm:gap-6 md:gap-10">
      <div className={"block sm:hidden"}>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <Icons.menu className="h-5 w-5 fill-current" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"} className="w-[335px] sm:w-[540px]">
            <SheetHeader className={"mb-4"}>
              <SheetTitle>{siteConfig.shortName}</SheetTitle>
            </SheetHeader>
            {items?.length && (
              <div className={"flex flex-col gap-2"}>
                {items.map(
                  (item, index) =>
                    item.href && (
                      <Link href={item.href} key={index}>
                        <SheetClose asChild>
                          <Button
                            variant={
                              pathname === item.href ? "default" : "outline"
                            }
                            className={"w-full justify-start"}
                          >
                            {item.title}
                          </Button>
                        </SheetClose>
                      </Link>
                    )
                )}
              </div>
            )}
          </SheetContent>
        </Sheet>
      </div>
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.shortName}</span>
      </Link>
      <div className="hidden sm:block">
        {items?.length ? (
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "text-foreground/60 transition-colors hover:text-foreground/80",
                      item.disabled &&
                        "cursor-not-allowed text-muted-foreground opacity-80",
                      pathname === item.href && "text-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </nav>
        ) : null}
      </div>
    </div>
  );
}
