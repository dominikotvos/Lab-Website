<script lang="ts">
    import { onMount } from "svelte";

    // Define team members
    interface TeamMember {
        name: string;
        position: string;
        photo: string;
    }

    const team: TeamMember[] = [
        {
            name: "Dominik Ötvös",
            position: "Developer",
            photo: "linkedinpfp.jpg",
        },
        {
            name: "Luka Ojdanić",
            position: "Developer",
            photo: "luka_linkedin.jpg",
        },
        {
            name: "Ngoc Duy Lâm",
            position: "Developer",
            photo: "duy_linkedin.jpg",
        },
    ];

    // Google Slides presentation data
    const presentationEmbedUrl =
        "https://docs.google.com/presentation/d/e/2PACX-1vQblLBlia2mfsga5N8O1dww3TNXx4z-up3EUZ_4oOTgDr4WKMltTJEsfZ2Lvq86Kzgwt0Xsl-af6oro/embed?start=false&loop=false&delayms=3000";

    // The actual presentation ID (from your edit URL)
    const presentationId = "1s0FvP9yNLEzs5tzuPZvuMSXekWtMwgHr_itbevhwc9U";

    // Generate correct URLs that will work with proper permissions
    const downloadUrls = {
        // Direct link to view the presentation
        view: `https://docs.google.com/presentation/d/${presentationId}/edit?usp=sharing`,

        // Link to the published version if available (from embed URL)
        published: presentationEmbedUrl.replace("/embed?", "/pub?"),
    };

    // Handle mobile menu
    let isMenuOpen = false;

    function toggleMenu(): void {
        isMenuOpen = !isMenuOpen;
    }

    // Handle smooth scrolling for navigation links
    onMount(() => {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                isMenuOpen = false;

                const targetId =
                    (link as HTMLAnchorElement).getAttribute("href") || "";
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth",
                    });
                }
            });
        });
    });
</script>

