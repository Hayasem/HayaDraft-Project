const personagens = [
    {nome: "Aether", imagem: "imagensPerfil/personagensPerfil/Aether_Icon.png"},
    {nome: "Albedo", imagem: "imagensPerfil/personagensPerfil/Albedo_Icon.png"},
    {nome: "Alhaitham", imagem: "imagensPerfil/personagensPerfil/Alhaitham_Icon.png"},
    {nome: "Aloy", imagem: "imagensPerfil/personagensPerfil/Aloy_Icon.png"},
    {nome: "Amber", imagem: "imagensPerfil/personagensPerfil/Amber_Icon.png"},
    {nome: "Amber Skin", imagem: "imagensPerfil/personagensPerfil/Amber_Skin_100__Outrider_Icon.png"},
    {nome: "Arataki Itto", imagem: "imagensPerfil/personagensPerfil/Arataki_Itto_Icon.png"},
    {nome: "Baizhu", imagem: "imagensPerfil/personagensPerfil/Baizhu_Icon.png"},
    {nome: "Barbara", imagem: "imagensPerfil/personagensPerfil/Barbara_Icon.png"},
    {nome: "Barbara Skin", imagem: "imagensPerfil/personagensPerfil/Barbara_Skin_Summertime_Sparkle_Icon.png"},
    {nome: "Beidou", imagem: "imagensPerfil/personagensPerfil/Beidou_Icon.png"},
    {nome: "Bennett", imagem: "imagensPerfil/personagensPerfil/Bennett_Icon.png"},
    {nome: "Candace", imagem: "imagensPerfil/personagensPerfil/Candace_Icon.png"},
    {nome: "Chongyun", imagem: "imagensPerfil/personagensPerfil/Chongyun_Icon.png"},
    {nome: "Collei", imagem: "imagensPerfil/personagensPerfil/Collei_Icon.png"},
    {nome: "Cyno", imagem: "imagensPerfil/personagensPerfil/Cyno_Icon.png"},
    {nome: "Dehya", imagem: "imagensPerfil/personagensPerfil/Dehya_Icon.png"},
    {nome: "Diluc", imagem: "imagensPerfil/personagensPerfil/Diluc_Icon.png"},
    {nome: "Diluc Skin", imagem: "imagensPerfil/personagensPerfil/Diluc_Skin_Red_Dead_of_Night_Icon.png"},
    {nome: "Diona", imagem: "imagensPerfil/personagensPerfil/Diona_Icon.png"},
    {nome: "Dori", imagem: "imagensPerfil/personagensPerfil/Dori_Icon.png"},
    {nome: "Eula", imagem: "imagensPerfil/personagensPerfil/Eula_Icon.png"},
    {nome: "Faruzan", imagem: "imagensPerfil/personagensPerfil/Faruzan_Icon.png"},
    {nome: "Fischl", imagem: "imagensPerfil/personagensPerfil/Fischl_Icon.png"},
    {nome: "Fischl Skin", imagem: "imagensPerfil/personagensPerfil/Fischl_Skin_Ein_Immernachtstraum_Icon.png"},
    {nome: "Freminet", imagem: "imagensPerfil/personagensPerfil/Freminet_Icon.png"},
    {nome: "Ganyu", imagem: "imagensPerfil/personagensPerfil/Ganyu_Icon.png"},
    {nome: "Gorou", imagem: "imagensPerfil/personagensPerfil/Gorou_Icon.png"},
    {nome: "Hu Tao", imagem: "imagensPerfil/personagensPerfil/Hu_Tao_Icon.png"},
    {nome: "Jean", imagem: "imagensPerfil/personagensPerfil/Jean_Icon.png"},
    {nome: "Jean Skin", imagem: "imagensPerfil/personagensPerfil/Jean_Skin_Gunnhildr_s_Legacy_Icon.png"},
    {nome: "Jean Skin 2", imagem: "imagensPerfil/personagensPerfil/Jean_Skin_Sea_Breeze_Dandelion_Icon.png"},
    {nome: "Kaedehara Kazuha", imagem: "imagensPerfil/personagensPerfil/Kaedehara_Kazuha_Icon.png"},
    {nome: "Kaeya", imagem: "imagensPerfil/personagensPerfil/Kaeya_Icon.png"},
    {nome: "Kaeya Skin", imagem: "imagensPerfil/personagensPerfil/Kaeya_Skin_Sailwind_Shadow_Icon.png"},
    {nome: "Kamisato Ayaka", imagem: "imagensPerfil/personagensPerfil/Kamisato_Ayaka_Icon.png"},
    {nome: "Kamisato Ayaka Skin", imagem: "imagensPerfil/personagensPerfil/Kamisato_Ayaka_Skin_Springbloom_Missive_Icon.png"},
    {nome: "Kamisato Ayato", imagem: "imagensPerfil/personagensPerfil/Kamisato_Ayato_Icon.png"},
    {nome: "Kaveh", imagem: "imagensPerfil/personagensPerfil/Kaveh_Icon.png"},
    {nome: "Keqing", imagem: "imagensPerfil/personagensPerfil/Keqing_Icon.png"},
    {nome: "Keqing Skin", imagem: "imagensPerfil/personagensPerfil/Keqing_Skin_Opulent_Splendor_Icon.png"},
    {nome: "Kirara", imagem: "imagensPerfil/personagensPerfil/Kirara_Icon.png"},
    {nome: "Klee", imagem: "imagensPerfil/personagensPerfil/Klee_Icon.png"},
    {nome: "Klee Skin", imagem: "imagensPerfil/personagensPerfil/Klee_Skin_Blossoming_Starlight_Icon.png"},
    {nome: "Kujou Sara", imagem: "imagensPerfil/personagensPerfil/Kujou_Sara_Icon.png"},
    {nome: "Kuki Shinobu", imagem: "imagensPerfil/personagensPerfil/Kuki_Shinobu_Icon.png"},
    {nome: "Layla", imagem: "imagensPerfil/personagensPerfil/Layla_Icon.png"},
    {nome: "Lisa", imagem: "imagensPerfil/personagensPerfil/Lisa_Icon.png"},
    {nome: "Lisa Skin", imagem: "imagensPerfil/personagensPerfil/Lisa_Skin_A_Sobriquet_Under_Shade_Icon.png"},
    {nome: "Lumine", imagem: "imagensPerfil/personagensPerfil/Lumine_Icon.png"},
    {nome: "Lynette", imagem: "imagensPerfil/personagensPerfil/Lynette_Icon.png"},
    {nome: "Lyney", imagem: "imagensPerfil/personagensPerfil/Lyney_Icon.png"},
    {nome: "Mika", imagem: "imagensPerfil/personagensPerfil/Mika_Icon.png"},
    {nome: "Mona", imagem: "imagensPerfil/personagensPerfil/Mona_Icon.png"},
    {nome: "Mona Skin", imagem: "imagensPerfil/personagensPerfil/Mona_Skin_Pact_of_Stars_and_Moon_Icon.png"},
    {nome: "Nahida", imagem: "imagensPerfil/personagensPerfil/Nahida_Icon.png"},
    {nome: "Neuvillette", imagem: "imagensPerfil/personagensPerfil/Neuvillette_Icon.png"},
    {nome: "Nilou", imagem: "imagensPerfil/personagensPerfil/Nilou_Icon.png"},
    {nome: "Ningguang", imagem: "imagensPerfil/personagensPerfil/ningguang_Icon.png"},
    {nome: "Ningguang Skin", imagem: "imagensPerfil/personagensPerfil/Ningguang_Skin_Orchid_s_Evening_Gown_Icon.png"},
    {nome: "Noelle", imagem: "imagensPerfil/personagensPerfil/Noelle_Icon.png"},
    {nome: "Qiqi", imagem: "imagensPerfil/personagensPerfil/Qiqi_Icon.png"},
    {nome: "Raiden Shogun", imagem: "imagensPerfil/personagensPerfil/Raiden_Shogun_Icon.png"},
    {nome: "Razor", imagem: "imagensPerfil/personagensPerfil/Razor_Icon.png"},
    {nome: "Rosaria", imagem: "imagensPerfil/personagensPerfil/Rosaria_Icon.png"},
    {nome: "Rosaria Skin", imagem: "imagensPerfil/personagensPerfil/Rosaria_Skin_To_the_Church_s_Free_Spirit_Icon.png"},
    {nome: "Sangonomiya Kokomi", imagem: "imagensPerfil/personagensPerfil/Sangonomiya_Kokomi_Icon.png"},
    {nome: "Sayu", imagem: "imagensPerfil/personagensPerfil/Sayu_Icon.png"},
    {nome: "Shenhe", imagem: "imagensPerfil/personagensPerfil/Shenhe_Icon.png"},
    {nome: "Shikanoin Heizou", imagem: "imagensPerfil/personagensPerfil/Shikanoin_Heizou_Icon.png"},
    {nome: "Sucrose", imagem: "imagensPerfil/personagensPerfil/Sucrose_Icon.png"},
    {nome: "Tartaglia", imagem: "imagensPerfil/personagensPerfil/Tartaglia_Icon.png"},
    {nome: "Thoma", imagem: "imagensPerfil/personagensPerfil/Thoma_Icon.png"},
    {nome: "Tighnari", imagem: "imagensPerfil/personagensPerfil/Tighnari_Icon.png"},
    {nome: "Traveler", imagem: "imagensPerfil/personagensPerfil/Traveler_Icon.png"},
    {nome: "Venti", imagem: "imagensPerfil/personagensPerfil/Venti_Icon.png"},
    {nome: "Wanderer", imagem: "imagensPerfil/personagensPerfil/Wanderer_Icon.png"},
    {nome: "Wriothesley", imagem: "imagensPerfil/personagensPerfil/Wriothesley_Icon.png"},
    {nome: "Xiangling", imagem: "imagensPerfil/personagensPerfil/Xiangling_Icon.png"},
    {nome: "Xiao", imagem: "imagensPerfil/personagensPerfil/Xiao_Icon.png"},
    {nome: "Xingqiu", imagem: "imagensPerfil/personagensPerfil/Xingqiu_Icon.png"},
    {nome: "Xinyan", imagem: "imagensPerfil/personagensPerfil/Xinyan_Icon.png"},
    {nome: "Yae Miko", imagem: "imagensPerfil/personagensPerfil/Yae_Miko_Icon.png"},
    {nome: "Yanfei", imagem: "imagensPerfil/personagensPerfil/Yanfei_Icon.png"},
    {nome: "Yaoyao", imagem: "imagensPerfil/personagensPerfil/Yaoyao_Icon.png"},
    {nome: "Yelan", imagem: "imagensPerfil/personagensPerfil/Yelan_Icon.png"},
    {nome: "Yoimiya", imagem: "imagensPerfil/personagensPerfil/Yoimiya_Icon.png"},
    {nome: "Yun Jin", imagem: "imagensPerfil/personagensPerfil/Yun_Jin_Icon.png"},
    {nome: "Zhongli", imagem: "imagensPerfil/personagensPerfil/Zhongli_Icon.png"}
];
function gerarImagemPersonagens(){
    const container = document.getElementById("personagens");

    personagens.forEach(personagem => {
        const imgElement = document.createElement("img");
        imgElement.src = personagem.imagem;
        imgElement.alt = personagem.nome;
        imgElement.classList.add("personagem");
        imgElement.onclick = function (){
            selecionarPersonagem(personagem.imagem);
        };
        container.appendChild(imgElement);
    });
}

window.onload = gerarImagemPersonagens;
function selecionarPersonagem(caminhoDaImagem){
    document.getElementById('perfil').src = caminhoDaImagem;
    localStorage.setItem("perfil", caminhoDaImagem);
    closeModal();
}
function openModal(){
    document.getElementById('painel').style.display = 'block';
}
function closeModal(){
    document.getElementById('painel').style.display = 'none';
}