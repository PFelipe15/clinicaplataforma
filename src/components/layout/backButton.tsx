 'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

export default function BackButton() {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <div>
              {pathname != "/" ? (
            <Link href="/">
              <Button className="m-4 self-end">Voltar</Button>
            </Link>
          ) : (
            ""
          )}
        </div>
    );
}