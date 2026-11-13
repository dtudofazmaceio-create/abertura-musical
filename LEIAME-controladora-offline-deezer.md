# Palco Musical: controladora DJ, modo offline e Deezer

## Instalação

1. Substitua o `index.html` do repositório pelo arquivo novo.
2. Coloque o **`sw.js`** na mesma pasta do `index.html`. É ele que permite abrir o app sem internet.
3. Publique (GitHub Pages ou o servidor que você já usa) e abra o app **uma vez com internet**. A partir daí ele abre offline também.

> Use o **Google Chrome** ou o **Microsoft Edge** no computador. O Safari e o Firefox não têm suporte a controladoras MIDI.

---

## 1. Controladora DJ (MIDI)

**Modo DJ → botão `CONTROLADORA`** (no topo, ao lado de Telão).

- **Conectar controladora**: ligue o USB e clique no botão. O navegador vai pedir permissão para "dispositivos MIDI".
- **O modelo é reconhecido sozinho** quando você liga o USB. São 74 modelos na lista, entre eles:
  - **Pioneer:** DDJ-400, DDJ-FLX4, **DDJ-RB**, DDJ-SB, **DDJ-SB2**, DDJ-SB3, DDJ-SX, DDJ-200
  - **Hercules:** DJControl Inpulse 200/300/500, Starlight, Compact, MIX, Jogvision, DJ Console RMX/RMX2/MK2/MK4, Instinct, AIR, MP3, Steel
  - **Numark:** Mixtrack, Mixtrack Pro, Pro II, Pro 3, Platinum, Party Mix, DJ2Go, Mixstream Pro, NS6II, NS7, N4, iDJ Live II, Omni/Total Control
  - **Reloop:** Beatmix 2/4 MK2, Terminal Mix 2/4, Jockey 3 ME, Digital Jockey 2
  - **Denon DJ:** MC3000, MC4000, MC6000MK2, MC7000
  - **Outros:** Roland DJ-505, Behringer CMD Studio 4a / CMD Micro / BCD2000 / BCD3000, Korg KAOSS DJ, Stanton DJC.4, Vestax VCI-100/400, Typhoon, Spin, MixVibes U-Mix, Gemini FirstMix, Ion Discover DJ e mais
- **Modelo que não está na lista, mas é de uma marca conhecida** (ex.: DDJ-SR2, Mixtrack Platinum FX): o sistema usa o mapeamento do modelo mais parecido da mesma marca e avisa. Teste os controles e ajuste o que faltar com **Aprender**.
- A **DDJ-RB** usa o mapeamento da DDJ-SB2, porque as duas são da mesma família e mandam praticamente os mesmos códigos.
- Os códigos MIDI dos modelos vêm dos mapeamentos abertos da comunidade **Mixxx** (mixxx.org, licença GPL).
- **Qualquer outra controladora**, ou para mudar a função de um botão (ex.: colocar MIX ou AUTO MIX num botão de efeito): em **Mapeamento**, clique em **Aprender** ao lado do comando e mexa no botão ou knob correspondente. Pronto.
- Use **Exportar/Importar** para guardar o mapeamento e levar para outro computador.

### Comandos que podem ir para a controladora

| Por deck (A e B) | Mixer / geral |
|---|---|
| Play/Pause, CUE, Stop, Carregar selecionada, Carregar próxima | Crossfader, Volume master |
| Fader do canal, Ganho/Trim, EQ agudos/médios/graves | MIX, Tempo da mixagem (4/8/12/16 s) |
| **Filtro** (novo: esquerda abafa, direita tira os graves) | AUTO MIX, NIVELAR |
| Pitch/tempo, Jog (pitch bend e arrastar), Pitch bend +/− | Navegar na lista (encoder BROWSE), subir/descer |
| Voltar/avançar 5 s, **Fone/pré-escuta** (novo) | Centralizar crossfader, Telão, Abrir/minimizar decks |
| **Hot cues 1–8** (novo) e apagar hot cue | |

Outros recursos:
- **LEDs**: os botões de play, cue, fone, hot cues, AUTO MIX e NIVELAR acendem na controladora.
- **Soft takeover**: o knob da controladora só "pega" quando passa pela posição que está na tela. Isso evita saltos de volume.
- **Faders de 14 bits** são detectados sozinhos, para dar mais precisão.
- **Monitor MIDI**: mostra cada mensagem que chega, útil para ver se a controladora está respondendo.

### Pads da DDJ-400 / FLX4 (modo HOT CUE)
- 1 a 4: hot cues (o primeiro toque marca, os seguintes saltam para o ponto)
- 5: voltar 5 s · 6: avançar 5 s
- 7: AUTO MIX (deck 1) / NIVELAR (deck 2)
- 8: MIX
- SHIFT + pads 1 a 4: apaga o hot cue
- SYNC: mixa para aquele deck · CFX: filtro · BROWSE + LOAD: escolhe e carrega a música

> Se algum controle do seu modelo não responder, clique em **Aprender** nele e mexa no controle.

