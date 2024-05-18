'use client';
import { Slash } from "lucide-react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function NavigationUrls() {
    const pathname = usePathname();
    
     const pathSegments = pathname.split('/').filter(segment => segment);

     const restOfPathname = pathSegments.length >= 1 ? '/' + pathSegments.slice(1).join('/') : '';

    return (
        <Breadcrumb className="m-2 ">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                {restOfPathname && (
                    <>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={pathname}>{restOfPathname}</BreadcrumbLink>
                        </BreadcrumbItem>
                    </>
                )}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