<svelte:head>
    <title>Linux Goons</title>
    <meta name="description" content="Company showcase website" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin="anonymous"
    />
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<!-- Navigation -->
<nav class="fixed top-0 left-0 right-0 z-50 glass">
    <div class="container">
        <div class="flex justify-between items-center py-4">
            <a
                href="#hero"
                class="font-bold text-xl"
                style="color: var(--primary);">Linux Goons</a
            >

            <!-- Mobile menu button -->
            <button
                class="md:hidden focus:outline-none"
                on:click={toggleMenu}
                aria-label="Toggle menu"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </button>

            <!-- Desktop navigation -->
            <div class="hidden md:flex space-x-8">
                <a href="#hero" class="hover:text-primary transition-colors"
                    >Home</a
                >
                <a href="#about" class="hover:text-primary transition-colors"
                    >About</a
                >
                <a href="#team" class="hover:text-primary transition-colors"
                    >Team</a
                >
                <a
                    href="#presentation"
                    class="hover:text-primary transition-colors">Presentation</a
                >
                <a href="#connect" class="hover:text-primary transition-colors"
                    >Connect</a
                >
            </div>
        </div>

        <!-- Mobile navigation menu -->
        {#if isMenuOpen}
            <div class="md:hidden mt-4 glass rounded-lg p-4">
                <div class="flex flex-col space-y-4">
                    <a href="#hero" class="hover:text-primary transition-colors"
                        >Home</a
                    >
                    <a
                        href="#about"
                        class="hover:text-primary transition-colors">About</a
                    >
                    <a href="#team" class="hover:text-primary transition-colors"
                        >Team</a
                    >
                    <a
                        href="#presentation"
                        class="hover:text-primary transition-colors"
                        >Presentation</a
                    >
                </div>
            </div>
        {/if}
    </div>
</nav>

<!-- Main Content -->
<main>
    <!-- Hero Section -->
    <section
        id="hero"
        class="min-h-screen flex items-center pt-16"
        style="background: radial-gradient(ellipse at top right, rgba(137, 180, 250, 0.1), var(--background), var(--background));"
    >
        <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div class="order-2 md:order-1">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span style="color: var(--primary);">Track</span> Tennis
                        Matches Live
                    </h1>
                    <p class="text-lg mb-8 opacity-80">
                        CourtSync transforms the tennis tournament experience by
                        providing real-time score tracking across multiple
                        courts. Our integrated system connects mechanical
                        scoreboards via Bluetooth to eliminate waiting
                        frustrations and keep players informed of exactly when
                        their court will be available.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <a href="#about" class="btn btn-primary">Learn More</a>
                        <a
                            href="#presentation"
                            class="btn"
                            style="background-color: var(--overlay);"
                            >View Presentation</a
                        >
                    </div>
                </div>
                <div class="order-1 md:order-2">
                    <!-- Video Container with Gradient Border -->
                    <div
                        class="relative p-1 rounded-xl"
                        style="background: linear-gradient(to right, var(--primary), var(--secondary), var(--tertiary));"
                    >
                        <div
                            class="rounded-lg overflow-hidden"
                            style="background-color: var(--surface);"
                        >
                            <div style="aspect-ratio: 16/9;">
                                <video
                                    class="w-full h-full object-cover"
                                    controls
                                >
                                    <source
                                        src="pitch_video.mp4"
                                        type="video/mp4"
                                    />
                                    <track
                                        kind="captions"
                                        src="subtitles.vtt"
                                        label="English"
                                        srclang="en"
                                        default
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section / Article -->
    <section id="about" class="section">
        <div class="container">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-3xl md:text-4xl font-bold mb-6 text-center">
                    <span
                        style="background-image: linear-gradient(to right, var(--primary), var(--tertiary)); -webkit-background-clip: text; background-clip: text; color: transparent;"
                        >Our Story</span
                    >
                </h2>
                <div class="card p-8 space-y-4" style="opacity: 0.9;">
                    <p>
                        As third-year computer science students at KdG, we took
                        on the challenge of developing CourtSync in just 6
                        weeks. With backgrounds in Java, Python, and Spring
                        Boot, we dove into entirely new technologies: .NET,
                        Blazor, C#, and MAUI.
                    </p>

                    <p>
                        Our project involved three integrated components: an
                        Arduino-based hardware client with Hall Effect sensors
                        to detect scoreboard changes, a mobile application to
                        connect with scoreboards via Bluetooth Low Energy, and a
                        web platform to display real-time match data.
                    </p>

                    <p>
                        We optimized battery life, implemented cross-platform
                        functionality, and created a system that solves a real
                        problem for tennis players and clubs. Through this
                        journey, we transformed from language-specific
                        programmers to technology-agnostic problem solvers ready
                        to tackle complex challenges in the software development
                        industry.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Team Section -->
    <section
        id="team"
        class="section"
        style="background-color: var(--surface);"
    >
        <div class="container">
            <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
                <span
                    style="background-image: linear-gradient(to right, var(--secondary), var(--primary)); -webkit-background-clip: text; background-clip: text; color: transparent;"
                    >Meet Our Team</span
                >
            </h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each team as member}
                    <div class="card group">
                        <div class="overflow-hidden" style="aspect-ratio: 1/1;">
                            <img
                                src={member.photo}
                                alt={member.name}
                                class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                width="800"
                                height="800"
                                loading="lazy"
                            />
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-semibold mb-1">
                                {member.name}
                            </h3>
                            <p style="color: var(--primary);">
                                {member.position}
                            </p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- Presentation Section -->
    <section id="presentation" class="section">
        <div class="container">
            <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
                <span
                    style="background-image: linear-gradient(to right, var(--tertiary), var(--secondary)); -webkit-background-clip: text; background-clip: text; color: transparent;"
                    >Our Presentation</span
                >
            </h2>

            <div class="max-w-4xl mx-auto">
                <!-- Presentation Slides Container with Gradient Border -->
                <div
                    class="relative p-1 rounded-xl"
                    style="background: linear-gradient(to right, var(--tertiary), var(--secondary), var(--primary));"
                >
                    <div
                        class="rounded-lg overflow-hidden"
                        style="background-color: var(--surface);"
                    >
                        <div style="aspect-ratio: 16/9;">
                            <!-- Google Slides embed with fixed TypeScript and accessibility issues -->
                            <iframe
                                src="https://docs.google.com/presentation/d/e/2PACX-1vQblLBlia2mfsga5N8O1dww3TNXx4z-up3EUZ_4oOTgDr4WKMltTJEsfZ2Lvq86Kzgwt0Xsl-af6oro/embed?start=false&loop=false&delayms=3000"
                                title="Project Presentation Slides"
                                class="w-full h-full"
                                frameborder="0"
                                allowfullscreen={true}
                            ></iframe>
                        </div>
                    </div>
                </div>

                <!-- Download Buttons - Reliable Version -->
                <div
                    class="mt-8 text-center flex flex-wrap justify-center gap-4"
                >
                    <!-- View in Google Slides Button -->
                    <a
                        href={downloadUrls.view}
                        class="btn btn-secondary flex items-center justify-center mx-auto px-4 py-3"
                        style="min-width: 180px; display: inline-flex; white-space: nowrap;"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5 mr-2 flex-shrink-0"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        <span>Open & Download</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <!-- Call to Action / Connect Section -->
    <section
        class="section relative overflow-hidden"
        id="connect"
        style="background: linear-gradient(to bottom right, var(--surface), var(--surface), var(--background));"
    >
        <!-- Decorative Elements -->
        <div
            class="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl"
            style="background-color: rgba(137, 180, 250, 0.1);"
        ></div>
        <div
            class="absolute -bottom-32 -left-32 w-64 h-64 rounded-full blur-3xl"
            style="background-color: rgba(203, 166, 247, 0.1);"
        ></div>

        <div class="container relative z-10">
            <div class="max-w-3xl mx-auto text-center">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    Connect With Our Team
                </h2>
                <p class="text-lg mb-8 opacity-80">
                    Feel free to reach out to any of our team members on
                    LinkedIn to learn more about our project.
                </p>

                <div
                    class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
                >
                    <a
                        href="https://linkedin.com/in/dominikotvos"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-secondary flex items-center justify-center mx-auto px-4 py-3 w-full"
                        style="min-width: 150px; display: inline-flex; white-space: nowrap;"
                    >
                        <svg
                            class="w-5 h-5 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                            />
                        </svg>
                        <span>Dominik Ötvös</span>
                    </a>

                    <a
                        href="https://linkedin.com/in/luka-ojdanic"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-secondary flex items-center justify-center mx-auto px-4 py-3 w-full"
                        style="min-width: 150px; display: inline-flex; white-space: nowrap;"
                    >
                        <svg
                            class="w-5 h-5 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                            />
                        </svg>
                        <span>Luka Ojdanić</span>
                    </a>

                    <a
                        href="https://linkedin.com/in/ngoc-duy-lam"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-secondary flex items-center justify-center mx-auto px-4 py-3 w-full"
                        style="min-width: 150px; display: inline-flex; white-space: nowrap;"
                    >
                        <svg
                            class="w-5 h-5 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                            />
                        </svg>
                        <span>Ngoc Duy Lâm</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</main>

<!-- Footer -->
<footer
    class="py-8 border-t"
    style="background-color: var(--surface); border-color: var(--overlay);"
>
    <div class="container">
        <div class="flex justify-center items-center">
            <div class="text-center">
                <span class="text-sm opacity-70"
                    >© 2025 Linux Goons. All rights reserved.</span
                >
            </div>
        </div>
    </div>
</footer>

