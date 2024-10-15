<div class="flex justify-center mx-auto max-w-7xl">
    <div class="space-y-5 py-16">
        <div class="flex gap-16 *:rounded-xl *:flex *:justify-center *:items-end *:bg-red-500 *:w-40 *:h-40">
            <button on:click={() => window.location.href = 'https://10.0.9.112'}>
                <div class="relative w-full">
                <div class="absolute inset-0 bg-black opacity-70 rounded-b-xl"></div>
                <div class="relative flex justify-center text-white text-sm">
                    HTTPS
                </div>
                </div>
            </button>
            <button on:click={() => window.location.href = 'https://10.0.9.55:4200'}>
                <div class="relative w-full">
                <div class="absolute inset-0 bg-black opacity-70 rounded-b-xl"></div>
                <div class="relative flex justify-center text-white text-sm">
                    SSH
                </div>
                </div>
            </button>
        </div>
    </div>
</div>
