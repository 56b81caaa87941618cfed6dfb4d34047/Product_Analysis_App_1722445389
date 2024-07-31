/* Summary: The hero component contains the following two parts:
- To the left: There is a hero title text in h1 heading. Underneath it, a hero subtitle line of text. All this text is left-aligned. Underneath this, there are two white buttons in the same line, both justified in alignment.
- To the right: There is an image relevant to the app.
*/
Vue.component("simple_hero_component_1722445393", {
    template: `
        <div>
            <nav class="bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-purple-200">
                <div class="max-w-6xl mx-auto px-4">
                    <div class="flex justify-between">
                        <div class="flex space-x-7">
                            <div>
                                <a href="#" class="flex items-center py-4 px-2">
                                    <span class="font-semibold text-white text-lg">Logo</span>
                                </a>
                            </div>
                            <div class="hidden md:flex items-center space-x-1">
                                <a href="#" class="py-4 px-2 text-white border-b-4 border-pink-500 font-semibold">Home</a>
                                <a href="#" class="py-4 px-2 text-white font-semibold hover:text-pink-300 transition duration-300">About</a>
                                <a href="#" class="py-4 px-2 text-white font-semibold hover:text-pink-300 transition duration-300">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <section id="hero-section" class="bg-gradient-to-br from-pink-400 to-purple-600 flex-1 min-h-screen">
                <div id="hero-container" class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div id="hero-text-container" class="mr-auto place-self-center lg:col-span-7 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-10 shadow-xl border border-white border-opacity-20">
                        
                        <div id="hero-title-container-text" class="flex">
                            <h1 id="hero-title" class="flex-1 max-w-2xl mb-4 text-5xl font-extrabold leading-none tracking-tight md:text-6xl xl:text-7xl text-white text-shadow-lg">Cosmic Insights Unleashed</h1>
                        </div>

                        <div id="hero-subtitle-container" class="flex">
                            <p id="hero-subtitle" class="flex-1 max-w-2xl mb-6 font-light text-pink-100 lg:mb-8 md:text-xl lg:text-2xl">Explore New Dimensions of Data Analysis</p>
                        </div>

                        <div id="hero-buttons-container" class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                            <div id="hero-button-1-container" class="flex">
                                <a id="hero-button-1" href="https://github.com/themesberg/landwind" class="flex-1 items-center justify-center w-full px-6 py-4 text-lg font-medium text-center text-purple-900 bg-white bg-opacity-30 border border-purple-300 rounded-xl sm:w-auto hover:bg-opacity-50 focus:ring-4 focus:ring-purple-200 transition duration-300">Embark Now</a>
                            </div>

                            <div id="hero-button-2-container" class="flex">
                                <a id="hero-button-2" href="https://www.figma.com/community/file/1125744163617429490" class="flex-1 items-center justify-center w-full px-6 py-4 mb-2 mr-2 text-lg font-medium text-white bg-purple-600 bg-opacity-30 border border-purple-400 rounded-xl sm:w-auto hover:bg-opacity-50 focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-300">Discover More</a>
                            </div>
                        </div>
                        
                    </div>
                    <div id="hero-image-container" class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img id="hero-image" src="./images/hero.png" alt="hero image" class="rounded-3xl shadow-2xl transform hover:scale-105 transition duration-300">
                    </div>
                </div>
            </section>            
        </div>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
