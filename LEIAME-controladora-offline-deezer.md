# Palco Musical: console DJ para iPad, pads de efeitos, controladora, modo offline e Deezer

## Instalação

1. Substitua o `index.html` do repositório pelo arquivo novo.
2. Coloque o **`sw.js`** na mesma pasta do `index.html`. É ele que permite abrir o app sem internet.
3. Publique (GitHub Pages ou o servidor que você já usa) e abra o app **uma vez com internet**. A partir daí ele abre offline também.

> **Computador:** use o **Google Chrome** ou o **Microsoft Edge**. O Safari e o Firefox não têm suporte a controladoras MIDI.
> **iPad:** use o Safari (iPadOS 16.4 ou mais novo). Tudo funciona por toque: decks, mixer, pads de performance, efeitos e pads de efeitos. Veja a seção 0.

---

---

## 0. iPad e telas de toque (console PRO)

O Modo DJ virou um console profissional pensado para o dedo. Ele funciona no iPad (em pé ou deitado), em tablets e também no computador.

**Como abrir no iPad**
1. Abra o app no **Safari** com internet uma vez.
2. Toque em **Compartilhar → Adicionar à Tela de Início**. O app abre em tela cheia, sem barra do navegador, e funciona offline.
3. Entre no **Modo DJ** e toque em qualquer lugar do console uma vez. Esse primeiro toque libera o áudio do iPad. O som sai mesmo com a chave de silencioso ligada (iPadOS 16.4+).
4. A tela do iPad não apaga enquanto o console está aberto.

**Controles de toque**
- **Knobs** (AGUDO, MÉDIO, GRAVE, GANHO e FILTRO): arraste para cima ou para baixo. Toque duas vezes para cortar a faixa do EQ (CORTADO) ou zerar o ganho e o filtro. O valor aparece em cima do knob enquanto você mexe.
- **Faders** (pitch, volume do canal, master e crossfader): arraste de qualquer ponto do trilho. No toque, o fader nunca pula sozinho para onde o dedo encostou, para evitar sustos ao vivo. Com o mouse, clicar no trilho leva o fader até o ponto.
- **Vários dedos ao mesmo tempo**: dá para mexer em dois faders ou knobs juntos, por exemplo para uma passagem manual.
- **Forma de onda**: com a música tocando, é preciso **tocar duas vezes** para pular para outro ponto. Isso protege contra toques sem querer. Com a música parada, um toque leva ao ponto e dá para arrastar.
- No iPad o botão **Telão** não aparece no Modo DJ (o telão precisa de uma segunda janela, o que o iPad não faz).
- No topo: **PADS** mostra ou esconde os pads dos decks. **🌙** deixa o console sempre escuro (recomendado em eventos). **⤢** abre a tela cheia (quando o navegador permite).

**O que o Safari do iPad não permite**
- **Controladora MIDI**: o Safari não tem Web MIDI. Use os controles de toque (ou um computador com Chrome/Edge).
- **Fone separado (pré-escuta)**: o Safari não deixa escolher a saída de áudio. O botão 🎧 fica escondido.
- **Pasta**: o iPad não deixa escolher uma pasta inteira. Use **Importar do aparelho** e selecione vários arquivos de uma vez no app Arquivos.
- **Links do YouTube**: tocam, mas sem EQ, filtro, efeitos e loops (o navegador não libera o áudio deles).

## 0.1 Pads de performance (em cada deck)

Abaixo dos botões CUE/PLAY de cada deck ficam **8 pads** com 4 modos:

| Modo | O que os pads fazem |
|---|---|
| **HOT CUE** | O primeiro toque marca o ponto. Os seguintes pulam para ele (e dão play). **Segure** o pad para apagar. |
| **LOOP** | Loops de 1/4, 1/2, 1, 2, 4, 8, 16 e 32 batidas, presos na batida da música. Toque de novo para sair. **½** e **×2** mudam o tamanho, **SAIR** encerra. |
| **ROLL** | Repete um trecho curto (1/16 a 8 batidas) **enquanto o dedo estiver no pad**. Ao soltar, a música volta para onde estaria, sem perder o tempo. |
| **FX** | Efeitos no deck: **ECO**, **REVERB**, **FLANGER**, **PHASER**, **FILTRO** (abre e fecha no ritmo), **CRUSH**, **GATE** (corta no ritmo) e **FREIO** (para como um toca-discos). Toque para ligar e desligar. **Segure** para usar só enquanto o dedo estiver no pad. O controle **NÍVEL** ajusta a intensidade. |

