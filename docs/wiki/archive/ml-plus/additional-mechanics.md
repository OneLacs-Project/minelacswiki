---
outline: 2
lastUpdated: true
---

<Pill name="ML Плюс" link="./" icon="solar:archive-bold-duotone" color="#868dcc"  /> <br/>
 
# Доп Механики
Этот сезон добавляет новые механики игры на сервере.

### Содержание:

<!-- 1. **[Скрытие брони](#1)**
2. **[Мяч](#2)**
3. **[Бетон в котле](#3)**
4. **[Головы с игроков](#4)**
5. **[Рамки](#5)**
6. **[Палка отладки](#6)** 
7. **[Рыбалка](#7)** 
8. **[Перенос жителя](#8)**  
9. **[Предметы в табличках](#9)** 
10. **[Формы порталов](#10)** 
11. **[Шалкер из шалкера](#11)** ✨
12. **[Мини блоки](#12)** ✨
13. **[Плевок](#13)** ✨ -->

<!-- |||
|               -               |                     -                 |
|1. **[Скрытие брони](#1)**     |8. **[Перенос жителя](#8)**            |
|2. **[Мяч](#2)**               |9. **[Предметы в табличках](#9)**      |
|3. **[Бетон в котле](#3)**     |10. **[Формы порталов](#10)**          |
|4. **[Головы с игроков](#4)**  |11. **[Шалкер из шалкера](#11)**       |
|5. **[Рамки](#5)**             |12. **[Мини блоки](#12)**              |
|6. **[Палка отладки](#6)**     |13. **[Плевок](#13)**                  |
|7. **[Рыбалка](#7)**           |14. **[Изменение роста](#14)**         | -->

<!-- 
<Pill name="Скрытие брони" link="#1" image="https://minecraft.wiki/images/thumb/Enchanted_Chainmail_Chestplate_%28item%29.gif/120px-Enchanted_Chainmail_Chestplate_%28item%29.gif?9693a"/> 
<Pill name="Мяч" link="#2" image="/WIKI/ML-Vanila-2/Additional-Mechanics/demo_img_7.avif"/> 
<Pill name="Бетон в котле" link="#3" image="https://minecraft.wiki/images/thumb/Water_Cauldron_JE7.png/150px-Water_Cauldron_JE7.png?81610"/> 
<Pill name="Головы с игроков" link="#4" image="https://minecraft.wiki/images/thumb/Player_Head_%28S%29_JE2.png/150px-Player_Head_%28S%29_JE2.png?6f81f"/> 
<Pill name="Рамки" link="#5" image="https://minecraft.wiki/images/Invicon_Item_Frame.png?68f6f"/> 
<Pill name="Палка отладки" link="#6" image="https://minecraft.wiki/images/Debug_Stick.gif?c7249"/> 
<Pill name="Рыбалка" link="#7" image="https://minecraft.wiki/images/thumb/Enchanted_Fishing_Rod.gif/120px-Enchanted_Fishing_Rod.gif?f9296"/> 
<Pill name="Перенос жителя" link="#8" image="https://minecraft.wiki/images/thumb/Desert_Villager_Base_JE2.png/80px-Desert_Villager_Base_JE2.png?744cf"/> 
<Pill name="Предметы в табличках" link="#9" image="https://minecraft.wiki/images/Invicon_Oak_Sign.png?45ec7"/> 
<Pill name="Формы порталов" link="#10" image="https://minecraft.wiki/images/Nether_portal_%28animated%29.png?26915"/> 
<Pill name="Шалкер из шалкера" link="#11" image="https://minecraft.wiki/images/thumb/Shulker_Box_JE1_BE1.gif/94px-Shulker_Box_JE1_BE1.gif?d473a"/> 
<Pill name="Мини блоки" link="#12" image="https://minecraft.wiki/images/Creeper_Head_%28S%29_JE1.png?14d9d"/> 
<Pill name="Плевок" link="#13" image="https://minecraft.wiki/images/thumb/Llama_Spit.png/120px-Llama_Spit.png?280f9"/> 
<Pill name="Изменение роста" link="#14" image="https://minecraft.wiki/images/thumb/Jungle_Baby_Villager_BE.png/60px-Jungle_Baby_Villager_BE.png?54631"/>  -->


<Box :items="[ 
{ 
  name: 'Анимки блоков',  
  link: '#19',  
  image: 'https://minecraft.wiki/images/thumb/Sonic_Explosion_%28texture_9%29_JE1_BE1.png/16px-Sonic_Explosion_%28texture_9%29_JE1_BE1.png?1f994',  tag: 'NEW'
},
{ 
  name: 'Предметы на голову',  
  link: '#18',  
  image: 'https://minecraft.wiki/images/thumb/Observer_JE4_BE3.png/150px-Observer_JE4_BE3.png?39c33',  tag: 'NEW'
},
{ 
  name: 'Репутация',  
  link: '#17',  
  image: 'https://minecraft.wiki/images/thumb/Glint_%28texture%29_JE1_BE1.png/16px-Glint_%28texture%29_JE1_BE1.png?00d0a', tag: 'NEW'
}, 
{ 
  name: 'Привязанная душа',  
  link: '#16',  
  image: 'https://minecraft.wiki/images/thumb/Soul_%28texture_7%29_JE1_BE1.png/16px-Soul_%28texture_7%29_JE1_BE1.png?e6477',  tag: 'NEW'
},
{ 
  name: 'Тотем в пустоте',  
  link: '#15',  
  image: 'https://minecraft.wiki/images/Totem_of_Undying_JE2_BE2.png?d56eb', tag: 'NEW'
},
{ 
  name: 'Скрытие брони',  
  link: '#1',  
  image: 'https://minecraft.wiki/images/thumb/Enchanted_Chainmail_Chestplate_%28item%29.gif/120px-Enchanted_Chainmail_Chestplate_%28item%29.gif?9693a',   
},
{ 
  name: 'Мяч',  
  link: '#2',  
  image: '/WIKI/ML-Vanila-2/Additional-Mechanics/demo_img_7.avif',   
},
{ 
  name: 'Бетон в котле',  
  link: '#3',  
  image: 'https://minecraft.wiki/images/thumb/Water_Cauldron_JE7.png/150px-Water_Cauldron_JE7.png?81610',   
},
{ 
  name: 'Головы с игроков',  
  link: '#4',  
  image: 'https://minecraft.wiki/images/thumb/Player_Head_%28S%29_JE2.png/150px-Player_Head_%28S%29_JE2.png?6f81f',   
},
{ 
  name: 'Рамки',  
  link: '#5',  
  image: 'https://minecraft.wiki/images/Invicon_Item_Frame.png?68f6f',   
},
{ 
  name: 'Палка отладки',  
  link: '#6',  
  image: 'https://minecraft.wiki/images/Debug_Stick.gif?c7249',   
},
{ 
  name: 'Рыбалка',  
  link: '#7',  
  image: 'https://minecraft.wiki/images/thumb/Enchanted_Fishing_Rod.gif/120px-Enchanted_Fishing_Rod.gif?f9296',   
},
{ 
  name: 'Перенос жителя',  
  link: '#8',  
  image: 'https://minecraft.wiki/images/thumb/Desert_Villager_Base_JE2.png/80px-Desert_Villager_Base_JE2.png?744cf',   
},
{ 
  name: 'Предметы в табличках',  
  link: '#9',  
  image: 'https://minecraft.wiki/images/Invicon_Oak_Sign.png?45ec7',   
},
{ 
  name: 'Формы порталов',  
  link: '#10',  
  image: 'https://minecraft.wiki/images/Nether_portal_%28animated%29.png?26915',   
},
{ 
  name: 'Шалкер из шалкера',  
  link: '#11',  
  image: 'https://minecraft.wiki/images/thumb/Shulker_Box_JE1_BE1.gif/94px-Shulker_Box_JE1_BE1.gif?d473a',   
},
{ 
  name: 'Мини блоки',  
  link: '#12',  
  image: 'https://minecraft.wiki/images/Creeper_Head_%28S%29_JE1.png?14d9d',   
},
{ 
  name: 'Плевок',  
  link: '#13',  
  image: 'https://minecraft.wiki/images/thumb/Llama_Spit.png/120px-Llama_Spit.png?280f9',   
},
{ 
  name: 'Изменение роста',  
  link: '#14',  
  image: 'https://minecraft.wiki/images/thumb/Jungle_Baby_Villager_BE.png/60px-Jungle_Baby_Villager_BE.png?54631',   
},
]"/>

## Скрытие брони  {#1}
Игроки могут визуально скрыть свою броню для себя и других игроков сохраняя защиту.
Это полезно для того чтобы показывать свой скин не снимая брони = защита + 4 слота инвентаря не занято.

<img src="/WIKI/ML-Plus/Additional-Mechanics/demo_img_1.png" style="display: inline; margin: 0 2px; vertical-align: middle;  width: 178px; height: 181px;" />

```
/ha toggle
```
Команда как кнопка, прописал - скрытая, прописал снова - броня видна.

## Мяч  {#2}
<!-- > [!WARNING] Перестал работать при переходе 1.21.1 -->

<!-- ::: details Описание -->

В игре теперь присутствует интерактивный мяч<br/> <img src="/WIKI/ML-Plus/Additional-Mechanics/demo_img_2.png" style="display: inline; margin: 0 2px; vertical-align: middle;  width: 169px; height: 76px;" />

### Крафт 
Крафтится из живого иглобрюха  , нажав по нему 8 единицами кожи , после чего он скукожится в форму мяча, который можно подобрать нажав Шифт.

### Управление
1. Пинать - ЛКМ по мячу
2. Бросок - Шифт + мяч в руках и ЛКМ
3. Выше - Прыгнуть при броске


#### Дополнительно
Изменение скина мяча. При использовании команды ниже с мячом в руке, откроется меню где можно выбрать имеющиеся скины для мяча. Если вы хотите добавить свой скин, пишите в канал идеи на нашем дискорд сервере. Вы можете найти головы и скинуть ссылку с [этого сайта](https://minecraft-heads.com/).
``` 
/ballskin
```

<img src="/WIKI/ML-Vanila-2/Additional-Mechanics/demo_img_5.png" style="display: inline; margin: 0 2px; vertical-align: middle;  width: 300px; height: 124px;" />

<img src="/WIKI/ML-Vanila-2/Additional-Mechanics/demo_img_6.avif" style="display: inline; margin: 0 2px; vertical-align: middle;  width: 300px; height: 154px;" /> <img src="/WIKI/ML-Vanila-2/Additional-Mechanics/demo_img_7.avif" style="display: inline; margin: 0 2px; vertical-align: middle;  width: 300px; height: 154px;" /> 

<img src="/WIKI/ML-Vanila-2/Additional-Mechanics/demo_img_8.avif" style="display: inline; margin: 0 2px; vertical-align: middle;  width: 300px; height: 154px;" />  <img src="/WIKI/ML-Vanila-2/Additional-Mechanics/demo_img_9.avif" style="display: inline; margin: 0 2px; vertical-align: middle;  width: 300px; height: 154px;" /> 

<!-- ::: -->

## Бетон в котле  {#3}
Теперь вы можете создавать бетон  из сухого бетона  прямо в котле с водой .

## Головы с игроков  {#4}
При убийстве игрока с шансом 25% из игрока выпадет его голова.

## Рамки  {#5}
Вы можете сделать рамку невидимой нажав по ней ножницами с зажатым Шифт

## Палка отладки  {#6} 

Отныне на сервере вы можете скрафтить <Pill name="Палку отладки" link="https://ru.minecraft.wiki/w/%D0%9F%D0%B0%D0%BB%D0%BA%D0%B0_%D0%BE%D1%82%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8" image="https://minecraft.wiki/images/Debug_Stick.gif?c7249"/>

Конечно-же она имеет свои лимиты, к примеру вы не можете ускорить рост посевов, или создать воду в незере.

Она идет в двух вариациях
|Разрушаемая `1000 Единиц`|Бесконечная|
|-|-|
|![](/WIKI/ML-Plus/Additional-Mechanics/demo_img_3.png)|![](/WIKI/ML-Plus/Additional-Mechanics/demo_img_4.png)|

## Рыбалка   {#7} 

Теперь когда рыба села вам на кручек, удочку нужно вытянуть на зеленой зоне. <br/>
Если же вы вытянули на красной зоне то вы не получите ничего.

|Полоска|Сообщение о поимке|
|-|-|
|![](/WIKI/ML-Plus/Additional-Mechanics/demo_img_5.png)|![](/WIKI/ML-Plus/Additional-Mechanics/demo_img_6.png)|

## Перенос жителя  {#8} 

Теперь вы можете перевозить жителя на Верблюде и на Ламе

|Верблюд|Лама|
|:-|:-|
| Посадить: Наехать на жителя <br/> Высадить: Шифт + ПКМ по жителю | Посадить: Наехать на жителя  <br/> (с поводком) <br/> Высадить: Шифт + ПКМ по жителю |

## Предметы в табличках  {#9} 

Положить предмет: ПКМ предметом по табличке

Снять предмет: Ударить по предмету

- Работает как на обычной так и подвесной табличке
- Использовать можно обе стороны
- Ставить предмет можно только когда туда где вообще нету никакого текста
- Предмет вращать нельзя
- Подсветить предмет нельзя
 
![](/WIKI/ML-Plus/Additional-Mechanics/demo_img_7.png)


## Формы порталов {#10} 

Теперь вы можете делать портал любой формы<br/> 
хоть в 2 блока, хоть в 1, хоть в полоску, да хоть в форме ленивца, как хотите.

![](/WIKI/ML-Plus/Additional-Mechanics/demo_img_8.png)


## Шалкер из шалкера {#11}

Теперь из шалкера падают 2 панциря и вы можете скрафтить шалкер из одного

## Мини блоки {#12}

Теперь почти каждый блок можно переделать в голову с мини текстурой блока. Все это можно сделать в камнерезе.
![](/WIKI/ML-Plus/Additional-Mechanics/demo_img_9.png)


## Плевок  {#13}

> [!IMPORTANT] Доступно только с подпиской <Pill name="Ultimate" link="https://shop.minelacs.ru/" image="https://easydonate.s3.easyx.ru/images/logos/30b46096ecbbb5230d763a396cebb547a2d9d908876962f64a3f1d7f248fcf4a.png" color="#f0662a" />

Чтобы плюнуть как лама пропишите 

```
/spit
```

## Изменение роста {#14}

Теперь вы можете изменять свой рост игрока командой. 

```
/resize
```

Размер `1` является дефолтным размером игрока.

||Без **Ultimate**|<Pill name="Ultimate" link="https://shop.minelacs.ru/" image="https://easydonate.s3.easyx.ru/images/logos/30b46096ecbbb5230d763a396cebb547a2d9d908876962f64a3f1d7f248fcf4a.png" color="#f0662a" />|
|:-|:-:|:-:|
|Размеры|  `0.85` - `1.15` | `0.5` - `1.5` |
|Перезарядка| `30 секунд` | `0 секунд` |

## Тотем в пустоте ✨ {#15}

Теперь если вы упадете в пустоту, то тотем безсмертия сработает и подбросит вас вверх и выдаст еффект медленного падения.

## Привязанная душа ✨ {#16}

Теперь на месте вашей смерти, или в безопастном месте неподалеку,<br/> останется ваша душа которая будет для вас караулить предметы в течении `3-х часов`, после чего выбросит предметы и не оставит опыта.

Еще плюс в том что будет сохранено больше вашего опыта, больше чем в ванильной игре.


## Репутация ✨ {#17}

Теперь на сервере есть система репутации. <br/>Вам помог игрок? Респект. Игрок хуесос реально? Дисреспект. Все <u>просто!</u>

Вы начинаете с репутации `0` 

У вас есть возможность повысить или понизить при использовании команды и ника игрока каждые `24 часа`

::: code-group
``` [Повысить]
/rep
```
``` [Понизить]
/disrep
```
:::

На себя не работает кста)

## Предмет на голову ✨ {#18}

Теперь вы можете надевать на голову разные предметы. 

Чтобы надеть - возьмите какой-то предмет из списка в руку, и начните отдрачивать Шифт пока не наденется.

Чтобы снять просто уберите из слота головы.

Доступные предметы:
- Стёкла (Все цветовые вариации + тонированное);
- Азалия (+ Цветущая версия);
- Флаги (Все цветовые вариации + рисунку);
- Светильник Джека;
- Компостница;
- Блок Мёда, Слизи;
- Лёд;
- Калитки (Все цветовые вариации);
- Стержень Энда;
- Раздатчик, Выбрасыватель, Наблюдатель;
*Кость (Не блок);

<Vid is="youtube" id="MRrYJBp6I9I" />

## Анимки блоков ✨ {#19}

Добавляет новые и более интересные частицы/анимации блоков для:
- Стол Зачарования; (Частицы возле стола и шаровая частница внутри книги + Красивая анимация при успешном чаровании)
- Яйца Дракона; (Кольцевой эффект + круговая полоска вокруг него)
- Маяка; (Кольцевой эффект + круглые частицы вокруг него)
- Черепа иссушителя; (Исходят тёмные частицы)
- Проигрывателя; (Вставляется пластинка с анимацией)
- Зельеварки; (Звуковой эффект при варке зелья)


<Vid is="youtube" id="H-WjPfLMaLY" />
