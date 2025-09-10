---
outline: deep
lastUpdated: true
---

<Pill name="ML Ванила 2" link="/wiki/archive/ml-vanila-2" icon="solar:archive-bold-duotone" color="#868dcc" /> <br/>

 

# Изображение на мапах

<img src="/WIKI/ML-Vanila-2/Images-on-maps/demo_img_1.avif" style="display: inline; margin: 0 2px; vertical-align: middle;  width: 375px; height: 196px;" /> 

## Плагин
Теперь вы можете закинуть картинку на пустые карты при помощи  DrMap
<Links :items="[
    { 
        name: 'DrMap', 
        link: 'https://modrinth.com/plugin/drmap', 
        image: 'https://cdn.modrinth.com/data/MCEWz23F/a8b3940cc7e574e3b70ab5575e04cc1e6e1c7ccd_96.webp'
    },
  ]"
/>

## Команды
### Создание картинки
Вам нужно держать новую пустую карту в руке при использовании команды 

/drmap create <ссылка> {параметры}
::: code-group
``` [Команда]
/drmap create 
```
``` [Пример]
/drmap create https://i.imgur.com/KuXTMs9.png height:2 width:2
```
:::

#### Параметры
`width:число` - `число` карт в ширину 

`height:число` - `число` карт в высоту

`background:цвет` - `цвет` фона. Чтобы оставить прозрачным <span style="color: orange;">не трогайте</span> этот параметр.

## Стереть картинку
Вам нужно держать одну из созданых карт в руке при использовании команды 
```
/drmap erase
```

## Информация о картинке
Вам нужно держать одну из созданых карт в руке при использовании команды 
```
/drmap info
```
Отобразит кто и когда создал картинку, ссылка на оригинал, и позиция карты в сетке (когда больше 1x1)