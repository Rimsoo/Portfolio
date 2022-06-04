<template>
    <div class="grid grid-cols-7 h-screen">
        <div class="bg-code bg-cover bg-center col-span-2 flex flex-col items-end justify-center font-bold text-2xl text-white"></div>
        <section class="col-span-5 p-10 overflow-y-scroll">
            <h2 class="font-black text-3xl mb-5">RÉALISATIONS</h2><hr class="m-5">
            <div class="grid grid-cols-3 place-content-center">
                <a href="#home"><div class="flex flex-col items-center hover:bg-gray-200 transition duration-150 ease-out">
                    <div class="bg-stargate bg-contain bg-no-repeat bg-center h-20 w-60"></div>
                    <p>Stargate</p>
                </div>
                </a><a href="#home"><div class="flex flex-col items-center hover:bg-gray-200 transition duration-150 ease-out">
                    <div class="bg-mysql_to_postgresql bg-no-repeat bg-contain bg-center h-20 w-60"></div>
                    <p>Migration MySQL vers PostgreSQL</p>
                </div>
                </a><a href="#home"><div class="flex flex-col items-center hover:bg-gray-200 transition duration-150 ease-out">
                    <div class="bg-clonewars bg-contain bg-no-repeat bg-center h-20 w-60"></div>
                    <p>CloneWars</p>
                </div></a>
            </div>
        </section>
    </div>
</template>