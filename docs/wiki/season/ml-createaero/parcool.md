---
outline: deep
lastUpdated: true
title: ParСool! Мод 
---

<Pill name="ML Create & Aero" link="/wiki/season/ml-createaero" color="#868dcc"  /><br/>{#parcool!}
<!-- icon="solar:archive-bold-duotone" -->

<!-- Заголовок + картинка  -->
<div style="display: flex; align-items: center;"> 
    <!-- Заголовок -->
  <div style="flex: 1; padding-right: 20px;">
    <h1> ParCool! <br/> <span style="color: gray;"><sup>Паркурим по гаражам</sup></span></h1>  
  </div>
    <!-- Картинка -->
  <div style="flex: 0 0 190px;">
    <a href="https://www.curseforge.com/minecraft/mc-mods/parcool" target="_blank"> <!-- Гиперссылка в отдельную вкладку -->
      <img  src="https://media.forgecdn.net/attachments/803/818/parcool-new-logo-mk.png" style="flex: 0 0;">
    </a>
    <a href="https://github.com/alRex-U" target="_blank" style="text-decoration: none;">
      <span style="color: gray;"><sub>by <i>alRex-U</i></sub></span>
    </a>
  </div>
</div> 

<!-- # ParCool <br/> <span style="color: gray;"><sup>Паркурим по гаражам</sup></span> -->

> [!WARNING] Это не официальная документация плагина! 
> *Официальные Источники ->* [Github](https://github.com/alRex-U/ParCool/blob/main/docs/parcool-guide-on-web-latest/Introduction.md) , [CurseForge](https://www.curseforge.com/minecraft/mc-mods/parcool)
>
> Используйте список справа чтобы перемещаться между разделами

### Трейлер<br/> <span class="ignore-header" style="color: gray;"><sup>Ахуеть</sup></span>
<Vid id="yd8yR_lIz_A" />

## Добавления
### Зиплайн Крюки<br/> <span class="ignore-header" style="color: gray;"><sup>Какой больше нравится</sup></span>
|Деревянный|Железный|
|-|-|
|![](/WIKI/ML-Create-3/ParCool/wooden_hook.png)|![](/WIKI/ML-Create-3/ParCool/iron_hook.png)|

### Зиплайн <br/> <span style="color: gray;"><sup>(Всех 16 цветов)</sup></span>
|Крафт|Предназначение|
|-|-|
|![](/WIKI/ML-Create-3/ParCool/zipline_rope.png)|- Вешается между двумя крюками. <br/> - Под наклоном -> Игрок спустится. <br/>- Ровно -> Можно передвигаться вдоль. <br/> - Не может быть вертикально.|
## Механики

|Настройки|Вкл/Выкл Мод|
|-|-|
|`Alt + P`|`Ctrl + P`|
|Можно выключить не нужную суету|Выключить всю суету|
### Стамина ⚡{#стамина}
Стамина или Усталось является новым индикатором хотбара который отвечает за возможность выполнения трюков и другой суеты которую добавляет мод [ParCool!](#parcool!).

![Работа стамины](/WIKI/ML-Create-3/ParCool/stamina_preview.gif)

### Ускоренный бег {#ускоренныи-бег}
Теперь в игре два типа бега, обычный, и ускоренный. По умолчанию ускоренный бег активируется как и обычный, зажатым `Ctrl`. Сопровождается анимацией бега, а при повороте, модель игрока наклоняется. 

Этот бег, естественно, по немногу использует [стамину](#стамина), однако обычный бег не использует ее.

Если [стамина](#стамина) закончится или вы будете голодны, то вы не сможете бежать ни ускоренным, ни обычным бегом. 


### Cуета 

|Прием|Комбинация|
|:-|-|
|Ползание | Удерживайте `C`. |
|Подкат | [Ускоренный бег](#ускоренныи-бег) + `C`.<br/><span style="color: gray;"><sup>Можно в 1 блок</sup></span>|
|Кошачий рывок | [Ускоренный бег](#ускоренныи-бег) Вперед -> `Shift` + `W/A/S/D` на короткое время и отпустить. |
|Усиленный прыжок | Зажмите `Shift` -> Шкала [стамины](#стамина) -> + `Пробел`. <br/><span style="color: gray;"><sup>2 блока ↑</sup></span>|
|Прыжок через препятствие | [Ускоренный бег](#ускоренныи-бег) -> в блок не останавливаясь. <br/><span style="color: gray;"><sup>Нужно 2 свободных блока выше</sup></span>|
|Уклонение |`W/A/S/D + R` кувыркнуться вперед/назад/налево/направо. <br/><span style="color: gray;"><sup>Не в 1 блок</sup></span>|
|Сальто | Одновременно `W/S + Пробел` сальто вперед/назад.|
|Скольжение по стене |Зажмите `ПКМ` у стены.|
|Прыжок от стены|Спиной к стене `Пробел` + `Пробел` в нужную сторону.|
|Бег по стене | [Ускоренный бег](#ускоренныи-бег) ↑▨ + `Пробел` у стены + Зажмите `R`.|
|Горизонтальный бег по стене| [Ускоренный бег](#ускоренныи-бег) ->▨ + Смотреть выше горизонта + Удерживайте `Пробел` у стены.<br/><span style="color: gray;"><sup>5 блоков ↑</sup></span>|
|Зацеп за уступ| `Пробел` + Удерживайте `ПКМ` у открытого блока. <br/>`Пробел` чтобы залезть на блок. <br/><span style="color: gray;"><sup>+ <span style="color: #a8b1ff;">высокий прыжок</span> = 4 блока↑</sup></span>|
|Взбирание по столбу  | Удерживайте `Пробел` у шеста.<br/><span style="color: gray;"><sup>Заборы, цепи, стержни энда, и тд.</sup></span>|
|Ходить по шесту/зиплайну | `Пробел` под [зиплайном](#зиплаин-всех-16-цветов)/забором -> Удерживайте `ПКМ`.<br/><span style="color: gray;"><sup>[Зиплайны](#зиплаин-всех-16-цветов), заборы, цепи, стержни энда, и тд.</sup></span>|
|Безопастное приземление|[Ускоренный бег](#ускоренныи-бег) + `Пробел` -> `R` при падении.<br/><span style="color: gray;"><sup> 7 блоков и ниже = полное поглощение </sup></span>|
|Ныряние|[Ускоренный бег](#ускоренныи-бег) + `Пробел` с высоты выше 6 блоков.|
|Воздушный нырок| <span style="color: #a8b1ff;">Нырнуть в пропасть</span> + `Пробел` в полете.|
|Спрятаться в блоке|На двух блоках ▨▨  -> `Shift` + Удерживайте `C`.<br/><span style="color: gray;"><sup> 2 блока *листьев*🍃 или *стога* *сена*🌾 </sup></span>|

> [!WARNING] Скользкие блоки по типу льда могут не работать с некоторыми приемами мода

***<center> Вся суета выше использует [стамину](#стамина) и имеет кулдауны. <br/><span style="color: gray;"><sup> This is not a promotion of the mod "ParCool!" in any shape or form. All rights are reserved by [alRex-U](https://github.com/alRex-U) </sup></span></center>***