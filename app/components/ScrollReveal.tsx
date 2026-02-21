"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window === "undefined") return;

        // Use IntersectionObserver to add .is-visible class when elements scroll into view
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        // Optional: Unobserve to only animate once
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px 0px -10% 0px", // Trigger when element is slightly above the bottom
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );

        // Give React a tick to mount elements on route change
        setTimeout(() => {
            const revealElements = document.querySelectorAll(".reveal:not(.is-visible)");
            revealElements.forEach((el) => observer.observe(el));
        }, 100);

        return () => {
            observer.disconnect();
        };
    }, [pathname]);

    return null;
}
