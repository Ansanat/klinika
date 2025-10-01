<template>
  <div class="v-service">
    <div class="service-about">
        <div class="service-header">Уролог</div>
        <div class="service-text">Уролог – это специалист, занимающийся диагностикой и лечением заболеваний органов мочевыделительной системы у женщин и мужчин, а также коррекцией нарушений мужской половой сферы.</div>
        <div class="service-text">Многие урологические патологии на начальном этапе своего развития имеют скрытые симптомы, т. е. ничем себя не проявляют. Поэтому очень важно в профилактических целях 1-2 раза в год посещать уролога и, при необходимости, проходить полное диагностическое обследование.</div>
        <div class="service-text"><b>Прямыми показаниями к консультации специалиста являются следующие нарушения</b></div>
        <div class="service-text" style="text-align: left;">
            •	боли различной интенсивности в области поясницы, нижних отделах живота, паха и придатков;<br>
            •	расстройства мочеиспускания (болезненность, нарушение оттока мочи, задержка или недержание и пр.);<br>
            •	изменение цвета и запаха мочи, появление в ней слизи, крови и других нехарактерных примесей;<br>
            •	нарушение эрекции или снижение потенции;<br>
            •	болезненность при половой близости;<br>
            •	наличие инфекционных заболеваний урогенитального тракта у полового партнера.<br>
        </div>
        <div class="service-header">Услуги врача-уролога</div>
        <div class="price-table">
            <div class="price-line"></div>
            <div v-for="service in urolog_services" :key="service">
                <div class="price-row">
                <div class="price-name">{{service.name}}</div>
                <div class="price-price">{{service.price}}</div>
                </div>
                <div class="price-line"></div>
            </div>
        </div>
        <div class="service-header">Процедуры и манипуляции</div>
        <div class="price-table">
            <div class="price-line"></div>
            <div v-for="service in urolog_procedures" :key="service">
                <div class="price-row">
                <div class="price-name">{{service.name}}</div>
                <div class="price-price">{{service.price}}</div>
                </div>
                <div class="price-line"></div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'v-gastr',
    props: {
    },
    mounted() {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = "Клиника здоровья уролог";
        document.body.appendChild(meta);
    },
    data() {
        return {
            urolog_services: [
                {
                    name: 'Первичный прием',
                    price: '2 000 руб'
                },
                {
                    name: 'Повторный прием',
                    price: '1 800 руб'
                },
                {
                    name: 'Устная консультация',
                    price: '800 руб'
                },
            ],
            urolog_procedures: [
                {
                    name: 'Массаж простаты',
                    price: '500 руб',
                },
                {
                    name: 'Тотальная инстилляция уретры',
                    price: '350 руб',
                },
                {
                    name: 'Передняя инстилляция уретры',
                    price: '300 руб',
                },
                {
                    name: 'Инстилляция мочевого пузыря',
                    price: '500 руб',
                },
                {
                    name: 'Замена катетера эпицистостомы',
                    price: '650 руб',
                },
                {
                    name: 'Тампонада уретры',
                    price: '400 руб',
                },
                {
                    name: 'Бужирование уретры',
                    price: '600 руб',
                },
                {
                    name: 'Ректальное введение лекарственных препаратов',
                    price: '300 руб',
                },
                {
                    name: 'Эндоуретральная манипуляция',
                    price: '1 000 руб',
                },
                {
                    name: 'Передняя эндоуретральная манипуляция',
                    price: '1 300 руб',
                },
                {
                    name: 'Задняя эндоуретральная манипуляция',
                    price: '1 600 руб',
                },
                {
                    name: 'Новокаиновая блокада',
                    price: '450 руб',
                },
                {
                    name: 'Забор мазка из уретры',
                    price: '300 руб',
                },
                {
                    name: 'Забор ПЦР',
                    price: '300 руб',
                },
                {
                    name: 'Забор посева',
                    price: '300 руб',
                },
                {
                    name: 'Комбинированная провокация',
                    price: '450 руб',
                },
                {
                    name: 'Массаж уретры',
                    price: '400 руб',
                },
                {
                    name: 'Удаление папиллом на половых органах',
                    price: '2 100 руб',
                },
                {
                    name: 'Уретроскопия',
                    price: '1 400 руб',
                },
                {
                    name: 'Цистоскопия',
                    price: '2 200 руб',
                },
                {
                    name: 'Операция по поводу "Фимоза" включая наблюдение в дневном стационаре (1 сутки)',
                    price: '8 000 руб',
                },
                {
                    name: 'Стандартное обследование на плановую операцию',
                    price: '3 000 руб',
                },
                {
                    name: 'Операция по поводу полипа уретры',
                    price: '1 810 руб',
                },
                {
                    name: 'Катетеризация мочевого пузыря у мужчин катетером «Фоллея»',
                    price: '600 руб',
                },
                {
                    name: 'Операция при болезни Пейрони ',
                    price: '5 410 руб',
                },
                {
                    name: 'Перевязка',
                    price: '400 руб',
                },
                {
                    name: 'Анестезиологическое обеспечение(наркоз)',
                    price: '4 000 руб',
                },
            ]
        }
    }
}
</script>

<style>
</style>
