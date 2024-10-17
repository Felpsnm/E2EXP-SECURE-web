<script>
  import { goto } from "$app/navigation";
</script>

<!--Banner Bem-Vindo!-->
<div class="flex justify-center mx-auto max-w-7xl bg-black relative">
  <enhanced:img
    src="/static/Banner.jpg"
    alt="Background showing security dashboard"
    class="size-full w-full object-cover opacity-70"
  />
  <div
    class="py-[8.2rem] absolute inset-0 flex flex-col justify-center text-left mx-20"
  >
    <h1 class="text-6xl font-sans text-white">
      Bem-Vindo!
    </h1>
    <p class="text-2xl mt-2 text-white mx-1">End-to-End eXperience</p>
  </div>
</div>

<!--Botões de Redirect-->
<div class="flex justify-center mx-auto max-w-7xl">
  <div class="space-y-5 py-8">
    <div class="flex gap-16 ">
      <button on:click={() => window.location.href = 'http://finance.e2exp.local:8080'} class="flex-wrap cursor-pointers">
        <img src="/Finance.png" alt="" class="size-full rounded-t-xl border-cisco_skyblue border w-40 h-40">
        <div class="relative w-full">
          <div class="absolute inset-0 bg-cisco_skyblue opacity-70 px-5 rounded-b-xl"></div>
          <div class="relative text-white text-s">
            Financeiro
          </div>
        </div>
      </button>
      <button on:click={() => window.location.href = 'http://dev.e2exp.local:8080'} class="flex-wrap cursor-pointers">
        <img src="/Developer.svg" alt="" class="size-full rounded-t-xl border-cisco_skyblue border h-40 w-40">
        <div class="relative w-full">
          <div class="absolute inset-0  bg-cisco_skyblue opacity-70 rounded-b-xl"></div>
          <div class="relative flex-wrap text-white text-sm">
              Página do Dev
            </div>
          </div> 
      </button>
      <button on:click={() => goto("/employee-directory")} class="flex-wrap cursor-pointers">
        <img src="/Employee-Directory.svg" alt="" class="size-full rounded-t-xl border-cisco_skyblue border h-40 w-40 p-4">
        <div class="relative w-full">
          <div class="absolute inset-0 bg-cisco_skyblue opacity-70 rounded-b-xl"></div>
          <div class="relative flex justify-center text-white text-sm">
            Diretório do Func.
          </div>    
        </div>
      </button>
    </div>
  </div>
</div>

<!--Soluções-->
<div class="mx-auto max-w-7xl">
  <div class="space-y-5 py-8">
    <h1 class="flex justify-center text-3xl font-sans text-cisco_midnightblue">Soluções</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 m-52 *:border *:border-cisco_darkgray *:rounded-xl *:py-2 *:px-10 *:flex *:flex-col *:justify-center *:items-center"> 
      <button on:click={() => window.location.href = 'https://fmc01.e2exp.local/ui/login'}>
        <img src="/icons/secure-firewall.svg" alt="" class="">
        <div class="text-sm text-cisco_skyblue">
          Cisco Secure Firewall
        </div>
      </button>
      <button on:click={() => window.location.href = 'https://ise01.e2exp.local/admin/login.jsp'} >
        <img src="/icons/ise.svg" alt="" class="">
        <div class="text-sm text-cisco_skyblue">
          Cisco Identity Service Engine
        </div>        
      </button>
      <button on:click={() => window.location.href = 'https://sign-on.security.cisco.com'}>
        <img src="/icons/endpoint.svg" alt="" class="">
        <div class="text-sm text-cisco_skyblue">
          Cisco Secure Endpoint
        </div>        
      </button>
      <button on:click={() => window.location.href = 'https://admin-14393a99.duosecurity.com/login?next=%2Fphones'}>
        <img src="/icons/duo.svg" alt="" class="">
        <div class="text-sm text-cisco_skyblue">
          Cisco Duo
        </div>        
      </button>
      <button on:click={() => window.location.href = 'https://10.0.9.30/sw-login/'}>
        <img src="/icons/network-analytics.svg" alt="" class="">
        <div class="text-sm text-cisco_skyblue">
          Cisco Secure Network Analytics
        </div>        
      </button>
      <button on:click={() => window.location.href = 'https://login.sse.cisco.com/'}>
        <img src="/icons/secure-access.svg" alt="" class="">
        <div class="text-sm text-cisco_skyblue">
          Cisco Secure Access
        </div>        
      </button>
      <button on:click={() => window.location.href = 'https://www.cisco.com/site/br/pt/products/security/secure-client/index.html'}>
        <img src="/icons/secure-client.svg" alt="" class="">
        <div class="text-sm text-cisco_skyblue">
          Cisco Secure Secure Client
        </div>
      </button>
      <button on:click={() => window.location.href = 'http://10.0.9.195:8000/en-US/account/login?return_to=%2Fen-US%2F'} class="space-y-3">
        <img src="/icons/splunk.svg" alt="">
       
      </button>
    </div>
  </div>
</div>

<!--Topologia-->
<div class="mx-auto max-w-7xl">
  <div class="space-y-5 py-8 mx-16">
    <h1 class="flex justify-center text-3xl font-sans text-cisco_midnightblue">Topologia</h1>
    <div class="border border-cisco_darkgray rounded-xl overflow-hidden">
      <img src="/END-TO-END_TOPOLOGY.svg" alt="">
    </div>
  </div>