- Eco, filtro e gate seguem o **BPM** medido pelo Mix PRO. Se a música ainda não foi analisada, usam 120 BPM até a análise terminar.
- O loop aparece desenhado em verde na forma de onda (o roll, em azul).
- Os pads também podem ir para a controladora: em **CONTROLADORA → Deck A/B → Aprender**, há comandos para Loop de 4 batidas, metade, dobro e cada efeito.

## 0.2 Pads de efeitos (sampler)

Abaixo do crossfader fica o painel **PADS DE EFEITOS**, com **16 sons prontos**: Buzina, Sirene, Impacto, Laser, Subida, Descida, Aplausos, Rewind, Scratch, Sino, Rufar, Fanfarra, Whoosh, Bumbo, Palmas e Bipe.

- Os sons são **gerados pelo próprio app**. Não precisam de internet nem de arquivos.
- Toque no pad para disparar. Tocar de novo recomeça o som. **Parar sons** silencia tudo.
- O volume dos pads é o **VOLUME** do painel e também passa pelo **MASTER** e pelo limitador, então não distorce.
- **Editar pads**: toque em um pad para trocar o **nome**, a **cor**, o **volume** e o **modo** (*Toque*: toca inteiro · *Segurar*: toca enquanto o dedo estiver no pad · *Loop*: liga e desliga). Em **Usar arquivo** você coloca um som seu (vinheta, nome dos noivos, grito da torcida…). Ele fica salvo no aparelho e funciona offline. **Restaurar padrão** volta ao som original.
- **Teclado** (computador ou iPad com teclado): teclas **Z X C V B N , .** disparam os pads 1 a 8. Com **Shift**, os pads 9 a 16.
- **Controladora**: em **CONTROLADORA → Mixer → Aprender**, mapeie “Pad de efeito 1…16” nos pads da sua controladora.

---

## 0.3 Backup completo (levar tudo do computador para o iPad)

Em **Configurações → Backup → Exportar tudo (com arquivos)** o app gera um arquivo `.palco` com **tudo** o que existe no aparelho:
- eventos, cronogramas, músicas, cortes, montagens e fotos;
- **músicas avulsas** do Modo DJ (com os arquivos);
- **pads de efeitos**: nomes, cores, modos, volumes e os **sons próprios** que você colocou (bateria, vinhetas…);
- hot cues, fila do AUTO MIX, análises de BPM, mapeamento da controladora, Mix PRO, Deezer e preferências do console.

**No iPad:** mande o arquivo para o iPad (AirDrop, iCloud Drive, WhatsApp ou e-mail e salve em Arquivos). Abra o app → **Configurações → Backup → Importar backup** e escolha o arquivo. Confira o resumo e toque em **Importar tudo**. O app recarrega já com tudo no lugar.

- Eventos que já existem no iPad são substituídos pela versão do backup. Os outros eventos do iPad continuam lá.
- **Só os dados** gera um arquivo leve, sem as músicas, mas leva os sons próprios dos pads e as fotos.
- O token do GitHub, a saída de áudio escolhida e a conexão da controladora não vão no backup, porque são de cada aparelho.
- Backups antigos (gerados antes desta versão) continuam podendo ser importados.

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

## 2. Fila do AUTO MIX (várias músicas de uma vez)

No Modo DJ, acima das Avulsas, fica a **Fila do AUTO MIX**. Ela tem prioridade sobre o cronograma.

- **Selecionar várias**: toque nas músicas das listas, na ordem em que devem tocar, e depois em **Adicionar à fila**. **Marcar todas** seleciona tudo.
- **+ Todas as avulsas** e **+ Cronograma** (só as que ainda não tocaram) colocam a lista inteira na fila.
- O **+** ao lado de cada música adiciona ou tira só aquela música.
- **Músicas importadas entram direto na fila**: com essa opção ligada, tudo o que vier por Importar ou Pasta já entra na fila.
- No Deezer, **Mandar para a fila do AUTO MIX** coloca na fila todas as faixas que tocam inteiras.
- Para mudar a ordem, arraste a música ou use ↑ ↓. Também dá para **Embaralhar**, tirar uma música (×) ou limpar a fila (lixeira).
- **Tocar a fila** liga o AUTO MIX e começa pela primeira música. Se já houver música tocando, a fila entra logo depois dela.
- **Quando a fila acabar**, você escolhe entre parar, seguir o cronograma ou repetir a fila.
- A música sai da fila quando entra num deck. A fila fica salva por evento.
- Na controladora, dá para mapear o comando "Adicionar a música selecionada à fila" num botão (em CONTROLADORA → Mixer → Aprender).

## 3. Mix PRO (transições como um DJ profissional)

O botão **MIX PRO** fica no centro, abaixo do AUTO MIX, e vem ligado. A engrenagem ao lado abre as opções. Ele funciona no botão MIX, no AUTO MIX e na fila.

