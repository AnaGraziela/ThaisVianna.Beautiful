// Declarando os links
const links = {
  whats:
    "https://api.whatsapp.com/send/?phone=5567984141520&text&type=phone_number&app_absent=0",
  insta: "https://www.instagram.com/thaisviana.beauty",
  site: "https://client.tuaagenda.com/c/ThaisVianaBeauty",
  local:
    "https://www.google.com/maps?q=R.+Roraima,+281+-+Jardim+Panorama,+Campo+Grande+-+MS,+79044-620&ftid=0x9486e9351693927b:0x9ccb69b0328f9f98&entry=gps&lucs=,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISEjI1LjE0LjEuNzQyMzk4MTI0MBgAIIgnKmMsOTQyMjQ4MjUsOTQyMjcyNDcsOTQyMjcyNDgsOTQyMzExODgsNDcwNzE3MDQsNDcwNjk1MDgsOTQyMTg2NDEsOTQyMDMwMTksNDcwODQzMDQsOTQyMDg0NTgsOTQyMDg0NDdCAkJS&skid=2298f5ee-60c9-4b3f-8579-93d0a65e94dd&g_st=com.google.maps.preview.copy",
};

// Quando a página carregar, aplica os links reais
window.onload = () => {
  document.querySelectorAll("[data-link]").forEach((el) => {
    const chave = el.getAttribute("data-link");
    if (links[chave]) {
      el.setAttribute("href", links[chave]);
    }
  });
};