</div>

<!--Usuários da Demo-->
<div class="flex justify-center mx-auto max-w-7xl">
  <div class="space-y-5 py-8 m-10">
    <h1 class="flex justify-center py-5 text-3xl font-sans text-cisco_midnightblue">Usuários da Demo</h1>
    <div class="flex justify-center gap-10 *:rounded-xl *:p-5">
      <div class="border-2 border-cisco_green" style="box-shadow: 8px 8px 25px rgba(0,0,0,.2)">
        <div class="space-y-3">
          <div class="avatar">
            <enhanced:img src="/static/Tony_Stark.png" alt="" />
          </div>
          <div class="flex justify-center gap-2 items-center">
            <h1 class="idealizadores_nome">Tony Stark - Analista Financeiro</h1>
            <button on:click={() => window.location.href = 'https://www.instagram.com/'}>
              <img src="/instagram.png" alt="" class="w-6 h-6">
            </button>
          </div>
          <div>
            <h1 class="users_demo_description text-pretty">
              Tony Stark é um Analista Financeiro destacado, reconhecido por sua precisão e integridade nos relatórios financeiros. Ele é responsável por analisar demonstrações financeiras, desenvolver previsões orçamentárias e identificar oportunidades para otimização de custos. Com uma mente analítica e inovadora, Tony implementa soluções criativas para desafios financeiros complexos e garante a saúde financeira da empresa.
Além de suas habilidades profissionais, Tony é apaixonado por tecnologia e inovação. Nos momentos de lazer, ele gosta de desenvolver novos gadgets, pilotar carros esportivos e explorar avanços na inteligência artificial.
            </h1>
          </div>
        </div>
      </div>
      <div class="border-2 border-cisco_skyblue" style="box-shadow: 8px 8px 25px rgba(0,0,0,.2)">
        <div class="space-y-3">
          <div class="avatar">
            <enhanced:img src="/static/Tom_Holland.png" alt="" />
          </div>
          <div class="flex justify-center gap-2 items-center">
            <h1 class="idealizadores_nome">Peter Parker - Desenvolvedor de Software</h1>     
            <button on:click={() => window.location.href = 'https://www.instagram.com/'}>
              <img src="/instagram.png" alt="" class="w-6 h-6">
            </button>            
          </div>
          <div>
            <h1 class="users_demo_description text-pretty">
              Peter Parker é um Desenvolvedor de Software dedicado, reconhecido por sua habilidade em criar soluções inovadoras e resolver problemas complexos. Ele desenvolve e mantém aplicações web, otimiza códigos e colabora com equipes diversas para implementar novas funcionalidades, e fazer com que as aplicações sejam cada vez mais eficientes.
Fora do ambiente profissional, Peter é entusiasta da fotografia e da ciência. Ele adora capturar momentos únicos com sua câmera, explorar novas tecnologias e se envolver em projetos de robótica nas horas vagas. Sua paixão por aprendizado contínuo e inovação faz dele um valioso membro da equipe.
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!--Idealizadores-->
<div class="flex justify-center mx-auto max-w-7xl">
  <div class="space-y-5 py-8">
    <h1 class="text-3xl font-sans text-cisco_midnightblue">Idealizadores</h1>
    <div
      class="*:justify-center *:gap-32 rounded-xl p-5"
      style="box-shadow: 8px 8px 25px rgba(0,0,0,.2)"
    >
      <div class="flex flex-wrap p-4 *:space-y-3 *:w-32">
        <div>
          <div class="avatar">
            <enhanced:img src="/static/workers/vicazeve.jpg" alt="" />
          </div>
          <div>
            <h1 class="idealizadores_nome">Victor Azevedo</h1>
          </div>
        </div>
        <div>
          <div class="avatar">
            <enhanced:img src="/static/workers/rlaselva.jpg" alt="" />
          </div>
          <div>
            <h1 class="idealizadores_nome">Rafael La Selva</h1>
          </div>
        </div>
        <div>
          <div class="avatar">
            <enhanced:img src="/static/workers/peborges.jpg" alt="" />
          </div>
          <div>
            <h1 class="idealizadores_nome">Pedro Borges</h1>
          </div>
        </div>
        <div>
          <div class="avatar">
            <enhanced:img src="/static/workers/pecatari.jpg" alt="" />
          </div>
          <div>
            <h1 class="idealizadores_nome">Pedro Catarino</h1>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap *:space-y-3 *:w-28">
        <div>
          <div class="avatar">
            <enhanced:img src="/static/workers/flcorrea.jpg" alt="" />
          </div>
          <div>
            <h1 class="idealizadores_nome">Flávio Correa</h1>
          </div>
        </div>
        <div>
          <div class="avatar">
            <enhanced:img src="/static/workers/fzamai.jpg" alt="" />
          </div>
          <div>
            <h1 class="idealizadores_nome">Fernando Zamai</h1>
          </div>
        </div>
        <div>
          <div class="avatar">
            <enhanced:img src="/static/workers/felipema.jpg" alt="" />
          </div>
          <div>
            <h1 class="idealizadores_nome">Felipe Martins</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>