**O que ele analisa em cada música** (na primeira vez que ela entra num deck, em poucos segundos):
- **BPM**, a grade de batidas e o **1º tempo de cada compasso**. As batidas aparecem na forma de onda, com uma linha mais forte a cada 32 tempos.
- **Tonalidade**, em notação Camelot (ex.: 8B = Dó maior).
- **Início e fim reais**, sem o silêncio. Essas partes ficam escurecidas na forma de onda.

**O que ele faz na passagem:**
1. **Casa o BPM** da música que entra com a que está tocando (até ±8%, ajustável), sem mudar o tom da voz.
2. **Alinha as batidas e os compassos**: o 1º tempo de uma cai junto com o 1º tempo da outra. Durante a passagem, ele corrige a diferença continuamente, mantendo as batidas a poucos milissegundos.
3. **Escolhe o ponto certo**: no AUTO MIX, a passagem começa no início de uma frase musical (blocos de 8 ou 16 tempos), perto do fim real da música.
4. **Escolhe a técnica**:
   - **BPMs próximos e tons que combinam**: mixagem longa com **troca de graves**. A nova entra sem grave e com o agudo mais baixo. No meio da passagem, os graves trocam de lado num único tempo. Depois, a que sai some.
   - **BPMs muito diferentes**: a que sai vai sumindo num **filtro** e termina com **eco**. A nova entra no 1º tempo do compasso seguinte.
   - **Tons que não combinam**: a passagem fica mais curta.
5. **Volta devagar ao andamento original** da nova música depois da passagem (opcional).

O tamanho da passagem segue os botões 4 / 8 / 12 / 16 s, arredondado para frases (8, 16 ou 32 tempos). Se a música que sai acabar antes, a passagem encurta sozinha.

**SYNC** (em cada deck): casa o BPM e as batidas com o outro deck na hora. Também pode ser mapeado na controladora, assim como o liga/desliga do Mix PRO.

**Limites:** YouTube, Deezer ao vivo e músicas sem batida clara (só voz e violão, por exemplo) usam a passagem clássica por volume. O navegador não deixa analisar o áudio do YouTube.

### AUTO MIX: de onde vem a próxima música
A ordem de busca é esta:
1. A **Fila do AUTO MIX**.
2. A música que já está carregada no outro deck. Ela entra mesmo que já tenha tocado antes.
3. A próxima música da mesma lista que está tocando: se for uma Avulsa, a próxima Avulsa; se for do cronograma, a próxima do cronograma.
4. A outra lista.

Abaixo do botão MIX PRO aparece **"Próxima: …"**. Se não houver nenhuma, aparece **"Sem próxima música!"** em laranja.

### YouTube e anúncios
- **Ao carregar** qualquer vídeo do YouTube num deck, ele já começa a rodar **em silêncio** para "gastar" o anúncio antes da hora. Quando a música começa, o vídeo pausa no início e fica pronto. O deck mostra "Anúncio rodando em silêncio".
- **Anúncio no deck que está no ar:** o volume fica fechado e o deck mostra **"Anúncio do YouTube"**. Se aparecer **Pular**, clique nele no vídeo: a música entra e o volume abre sozinho, em cerca de 1 s.
- **Para a pista não ficar em silêncio:** com o AUTO MIX ligado, se o anúncio passar de 6 s e o outro deck tiver uma música pronta, o sistema toca o outro deck. O vídeo continua rodando o anúncio em silêncio e entra como próxima música quando ficar pronto. Com o AUTO MIX desligado, aparece o botão **"Tocar o deck X enquanto isso"**.
- **Passagem com anúncio:** se a próxima música do YouTube ainda estiver no anúncio na hora da passagem, o sistema espera ele acabar (até 60 s).
- **"Clique aqui para liberar o som":** esse aviso agora só aparece quando o navegador realmente bloqueou o áudio, ou seja, antes de qualquer clique na página. Anúncio não é bloqueio.

## 4. Modo offline

- O app abre sem internet depois do primeiro acesso online.
- No topo do Modo DJ aparece **ONLINE / OFFLINE**. Quando está offline, o que precisa de internet fica apagado na lista.
- **Importar do aparelho** e o novo botão **Pasta** (importa uma pasta inteira de músicas) guardam os arquivos no próprio computador. Eles tocam sem internet.
- Links diretos (Google Drive, Dropbox, MP3) ganham um botão **⤓ baixar para offline** na lista Avulsas.
- O YouTube, o Spotify, o SoundCloud e o Vimeo **não permitem baixar**. Para tocar sem internet, importe o arquivo da música.
- O app pede ao navegador para não apagar as músicas salvas quando faltar espaço.

---

## 5. Deezer

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
