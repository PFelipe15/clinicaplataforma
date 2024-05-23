'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function NavigationUrls() {
    const pathname = usePathname();
    
    // Split the pathname into segments
    const pathSegments = pathname.split('/').filter(segment => segment);

    // Create an array of breadcrumb items
    const breadcrumbItems = pathSegments.map((segment, index) => {
        // Construct the URL for the current segment
        const href = '/' + pathSegments.slice(0, index + 1).join('/');

        return (
            <BreadcrumbItem key={index}>
                <BreadcrumbLink href={href}>
                    {segment}
                </BreadcrumbLink>
                {index < pathSegments.length - 1 && <BreadcrumbSeparator>/</BreadcrumbSeparator>}
            </BreadcrumbItem>
        );
    });

    return (
        <Breadcrumb className="m-2">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    {pathSegments.length > 0 && <BreadcrumbSeparator>/</BreadcrumbSeparator>}
                </BreadcrumbItem>
                {breadcrumbItems}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
