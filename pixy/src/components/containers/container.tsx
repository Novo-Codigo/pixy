import type { JSX } from "solid-js";

export default function Container({ children, bgImage }: { children: JSX.Element, bgImage?: string }) {
    return (
        <div
            class="container rounded-xl p-4 bg-cover bg-right bg-no-repeat overflow-hidden"
            style={bgImage ? { "background-image": `url(${bgImage})` } : undefined}
        >
            {children}
        </div>
    );
}