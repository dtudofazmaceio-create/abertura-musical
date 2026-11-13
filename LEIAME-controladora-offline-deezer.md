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
- **Pioneer DDJ-400 / DDJ-FLX4**: o modelo é reconhecido e mapeado sozinho.
- **Qualquer outra controladora** (Numark, Hercules, Reloop, Denon, Traktor etc.): em **Mapeamento**, clique em **Aprender** ao lado do comando e mexa no botão ou knob correspondente. Pronto.
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

### Como a música toca inteira
O Deezer **não libera o áudio completo** para nenhum outro aplicativo. Só o app oficial dele toca as músicas inteiras, com proteção. Por isso o sistema funciona assim:

1. Ele importa do Deezer o nome, o artista e a ordem das músicas.
2. Você clica em **Ligar a uma pasta de músicas** (ou usa Importar/Pasta). O sistema encontra o arquivo de cada faixa pelo nome, por exemplo `Artista - Título.mp3`.
3. As faixas ligadas a um arquivo (✓) tocam **inteiras, com EQ, filtro, forma de onda e sem internet**.
4. As faixas sem arquivo tocam só a **prévia de 30 s** do Deezer, e precisam de internet.

Se o sistema não achar uma música sozinho, use o botão 🔗 ao lado dela para escolher o arquivo manualmente.

> Links curtos (`deezer.page.link`) não funcionam. Abra o link no navegador e copie o endereço completo (`deezer.com/.../playlist/...`).
