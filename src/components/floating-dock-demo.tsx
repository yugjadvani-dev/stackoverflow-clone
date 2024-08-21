import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconBuildingCommunity,
    IconExchange,
    IconHome,
    IconMessage,
    IconNewSection,
    IconQuestionMark,
    IconTags,
    IconTerminal2,
    IconUser,
    IconUsers,
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockDemo() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/",
        },

        {
            title: "Profile",
            icon: (
                <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/profile",
        },
        {
            title: "Questions",
            icon: (
                <IconQuestionMark className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/question",
        },
        {
            title: "Tags",
            icon: (
                <IconTags className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/tags",
        },
        {
            title: "Users",
            icon: (
                <IconUsers className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/users",
        },

        {
            title: "Companies",
            icon: (
                <IconBuildingCommunity className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/companies",
        },
        {
            title: "Discussions",
            icon: (
                <IconMessage className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/discussions",
        },
    ];

    return (
        <>
            <div className="fixed w-full bottom-4 top-auto">
                <div className="flex items-center justify-center w-full">
                    <FloatingDock
                        mobileClassName="translate-y-20"
                        items={links}
                    />
                </div>
            </div>
        </>
    );
}
