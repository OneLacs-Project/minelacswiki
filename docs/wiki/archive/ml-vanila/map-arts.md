---
outline: deep
lastUpdated: true
---

<Pill name="ML Ванила" link="/wiki/archive/ml-vanila" icon="solar:archive-bold-duotone" color="#868dcc" /> <br/>

 
# 🖌️ Мап Арты
## Плагин
Для создания Мап-Артов на сервере присутствует плагин ImageFrame <img src="/minecraft/icons/imageFramePluginIcon.png" style="display: inline; margin: 0 2px; vertical-align: middle; width: 26px; height: 26px" />

<Links :items="[
    { 
      name: 'ImageFrame', 
      link: 'https://modrinth.com/plugin/imageframe', 
      image: 'https://cdn.modrinth.com/data/lJFOpcEj/042a7acf702b707ccc076d587ee712d00cd90c50.png', 
      color: '#FF0000', desc: 'Modrinth', 
    },
    ]"
    />

## Создание арта
Для создания арта вам нужны пустые карты  и прямая ссылка на файл картинки/гифки <br />
PNG, JPG, WEBP или GIF <br />
К примеру из Дискорда <br />

Дальше вы прописываете команду

`/frame create [название] [ссылка на картинку] [ширина по количеству карт] [высота по количеству карт]`

::: code-group
``` [Команда]
/frame create 
```
``` [Пример]
/frame create PluginLogo https://cdn.modrinth.com/data/lJFOpcEj/27879b5ca48e01c0150f7bd9b09d2e214dd02175.png 3 3
```
:::
Ширина и высота это сколько карт картинка будет помещатся в рамки. Если ввести 3 на 3 то вам нужно иметь 9 карт для создания вашего арта. <br />
Вы получите 9 карт которые складываются в картинку на рамках 3 на 3

#### Слишком много карт?
Добавьте `combined` в конце команды <br />
Все ваши карты сожмутся в один предмет который при нажатии на рамки будет вставлять всю картинку.
```
/frame create PluginLogo https://cdn.modrinth.com/data/lJFOpcEj/27879b5ca48e01c0150f7bd9b09d2e214dd02175.png 3 3 combined
```
> [!WARNING] Imgur  не работает

### Вставить в рамки
Вы можете выбрать сетку из рамок чтобы автоматически установить арт прямо туда <br />
Пропишите команду

::: code-group
``` [Команда]
/frame select
```
``` [Пример]
/frame create ЛуиАрмстронг https://i.imgur.com/ZaL4WTM.png selection
```
:::
Дальше нажмите на два противоположных угла на вашей сетке из рамок чтобы выбрать размер.

Затем вместо `[ширина по количеству карт] [высота по количеству карт]`  при создании арта напишите в конце `selection` чтобы картинка автоматически поставилась на выбранную область.
## Другие команды


``` 
/frame rename [старое] [новое]
```
``` [Очистить карты с рисунком]
/frame delete [название]
```
``` [Получить существующий арт]
/frame get [название]
```
``` [Список артов]
/frame list
```
``` [Поделится доступом к арту]
/frame setaccess [название] [игрок] [разрешение]
```