### Saídas de áudio e fone
Em **Controladora → Saídas de áudio**:
- **Master**: escolha a placa de som da controladora (ou a saída da mesa de som).
- **Fone**: escolha outra saída, por exemplo o fone do notebook. O botão 🎧 de cada deck (ou o botão CUE de canal da controladora) manda aquele deck para o fone antes de entrar no ar.
- Links do YouTube tocam sempre na saída padrão do Windows. O navegador não deixa redirecionar o som deles.

---

## 2. Modo offline

- O app abre sem internet depois do primeiro acesso online.
- No topo do Modo DJ aparece **ONLINE / OFFLINE**. Quando está offline, o que precisa de internet fica apagado na lista.
- **Importar do aparelho** e o novo botão **Pasta** (importa uma pasta inteira de músicas) guardam os arquivos no próprio computador. Eles tocam sem internet.
- Links diretos (Google Drive, Dropbox, MP3) ganham um botão **⤓ baixar para offline** na lista Avulsas.
- O YouTube, o Spotify, o SoundCloud e o Vimeo **não permitem baixar**. Para tocar sem internet, importe o arquivo da música.
- O app pede ao navegador para não apagar as músicas salvas quando faltar espaço.

---

## 3. Deezer

**Modo DJ → botão `Deezer`**

- Cole o link de uma **playlist, álbum ou faixa**, ou o link do seu **perfil** para escolher entre as suas playlists. A playlist precisa estar **pública** no Deezer.
- Também dá para **buscar** músicas do Deezer e adicionar uma por uma.
- As playlists importadas ficam em **Playlists sincronizadas**. O botão **Sincronizar** (ou a opção automática ao abrir os decks) traz as músicas novas que você adicionou no Deezer.

### Como tocar a música inteira

O Deezer só entrega prévias de 30 segundos para aplicativos de fora. A API pública e o kit oficial de programação dele não liberam a música completa, e entre os programas de DJ só o VirtualDJ tem acordo para isso. O Palco oferece **três caminhos legítimos**:

**1. Ligar ao arquivo do computador** (o melhor para eventos)
Clique em **Ligar a uma pasta de músicas**, ou use Importar/Pasta. O sistema encontra cada faixa pelo nome do arquivo (ex.: `Artista - Título.mp3`). Assim ela toca inteira, com EQ, filtro, forma de onda, hot cues e **sem internet** (✓ na lista).

**2. Deck ao vivo com o Deezer Premium** (botão **Ao vivo**)
- **Deezer Web:** abra deezer.com em outra aba do Chrome/Edge e entre na sua conta. Depois clique em **Ao vivo → Capturar a aba**, escolha a aba do Deezer e deixe marcado **"Compartilhar áudio da aba"**. O som da aba passa a sair **só pelo Palco**: o deck escolhido recebe EQ, filtro, fader, crossfader, MIX, fone e a controladora.
- **App do Deezer no computador:** instale um cabo de áudio virtual (ex.: VB-CABLE, que é gratuito). No Windows, mande a saída do app do Deezer para "CABLE Input". No Palco, clique em **Ao vivo** e escolha a entrada **CABLE Output**.
- Na lista do Deezer, o botão ▶ abre a faixa na mesma aba que está sendo capturada. Dê play lá.
- Limitações: avançar e voltar a música é feito no Deezer. Não há forma de onda nem hot cues. A conta toca uma música por vez, então use o deck ao vivo num lado e as músicas do aparelho ou do YouTube no outro. Precisa de internet.

**3. Achar no YouTube** (botão **YT** ou **Achar todas**)
Liga cada faixa ao vídeo oficial no YouTube. Ele dá preferência aos canais "- Topic" e às versões "áudio oficial" com a mesma duração, e evita versões ao vivo, cover e karaokê quando a original não é. Toca inteira, com internet (sem EQ, como os outros links do YouTube).
- Para a busca automática, crie uma chave grátis: entre em console.cloud.google.com, crie um projeto, ative a **YouTube Data API v3**, vá em **Credenciais → Criar chave de API** e cole a chave no Palco. A cota grátis dá cerca de 100 buscas por dia.
- Sem a chave, o botão **YT** abre a busca no YouTube. Copie o link do vídeo e cole em **Adicionar**.

**O que o Palco não faz:** baixar ou "destravar" músicas do Deezer (programas que usam o token ARL ou quebram a criptografia). Isso viola os termos do Deezer e a proteção do conteúdo, e pode levar ao bloqueio da sua conta.

**Uso em eventos:** os termos do Deezer, como os do Spotify e de outros serviços, valem para uso pessoal. Tocar em evento público ou pago depende também da licença de execução pública (ECAD, no Brasil). A opção 1, com músicas compradas ou de pool de DJ, é a mais segura.

Se o sistema não achar uma música sozinho, use o botão 🔗 ao lado dela para escolher o arquivo manualmente.

> Links curtos (`deezer.page.link`) não funcionam. Abra o link no navegador e copie o endereço completo (`deezer.com/.../playlist/...`).
