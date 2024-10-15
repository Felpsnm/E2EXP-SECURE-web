<script>

  import { goto } from "$app/navigation";

</script>
<nav class="bg-gray-100 border-b border-neutral-200">
    <div class="flex items-center justify-between mx-auto max-w-7xl px-4 h-20">
      <button on:click={() => goto("/")} class="absolute">
        <img
          class="h-9"
          src="/Cisco_logo.png"
          alt="E2EXP-SECURE"
        />
      </button>
      <div class="flex-1 flex justify-center font-sans text-2xl text-cisco_skyblue">
        Cisco Secure
      </div>
    </div>
  </nav>