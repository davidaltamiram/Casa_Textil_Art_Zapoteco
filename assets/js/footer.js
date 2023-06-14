const footer = document.getElementById("footer");


footer.innerHTML = `
<div class="container-footer">
<footer>
    <hr>
    <h1 class="visitanos">Visítanos</h1>
    <p class="Datos">
    Carretera a Teotitlán del valle KM 0.5 S/N
    <br>
    Lunes - Sábado: 8:30 - 19:00
    <br>
    Domingo: 8:30 - 17:00
    </p>
    <hr>


<!--Solo agregue el link de bootstrap y el script, las etiquetas en los containers y ya, lo demás es el mismo código que hiciste -->



<!--BLOQUE 1---------------------------------------------->       
<div class="container d-none d-lg-block"><!--Esta etiqueta d-none d-lg-block es la que hace la responsividad para este bloque-->
<div class="container-fondo">
    <div class="terminos">
        Términos y condiciones
    </div>
    <div class="derechos"> 
       Casa Textil Arte Zapoteco ® Todos los derechos reservados  
    </div>
        <div class="redes" >

         <!--ICONO DE TWITTER-->  
        <a href="https://twitter.com/textil_casa?lang=es" target="_blank">
        <svg id="twitter" width="32" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_77_306)">
        <path d="M13.4901 22.8102C10.5793 22.8102 7.74553 21.9525 5.29676 20.3296C5.04461 20.1616 4.9363 19.8369 5.03784 19.543C5.13938 19.2508 5.42284 19.0691 5.72069 19.1051C6.10061 19.1523 6.48646 19.1745 6.86723 19.1745C8.48846 19.1745 10.0919 18.7461 11.5084 17.9449C9.78984 17.3606 8.39876 15.9553 7.82592 14.1096C7.75653 13.8851 7.80646 13.6392 7.95707 13.4635C8.02223 13.3873 8.10176 13.3299 8.18892 13.2922C6.81815 12.1637 5.95846 10.414 6.00076 8.54856C6.00584 8.31635 6.12853 8.10214 6.32484 7.98646C6.50169 7.88021 6.71661 7.86993 6.90192 7.95304C5.81884 6.13563 5.72323 3.78011 6.82407 1.83074C6.92984 1.64223 7.12023 1.51885 7.33176 1.50085C7.54246 1.48371 7.74807 1.5754 7.88176 1.7442C10.2002 4.68239 13.5493 6.55464 17.1675 6.95908C17.0507 5.46642 17.4814 3.98147 18.4011 2.78444C19.502 1.35176 21.1469 0.531738 22.9154 0.531738C24.375 0.531738 25.7906 1.11355 26.8551 2.13922C27.8078 1.90872 28.7191 1.52999 29.5704 1.01073C29.7997 0.868486 30.0916 0.889051 30.3006 1.06385C30.5105 1.23779 30.5951 1.52399 30.513 1.79047C30.3471 2.32344 30.1102 2.82728 29.8132 3.2857C29.985 3.21715 30.1551 3.14432 30.3226 3.0672C30.5858 2.94638 30.8946 3.01922 31.0799 3.24714C31.2652 3.47421 31.283 3.80068 31.1231 4.04831C30.4538 5.08683 29.6355 5.99168 28.6904 6.74144C28.7733 10.8801 27.1791 15.113 24.3868 18.1309C21.5539 21.1907 17.786 22.8102 13.4901 22.8102ZM8.25238 20.417C9.90661 21.1136 11.6818 21.4761 13.4901 21.4761C18.4612 21.4761 21.6512 19.1548 23.4518 17.2072C26.0859 14.3615 27.5582 10.3368 27.3873 6.44325C27.378 6.21704 27.4787 6.00368 27.6555 5.87086C28.0092 5.60866 28.3435 5.32247 28.6591 5.014C28.3511 5.08169 28.0405 5.13396 27.7249 5.17252C27.4228 5.20851 27.1368 5.02428 27.037 4.72609C26.9397 4.42876 27.0548 4.10144 27.3162 3.93778C27.6978 3.70214 28.0388 3.41166 28.3325 3.07834C27.8248 3.26514 27.3027 3.41509 26.7705 3.5222C26.5521 3.56761 26.3288 3.49392 26.1756 3.32683C25.332 2.39713 24.1431 1.86588 22.9137 1.86588C21.5421 1.86588 20.2644 2.50253 19.4115 3.61302C18.556 4.7278 18.2446 6.15705 18.5568 7.53918C18.6025 7.74225 18.5535 7.95733 18.4231 8.11756C18.2937 8.27951 18.0974 8.36776 17.8951 8.35748C13.9529 8.15269 10.2375 6.35499 7.55261 3.38338C6.93915 5.31219 7.62453 7.49719 9.32192 8.6711C9.56138 8.83647 9.6663 9.14665 9.5783 9.42856C9.4903 9.71219 9.23307 9.90155 8.94369 9.89041C8.41653 9.87499 7.89023 9.78159 7.38761 9.61707C7.75653 11.3548 9.12307 12.7969 10.878 13.1619C11.1708 13.2219 11.3857 13.4824 11.3958 13.7917C11.406 14.101 11.2105 14.3778 10.9211 14.4592C10.4515 14.5903 9.96584 14.6614 9.47676 14.6691C10.2578 16.0127 11.6666 16.8807 13.232 16.9124C13.5053 16.9176 13.7456 17.1001 13.8319 17.3666C13.9182 17.6348 13.8319 17.9295 13.6178 18.1035C12.066 19.3605 10.1985 20.1599 8.25238 20.417Z" fill="#5EA7FF" stroke="#5EA7FF"/>
        </g>
        <defs>
        <filter id="filter0_d_77_306" x="0.5" y="0.0317383" width="35.2319" height="31.2783" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_77_306"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_77_306" result="shape"/>
        </filter>
        </defs>
        </svg>
        </a>

        <!--ICONO DE WHATSAPP-->   

        <svg id="whatsapp" width="32" height="32" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_497_383)">
            <path d="M14.4622 0.506536C8.60469 0.786686 3.98228 5.68669 4.00005 11.5771C4.00546 13.3711 4.43665 15.0645 5.19729 16.5607L4.02944 22.255C3.96626 22.563 4.24283 22.8327 4.54746 22.7602L10.1023 21.4383C11.5294 22.1524 13.1324 22.5648 14.8289 22.5908C20.8158 22.6827 25.8079 17.9076 25.9945 11.8961C26.1945 5.4522 20.8999 0.198574 14.4622 0.506536ZM21.0903 17.6605C19.4636 19.2945 17.3006 20.1945 15 20.1945C13.6529 20.1945 12.3632 19.8909 11.1666 19.2922L10.393 18.9051L6.98734 19.7156L7.70422 16.22L7.32311 15.4703C6.70192 14.2483 6.38695 12.9269 6.38695 11.5429C6.38695 9.23192 7.28285 7.05935 8.90963 5.42524C10.5219 3.80578 12.7201 2.89122 15.0002 2.89122C17.3008 2.89127 19.4636 3.79118 21.0904 5.42519C22.7172 7.05925 23.6131 9.23182 23.6131 11.5427C23.6131 13.833 22.7026 16.0411 21.0903 17.6605Z" fill="#7AD06D"/>
            <path d="M20.3384 13.939L18.2077 13.3244C17.9276 13.2436 17.6259 13.3235 17.4218 13.5324L16.9007 14.0656C16.681 14.2905 16.3477 14.3627 16.0569 14.2445C15.049 13.8348 12.9287 11.9412 12.3872 10.994C12.231 10.7208 12.2569 10.3792 12.4487 10.1299L12.9036 9.53878C13.0818 9.30717 13.1194 8.99612 13.0015 8.72838L12.1051 6.69184C11.8904 6.20406 11.2698 6.06206 10.8644 6.40647C10.2698 6.91168 9.56417 7.6794 9.4784 8.52991C9.32717 10.0294 9.9674 11.9197 12.3885 14.1895C15.1854 16.8117 17.4252 17.1581 18.8836 16.8033C19.7107 16.602 20.3717 15.7953 20.7889 15.1347C21.0733 14.6843 20.8488 14.0862 20.3384 13.939Z" fill="#7AD06D"/>
            </g>
            <defs>
            <filter id="filter0_d_497_383" x="0" y="0.493652" width="30" height="30.2786" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_497_383"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_497_383" result="shape"/>
            </filter>
            </defs>
            </svg>

            <!--ICONO FB-->   
            <a href="https://www.facebook.com/p/Casa-textil-arte-zapoteco-sa-de-cv-100063971678366/" target="_blank">
            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_554_387)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23 0.493652C24.6569 0.493652 26 1.8538 26 3.53163V19.7342C26 21.412 24.6569 22.7721 23 22.7721H7C5.34315 22.7721 4 21.412 4 19.7342V3.53163C4 1.8538 5.34315 0.493652 7 0.493652H23ZM23 2.51897C23.5523 2.51897 24 2.97236 24 3.53163V19.7342C24 20.2934 23.5523 20.7468 23 20.7468H18V13.6581H20.0762C20.5066 13.6581 20.8887 13.3792 21.0249 12.9657L21.4679 11.6198C21.6298 11.128 21.2683 10.6201 20.7564 10.6201H18V8.59484C18 8.08851 18.5 7.58218 19 7.58218H21C21.5523 7.58218 22 7.12879 22 6.56952V5.87485C22 5.54774 21.7937 5.25446 21.4813 5.17099C20.1705 4.82069 19 4.82069 19 4.82069C16.5 4.82069 15 6.56952 15 8.08851V10.6201H13C12.4477 10.6201 12 11.0735 12 11.6328V12.6454C12 13.2047 12.4477 13.6581 13 13.6581H15V20.7468H7C6.44772 20.7468 6 20.2934 6 19.7342V3.53163C6 2.97236 6.44772 2.51897 7 2.51897H23Z" fill="#1877F2"/>
                </g>
                <defs>
                <filter id="filter0_d_554_387" x="0" y="0.493652" width="30" height="30.2786" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_554_387"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_554_387" result="shape"/>
                </filter>
                </defs>
            </svg>
            </a>
                <!--ICONO DE INSTA-->   
                <a href="https://www.instagram.com/casa_textil_arte_zapoteco/?hl=es" target="_blank">
                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_554_389)">
                    <path d="M20.7008 7.29484C21.4538 7.29484 22.0643 6.67668 22.0643 5.91414C22.0643 5.15161 21.4538 4.53345 20.7008 4.53345C19.9478 4.53345 19.3374 5.15161 19.3374 5.91414C19.3374 6.67668 19.9478 7.29484 20.7008 7.29484Z" fill="url(#paint0_linear_554_389)"/>
                    <path d="M19.4461 0.493652H10.5539C6.94007 0.493652 4 3.47094 4 7.13053V16.1353C4 19.7948 6.94007 22.7721 10.5539 22.7721H19.4461C23.0599 22.7721 26 19.7948 26 16.1353V7.13053C26 3.47094 23.0599 0.493652 19.4461 0.493652ZM23.7868 16.1353C23.7868 18.5629 21.8434 20.5309 19.4461 20.5309H10.5539C8.15663 20.5309 6.2132 18.5629 6.2132 16.1353V7.13053C6.2132 4.70285 8.15663 2.73487 10.5539 2.73487H19.4461C21.8434 2.73487 23.7868 4.70285 23.7868 7.13053V16.1353Z" fill="url(#paint1_linear_554_389)"/>
                    <path d="M15 5.87085C11.8626 5.87085 9.31006 8.45568 9.31006 11.6328C9.31006 14.81 11.8626 17.3948 15 17.3948C18.1375 17.3948 20.69 14.81 20.69 11.6328C20.69 8.45564 18.1375 5.87085 15 5.87085ZM15 15.1537C13.0799 15.1537 11.5233 13.5774 11.5233 11.6329C11.5233 9.68836 13.0799 8.11206 15 8.11206C16.9202 8.11206 18.4768 9.68836 18.4768 11.6329C18.4768 13.5773 16.9202 15.1537 15 15.1537Z" fill="url(#paint2_linear_554_389)"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_554_389" x="0" y="0.493652" width="30" height="30.2786" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_554_389"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_554_389" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_554_389" x1="20.7008" y1="22.7073" x2="20.7008" y2="0.666692" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#E09B3D"/>
                    <stop offset="0.3" stop-color="#C74C4D"/>
                    <stop offset="0.6" stop-color="#C21975"/>
                    <stop offset="1" stop-color="#7024C4"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_554_389" x1="15" y1="22.7073" x2="15" y2="0.666693" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#E09B3D"/>
                    <stop offset="0.3" stop-color="#C74C4D"/>
                    <stop offset="0.6" stop-color="#C21975"/>
                    <stop offset="1" stop-color="#7024C4"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_554_389" x1="15" y1="22.7072" x2="15" y2="0.666659" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#E09B3D"/>
                    <stop offset="0.3" stop-color="#C74C4D"/>
                    <stop offset="0.6" stop-color="#C21975"/>
                    <stop offset="1" stop-color="#7024C4"/>
                    </linearGradient>
                    </defs>
                </svg>
                </a>
                    

            

</div>
</div>
</footer>
</div>
</div>

<!--BLOQUE 1---------------------------------------------->    


<!--BLOQUE 2---------------------------------------------->
<!--Este bloque es el que tienes que editar para que se vea como la versión móvil de figma, falta el logo de insta xq no supe cual era de tu codigo  -->

<div class="container d-md-block d-lg-none"  style="text-align: center;">
<div class="row">

 <!--ICONO DE TWITTER-->
<div class="col"> 
    <a href="https://twitter.com/textil_casa?lang=es" target="_blank">
    <svg  width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_699_271)">
        <path d="M13.4901 22.8102C10.5793 22.8102 7.74553 21.9525 5.29676 20.3296C5.04461 20.1616 4.9363 19.8369 5.03784 19.543C5.13938 19.2508 5.42284 19.0691 5.72069 19.1051C6.10061 19.1523 6.48646 19.1745 6.86723 19.1745C8.48846 19.1745 10.0919 18.7461 11.5084 17.9449C9.78984 17.3606 8.39876 15.9553 7.82592 14.1096C7.75653 13.8851 7.80646 13.6392 7.95707 13.4635C8.02223 13.3873 8.10176 13.3299 8.18892 13.2922C6.81815 12.1637 5.95846 10.414 6.00076 8.54856C6.00584 8.31635 6.12853 8.10214 6.32484 7.98646C6.50169 7.88021 6.71661 7.86993 6.90192 7.95304C5.81884 6.13563 5.72323 3.78011 6.82407 1.83074C6.92984 1.64223 7.12023 1.51885 7.33176 1.50085C7.54246 1.48371 7.74807 1.5754 7.88176 1.7442C10.2002 4.68239 13.5493 6.55464 17.1675 6.95908C17.0507 5.46642 17.4814 3.98148 18.4011 2.78444C19.502 1.35176 21.1469 0.531738 22.9154 0.531738C24.375 0.531738 25.7906 1.11355 26.8551 2.13922C27.8078 1.90872 28.7191 1.52999 29.5704 1.01073C29.7997 0.868486 30.0916 0.889051 30.3006 1.06385C30.5105 1.23779 30.5951 1.52399 30.513 1.79047C30.3471 2.32344 30.1102 2.82728 29.8132 3.2857C29.985 3.21715 30.1551 3.14432 30.3226 3.0672C30.5858 2.94638 30.8946 3.01922 31.0799 3.24714C31.2652 3.47421 31.283 3.80068 31.1231 4.04831C30.4538 5.08683 29.6355 5.99168 28.6904 6.74144C28.7733 10.8801 27.1791 15.113 24.3868 18.1309C21.5539 21.1907 17.786 22.8102 13.4901 22.8102ZM8.25238 20.417C9.90661 21.1136 11.6818 21.4761 13.4901 21.4761C18.4612 21.4761 21.6512 19.1548 23.4518 17.2072C26.0859 14.3615 27.5582 10.3368 27.3873 6.44325C27.378 6.21704 27.4787 6.00368 27.6555 5.87086C28.0092 5.60866 28.3435 5.32247 28.6591 5.014C28.3511 5.08169 28.0405 5.13396 27.7249 5.17252C27.4228 5.20851 27.1368 5.02428 27.037 4.72609C26.9397 4.42876 27.0548 4.10144 27.3162 3.93778C27.6978 3.70214 28.0388 3.41166 28.3325 3.07834C27.8248 3.26514 27.3027 3.41509 26.7705 3.5222C26.5521 3.56761 26.3288 3.49392 26.1756 3.32683C25.332 2.39713 24.1431 1.86588 22.9137 1.86588C21.5421 1.86588 20.2644 2.50253 19.4115 3.61302C18.556 4.7278 18.2446 6.15705 18.5568 7.53918C18.6025 7.74225 18.5535 7.95733 18.4231 8.11756C18.2937 8.27951 18.0974 8.36776 17.8951 8.35748C13.9529 8.15269 10.2375 6.35499 7.55261 3.38338C6.93915 5.31219 7.62453 7.49719 9.32192 8.6711C9.56138 8.83647 9.6663 9.14666 9.5783 9.42856C9.4903 9.71219 9.23307 9.90155 8.94369 9.89041C8.41653 9.87499 7.89023 9.78159 7.38761 9.61707C7.75653 11.3548 9.12307 12.7969 10.878 13.1619C11.1708 13.2219 11.3857 13.4824 11.3958 13.7917C11.406 14.101 11.2105 14.3778 10.9211 14.4592C10.4515 14.5903 9.96584 14.6614 9.47676 14.6691C10.2578 16.0127 11.6666 16.8807 13.232 16.9124C13.5053 16.9176 13.7456 17.1001 13.8319 17.3666C13.9182 17.6348 13.8319 17.9295 13.6178 18.1035C12.066 19.3605 10.1985 20.1599 8.25238 20.417Z" fill="#5EA7FF" stroke="#5EA7FF"/>
        </g>
        <defs>
        <filter id="filter0_d_699_271" x="0.500122" y="0.0317383" width="35.2318" height="31.2783" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_699_271"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_699_271" result="shape"/>
        </filter>
        </defs>
    </svg>
    </a>
        
</div>

<!--ICONO DE WHATSAPP-->
<div class="col">

    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_699_273)">
        <path d="M14.4622 0.506536C8.60469 0.786686 3.98228 5.68669 4.00005 11.5771C4.00546 13.3711 4.43665 15.0645 5.19729 16.5607L4.02944 22.255C3.96626 22.563 4.24283 22.8327 4.54746 22.7602L10.1023 21.4383C11.5294 22.1524 13.1324 22.5648 14.8289 22.5908C20.8158 22.6827 25.8079 17.9076 25.9945 11.8961C26.1945 5.4522 20.8999 0.198574 14.4622 0.506536ZM21.0903 17.6605C19.4636 19.2945 17.3006 20.1945 15 20.1945C13.6529 20.1945 12.3632 19.8909 11.1666 19.2922L10.393 18.9051L6.98734 19.7156L7.70422 16.22L7.32311 15.4703C6.70192 14.2483 6.38695 12.9269 6.38695 11.5429C6.38695 9.23192 7.28285 7.05935 8.90963 5.42524C10.5219 3.80578 12.7201 2.89122 15.0002 2.89122C17.3008 2.89127 19.4636 3.79118 21.0904 5.42519C22.7172 7.05925 23.6131 9.23182 23.6131 11.5427C23.6131 13.833 22.7026 16.0411 21.0903 17.6605Z" fill="#7AD06D"/>
        <path d="M20.3385 13.939L18.2078 13.3244C17.9277 13.2436 17.626 13.3235 17.4219 13.5324L16.9009 14.0656C16.6812 14.2905 16.3478 14.3627 16.057 14.2445C15.0491 13.8348 12.9288 11.9412 12.3874 10.994C12.2311 10.7208 12.257 10.3792 12.4488 10.1299L12.9037 9.53878C13.0819 9.30717 13.1195 8.99612 13.0017 8.72838L12.1052 6.69184C11.8905 6.20406 11.27 6.06206 10.8645 6.40647C10.2699 6.91168 9.56429 7.6794 9.47852 8.52991C9.32729 10.0294 9.96753 11.9197 12.3886 14.1895C15.1856 16.8117 17.4254 17.1581 18.8837 16.8033C19.7108 16.602 20.3719 15.7953 20.789 15.1347C21.0735 14.6843 20.8489 14.0862 20.3385 13.939Z" fill="#7AD06D"/>
        </g>
        <defs>
        <filter id="filter0_d_699_273" x="0" y="0.493652" width="30" height="30.2783" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_699_273"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_699_273" result="shape"/>
        </filter>
        </defs>
        </svg>
        
</div>

<!--ICONO DE FB-->
<div class="col">
    <a href="https://www.facebook.com/p/Casa-textil-arte-zapoteco-sa-de-cv-100063971678366/" target="_blank">
    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_699_277)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M23 0.493652C24.6569 0.493652 26 1.8538 26 3.53163V19.7342C26 21.412 24.6569 22.7721 23 22.7721H7C5.34315 22.7721 4 21.412 4 19.7342V3.53163C4 1.8538 5.34315 0.493652 7 0.493652H23ZM23 2.51897C23.5523 2.51897 24 2.97236 24 3.53163V19.7342C24 20.2934 23.5523 20.7468 23 20.7468H18V13.6581H20.0762C20.5066 13.6581 20.8887 13.3792 21.0249 12.9657L21.4679 11.6198C21.6298 11.128 21.2683 10.6201 20.7564 10.6201H18V8.59484C18 8.08851 18.5 7.58218 19 7.58218H21C21.5523 7.58218 22 7.12879 22 6.56952V5.87485C22 5.54774 21.7937 5.25446 21.4813 5.17099C20.1705 4.82069 19 4.82069 19 4.82069C16.5 4.82069 15 6.56952 15 8.08851V10.6201H13C12.4477 10.6201 12 11.0735 12 11.6328V12.6454C12 13.2047 12.4477 13.6581 13 13.6581H15V20.7468H7C6.44772 20.7468 6 20.2934 6 19.7342V3.53163C6 2.97236 6.44772 2.51897 7 2.51897H23Z" fill="#1877F2"/>
        </g>
        <defs>
        <filter id="filter0_d_699_277" x="0" y="0.493652" width="30" height="30.2783" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_699_277"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_699_277" result="shape"/>
        </filter>
        </defs>
    </svg>
    </a>
        
        
</div>


<!--ICONO DE INSTA-->
<div class="col">
    <a href="https://www.instagram.com/casa_textil_arte_zapoteco/?hl=es" target="_blank">
    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_699_279)">
        <path d="M20.7011 7.29508C21.4541 7.29508 22.0645 6.67692 22.0645 5.91439C22.0645 5.15185 21.4541 4.53369 20.7011 4.53369C19.9481 4.53369 19.3376 5.15185 19.3376 5.91439C19.3376 6.67692 19.9481 7.29508 20.7011 7.29508Z" fill="url(#paint0_linear_699_279)"/>
        <path d="M19.4461 0.493652H10.5539C6.94007 0.493652 4 3.47094 4 7.13053V16.1353C4 19.7948 6.94007 22.7721 10.5539 22.7721H19.4461C23.0599 22.7721 26 19.7948 26 16.1353V7.13053C26 3.47094 23.0599 0.493652 19.4461 0.493652ZM23.7868 16.1353C23.7868 18.5629 21.8434 20.5309 19.4461 20.5309H10.5539C8.15663 20.5309 6.2132 18.5629 6.2132 16.1353V7.13053C6.2132 4.70285 8.15663 2.73487 10.5539 2.73487H19.4461C21.8434 2.73487 23.7868 4.70285 23.7868 7.13053V16.1353Z" fill="url(#paint1_linear_699_279)"/>
        <path d="M15 5.87109C11.8626 5.87109 9.31006 8.45592 9.31006 11.6331C9.31006 14.8102 11.8626 17.3951 15 17.3951C18.1375 17.3951 20.69 14.8102 20.69 11.6331C20.69 8.45588 18.1375 5.87109 15 5.87109ZM15 15.1539C13.0799 15.1539 11.5233 13.5776 11.5233 11.6331C11.5233 9.68861 13.0799 8.11231 15 8.11231C16.9202 8.11231 18.4768 9.68861 18.4768 11.6331C18.4768 13.5776 16.9202 15.1539 15 15.1539Z" fill="url(#paint2_linear_699_279)"/>
        </g>
        <defs>
        <filter id="filter0_d_699_279" x="0" y="0.493652" width="30" height="30.2783" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_699_279"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_699_279" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_699_279" x1="20.7011" y1="22.7075" x2="20.7011" y2="0.666936" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E09B3D"/>
        <stop offset="0.3" stop-color="#C74C4D"/>
        <stop offset="0.6" stop-color="#C21975"/>
        <stop offset="1" stop-color="#7024C4"/>
        </linearGradient>
        <linearGradient id="paint1_linear_699_279" x1="15" y1="22.7073" x2="15" y2="0.666693" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E09B3D"/>
        <stop offset="0.3" stop-color="#C74C4D"/>
        <stop offset="0.6" stop-color="#C21975"/>
        <stop offset="1" stop-color="#7024C4"/>
        </linearGradient>
        <linearGradient id="paint2_linear_699_279" x1="15" y1="22.7075" x2="15" y2="0.666903" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E09B3D"/>
        <stop offset="0.3" stop-color="#C74C4D"/>
        <stop offset="0.6" stop-color="#C21975"/>
        <stop offset="1" stop-color="#7024C4"/>
        </linearGradient>
        </defs>
    </svg>
    </a>
        
        
</div>



</div>
<div class="row">
<div class="col">
<div class="terminos">
    Términos y condiciones
</div>
</div>
<div class="col">
<div class="derechos"> 
   Casa Textil Arte Zapoteco ® Todos los derechos reservados  
</div>
</div>
</div>
</div>

`;

